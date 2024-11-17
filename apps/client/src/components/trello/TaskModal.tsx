import { useState, useEffect } from "react"
import { parseAbsoluteToLocal } from "@internationalized/date"
import { useAuth } from "@/hooks"
import { ApiResponse, Course, Task } from "@/types"
import { defaultCols } from "@/data/trello-columns"
import {
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,
  Input, Button, DatePicker, Textarea, Select, SelectItem
} from "@nextui-org/react"
import { useLocation } from "react-router-dom"

async function createTask(task: Omit<Task, "id" | "createdAt" | "updatedAt">) {
  const res = await fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(task)
  })
  return await res.json()
}

async function updateTask(taskId: number, data: Partial<Task>) {
  const res = await fetch(`/api/tasks/${taskId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  return await res.json()
}

async function getUserCourses(userId: number, periodId: string) {
  const res = await fetch(`/api/courses?user=${userId}&period=${periodId}`)
  const { data, error } = await res.json() as ApiResponse<Course[]>

  if (error) throw new Error(error)

  return data
}

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
  const periodId = useLocation().pathname.split("/")[3]

  const { accessToken, user } = useAuth()
  const [loading, setLoading] = useState(false)

  const [courses, setCourses] = useState<Option[]>([])
  const [formData, setFormData] = useState({
    ...values,
    selectedCourse: values.selectedCourse || ""
  })

  useEffect(() => {
    if (!accessToken || !user) return

    if (!isOpen) {
      resetForm()
      return
    }

    getUserCourses(user.id, periodId)
      // .then(newCourses => newCourses?.filter(course => course.period === periodId))
      .then(newCourses => newCourses?.map(course => ({ label: course.name, value: course.id.toString() })))
      .then(courses => {
        setFormData({
          ...values,
          selectedCourse: courses?.find(course => course.label === values.selectedCourse)?.value || ""
        })
        setCourses(courses ?? [])
      })
      .catch(error => console.error("Error al obtener cursos del usuario: ", error))

  }, [isOpen, accessToken, periodId, values, user])

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
      if (!accessToken || !user) return

      if (mode === "add") {
        const createdTask = await createTask({
          name: formData.taskName,
          date: formData.date,
          state: formData.state,
          description: formData.description,
          courseId: parseInt(formData.selectedCourse),
          userId: user.id
        })
        handleTaskAction(createdTask)
      } else if (mode === "update") {
        const updatedTask = await updateTask(formData.id!, {
          name: formData.taskName,
          date: formData.date,
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
                  defaultSelectedKeys={[formData.selectedCourse]}
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
                  onChange={(e) => setFormData((prevState) => ({
                    ...prevState,
                    date: new Date(e.year, e.month - 1, e.day, e.hour, e.minute, e.second)
                  }))}
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