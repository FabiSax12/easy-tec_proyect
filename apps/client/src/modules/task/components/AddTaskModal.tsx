import { useState } from "react"
import { useParams } from "react-router"
import { useQueryClient } from "@tanstack/react-query"
import { parseAbsoluteToLocal } from "@internationalized/date"
import { Course } from "@/shared/types/entities/Course"
import { CustomModal } from "@/shared/components/nextui/Modal"
import { useAuthStore } from "@/modules/auth/store/auth.store"
import { defaultCols } from "@/modules/task/data/trello-columns"
import { useAddTask } from "../hooks/useAddTask"
import {
  ModalContent, ModalHeader, ModalBody, ModalFooter,
  Input, Button, DatePicker, Textarea, Select, SelectItem,
} from "@easy-tec/ui"

import type { CreateTaskDto } from "@/shared/types/entities/Task"

const defaultValues = {
  name: "",
  description: "",
  date: new Date(),
  state: "",
  courseId: 0
} as CreateTaskDto

interface Props {
  isOpen: boolean
  onOpenChange: () => void
}

export const AddTaskModal = ({ isOpen, onOpenChange }: Props) => {
  const { id: periodCode } = useParams() as { id: string }
  const { user } = useAuthStore()
  const queryClient = useQueryClient()

  const addTaskMutation = useAddTask(periodCode)
  const [formData, setFormData] = useState<CreateTaskDto>(defaultValues)

  const courses = queryClient.getQueryData<Course[]>(
    ["courses", user?.id]
  )?.filter(
    (course) => course.periodCode === periodCode
  )

  const handleSubmit = async () => {
    onOpenChange()
    handleCreateTask(formData)
  }

  function handleChange<T>(key: keyof CreateTaskDto, value: T) {
    setFormData((prevState) => ({ ...prevState, [key]: value }))
  }

  const handleCreateTask = async (task: CreateTaskDto) => {
    const newTaskData = {
      ...task,
      userId: user?.id,
      courseId: task.courseId
    } as CreateTaskDto

    addTaskMutation.mutate(newTaskData)
  }

  const canSubmit = formData.name && formData.courseId && formData.state && formData.date

  return (
    <CustomModal
      isDismissable={false}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {onClose => <>
          <ModalHeader className="flex flex-col">Añadir nueva tarea</ModalHeader>
          <ModalBody>
            <Input
              isRequired
              size="sm"
              label="Titulo"
              type="text"
              variant="bordered"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
            <div className="flex gap-3">
              <Select
                isRequired
                size="sm"
                label="Curso"
                variant="bordered"
                items={courses?.map((course) => ({ label: course.name, value: course.id })) || []}
                defaultSelectedKeys={[formData.courseId]}
                onChange={(e) => handleChange("courseId", Number(e.target.value))}
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
                onChange={(e) => handleChange("state", e.target.value)}
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
                onChange={(e) => handleChange("date", e ? new Date(e.year, e.month - 1, e.day, e.hour, e.minute, e.second) : formData.date)}
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
            <Button color="primary" onPress={handleSubmit} isDisabled={!canSubmit}>
              Añadir
            </Button>
          </ModalFooter>
        </>}
      </ModalContent >
    </CustomModal >
  )
}