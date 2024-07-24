"use client"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { parseAbsoluteToLocal } from "@internationalized/date"
import { getUserCourses, createTask, updateTask } from "@/actions"
import { defaultCols } from "./data"
import {
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,
  Input, Button, DatePicker, Textarea, Select, SelectItem
} from "@nextui-org/react"
import { Task } from "@prisma/client"

interface Option {
  label: string
  value: string
}

interface Props {
  isOpen: boolean
  onOpenChange: () => void
  mode: "add" | "update"
  handleTaskAction: (task: Task) => void
  values?: {
    id?: number
    taskName: string
    description: string
    date: Date
    selectedCourse: string
    state: string
  }
}

const defaultValues = {
  taskName: "",
  description: "",
  date: new Date(),
  selectedCourse: "",
  state: ""
}

export const TaskModal = ({ isOpen, onOpenChange, handleTaskAction, mode, values = defaultValues }: Props) => {
  const periodId = usePathname().split("/")[3]

  const { data: session } = useSession()
  const [loading, setLoading] = useState(false)

  const [courses, setCourses] = useState<Option[]>([])
  const [formData, setFormData] = useState({
    ...values,
    selectedCourse: values.selectedCourse || ""
  })

  useEffect(() => {
    if (!session) return

    if (!isOpen) {
      resetForm()
      return
    }

    getUserCourses(parseInt(session.user.id))
      .then(newCourses => newCourses.filter(course => course.period === periodId))
      .then(newCourses => newCourses.map(course => ({ label: course.name, value: course.id.toString() })))
      .then(courses => {
        setFormData({
          ...values,
          selectedCourse: courses.find(course => course.label === values.selectedCourse)?.value || ""
        })
        setCourses(courses)
      })
      .catch(error => console.error("Error al obtener cursos del usuario: ", error))

  }, [isOpen, session, periodId])

  // useEffect(() => {
  //   if (mode === "update" && courses.length > 0) {
  //     setFormData({
  //       ...values,
  //       selectedCourse: courses.find(course => course.label === values.selectedCourse)?.value || ""
  //     })
  //   }
  // }, [values, courses, mode])

  const resetForm = () => setFormData(defaultValues)

  const onAccept = async () => {
    try {
      setLoading(true)
      if (!session) return

      if (mode === "add") {
        const createdTask = await createTask({
          name: formData.taskName,
          date: formData.date as Date,
          state: formData.state,
          description: formData.description,
          courseId: parseInt(formData.selectedCourse),
          userId: parseInt(session.user.id)
        })
        handleTaskAction(createdTask)
      } else if (mode === "update") {
        const updatedTask = await updateTask(formData.id!, {
          name: formData.taskName,
          date: formData.date as Date,
          state: formData.state,
          description: formData.description,
          courseId: parseInt(formData.selectedCourse)
        })
        handleTaskAction(updatedTask)
      }

      onOpenChange()
    } catch (error) {
      console.error(`Error al ${mode === "add" ? "añadir" : "editar"} tarea:`, error)
    } finally {
      setLoading(false)
    }
  }

  const canSubmit = Object.values(formData).every((value) => value !== "")

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="opaque"
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, ease: "easeOut" }
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: { duration: 0.2, ease: "easeIn" }
          }
        }
      }}
    >
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader className="flex flex-col">{mode === "add" ? "Añadir nueva tarea" : "Editar tarea"}</ModalHeader>
            <ModalBody>
              <Input
                isRequired
                size="sm"
                label="Titulo"
                type="text"
                variant="bordered"
                value={formData.taskName}
                onChange={(e) => setFormData((prevState) => ({ ...prevState, taskName: e.target.value }))}
              />
              <div className="flex gap-3">
                <Select
                  isRequired
                  size="sm"
                  label="Curso"
                  variant="bordered"
                  items={courses}
                  defaultSelectedKeys={[courses.find(course => course.label === values.selectedCourse)?.value ?? ""]}
                  onChange={(e) => setFormData((prevState) => ({ ...prevState, selectedCourse: e.target.value }))}
                >
                  {course => <SelectItem key={course.value} value={course.value}>{course.label}</SelectItem>}
                </Select>
                <Select
                  isRequired
                  size="sm"
                  label="Estado"
                  variant="bordered"
                  items={defaultCols.map((col) => ({ label: col.title, value: col.id }))}
                  defaultSelectedKeys={[formData.state]}
                  onChange={(e) => setFormData((prevState) => ({ ...prevState, state: e.target.value }))}
                >
                  {state => <SelectItem key={state.value} value={state.value}>{state.label}</SelectItem>}
                </Select>
              </div>
              <div className="flex gap-3">
                <DatePicker
                  isRequired
                  hideTimeZone
                  showMonthAndYearPickers
                  size="sm"
                  label="Fecha de entrega"
                  variant="bordered"
                  value={parseAbsoluteToLocal(formData.date.toISOString())}
                  onChange={(e) => setFormData((prevState) => ({ ...prevState, date: new Date(e.year, e.month - 1, e.day, e.hour, e.minute, e.second) }))}
                />
              </div>
              <Textarea
                size="sm"
                label="Descripción"
                variant="bordered"
                value={formData.description}
                onChange={(e) => setFormData((prevState) => ({ ...prevState, description: e.target.value }))}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Cancelar
              </Button>
              <Button color="primary" onPress={onAccept} isDisabled={!canSubmit || loading}>
                {loading ? (mode === "add" ? "Añadiendo..." : "Guardando...") : (mode === "add" ? "Añadir" : "Guardar")}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
