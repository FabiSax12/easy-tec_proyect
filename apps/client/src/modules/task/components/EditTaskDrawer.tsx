import { useState } from "react"
import { useParams } from "react-router-dom"
import { toast } from "sonner"
import { useQuery } from "@tanstack/react-query"
import {
  Button,
  DatePicker,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Input,
  Textarea,
} from "@nextui-org/react"
import { Select } from "@/shared/components"
import { getUserCoursesByPeriodId } from "@/modules/course/services/courses.service"
import { useAuthStore } from "@/modules/auth/store/auth.store"
import { defaultCols } from "../data/trello-columns"
import { useUpdateTask } from "../hooks/useUpdateTask"
import { useDeleteTask } from "../hooks/useDeleteTask"
import { IoPencil, IoTrash } from "react-icons/io5"
import { TiCancel } from "react-icons/ti"
import { BiSave } from "react-icons/bi"

import type { TaskWithCourseName, UpdateTaskDto } from "@/shared/types/entities/Task"
import { parseAbsoluteToLocal } from "@internationalized/date"

interface Props {
  isOpen: boolean
  task: TaskWithCourseName
  timeLeft: { daysLeft: number, hoursLeft: number, minutesLeft: number }
  onClose: () => void
  onOpenChange: () => void
}

export const EditTaskDrawer = ({ isOpen, onClose, task, timeLeft }: Props) => {

  const user = useAuthStore(state => state.user)
  const { id } = useParams()

  const updateTaskMutation = useUpdateTask()
  const deleteTaskMutation = useDeleteTask()

  const [isEditing, setIsEditing] = useState(false)
  const [updatedTask, setUpdatedTask] = useState<UpdateTaskDto>(task)

  const courses = useQuery({
    queryKey: ["courses", user!.id, id],
    queryFn: () => getUserCoursesByPeriodId(user!.id, id!),
    enabled: !!user && !!id,
  })

  const toggleEditMode = () => setIsEditing(prev => !prev)

  const handleChange = (field: keyof UpdateTaskDto, value: string | number | Date) => {
    setUpdatedTask((prev) => ({ ...prev, [field]: value, }))
  }

  const handleSaveTask = () => {
    updateTaskMutation.mutate({
      id: task.id,
      updates: {
        name: updatedTask.name,
        description: updatedTask.description,
        courseId: updatedTask.courseId,
        state: updatedTask.state,
        date: updatedTask.date
      }
    })
    setIsEditing(false)
  }

  const handleDeleteTask = () => {
    toast.warning(`¿Estás seguro de eliminar la tarea "${task.name}"?`, {
      duration: 5000,
      action: {
        label: "Eliminar",
        onClick: () => deleteTaskMutation.mutate(task.id)
      }
    })
  }

  return (
    <Drawer isOpen={isOpen} onOpenChange={onClose} backdrop="opaque" size="sm">
      <DrawerContent>
        <DrawerHeader>
          {isEditing ? "Editando tarea" : `Detalles de la tarea: ${task.name}`}
        </DrawerHeader>
        <DrawerBody className="gap-10 justify-start">
          {isEditing ? (
            <>
              <Input
                fullWidth
                label="Nombre"
                labelPlacement="outside"
                variant="bordered"
                type="text"
                value={updatedTask.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
              <Textarea
                minRows={1}
                label="Descripción"
                labelPlacement="outside"
                variant="bordered"
                defaultValue={task.description}
                value={updatedTask.description || ""}
                onChange={(e) => handleChange("description", e.target.value)}
              />
              <Select
                label="Curso"
                labelPlacement="outside"
                variant="bordered"
                defaultSelectedKeys={[task.courseId.toString()]}
                value={courses.data?.find(c => c.id == updatedTask.courseId)?.name || ""}
                options={courses.data?.map((course) => ({ label: course.name, value: course.id.toString() })) ?? []}
                onChange={(e) => handleChange("courseId", e.target.value)}
              />
              <Select
                label="Estado"
                labelPlacement="outside"
                variant="bordered"
                defaultSelectedKeys={[task.state]}
                value={updatedTask.state || "todo"}
                options={defaultCols.map((col) => ({ label: col.title, value: col.id }))}
                onChange={(e) => handleChange("state", e.target.value)}
              />
              <DatePicker
                isRequired
                hideTimeZone
                showMonthAndYearPickers
                size="sm"
                label="Fecha de entrega"
                variant="bordered"
                defaultValue={parseAbsoluteToLocal(task.date.toISOString())}
                value={updatedTask.date && parseAbsoluteToLocal(updatedTask.date.toISOString())}
                onChange={(e) => handleChange("date", e ? new Date(e.year, e.month - 1, e.day, e.hour, e.minute, e.second) : task.date)}
              />
            </>
          ) : (
            <>
              <p>
                <strong>Nombre: </strong> {task.name}
              </p>
              <p>
                <strong>Descripción: </strong> {task.description || "Sin descripción"}
              </p>
              <p>
                <strong>Estado: </strong> {task.state}
              </p>
              <p>
                <strong>Entrega: </strong>
                {new Date(task.date).toLocaleDateString("es-Es", { day: "numeric", month: "short", year: "numeric" })} {new Date(task.date).toLocaleTimeString("es-Es", { hour: "2-digit", minute: "2-digit", })}
              </p>
              <p>
                <strong>Tiempo restante: </strong>
                {timeLeft.minutesLeft < 0
                  ? "La tarea ya ha vencido"
                  : `${timeLeft.daysLeft} días, ${timeLeft.hoursLeft} horas, ${timeLeft.minutesLeft} minutos`}

              </p>
            </>
          )}
        </DrawerBody>
        <DrawerFooter className="justify-start">
          {isEditing ? (
            <>
              <Button color="danger" onPress={toggleEditMode} startContent={<TiCancel size={20} />}>
                Cancelar
              </Button>
              <Button color="primary" onPress={handleSaveTask} startContent={<BiSave size={20} />}>
                Guardar
              </Button>
            </>
          ) : <>
            <Button
              isIconOnly
              endContent={<IoTrash />}
              color="danger"
              onPress={handleDeleteTask}
            />
            <Button
              isIconOnly
              startContent={<IoPencil />}
              color="primary"
              onPress={toggleEditMode}
            />
          </>}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
