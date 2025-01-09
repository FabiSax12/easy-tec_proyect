import { useQueryClient } from "@tanstack/react-query"

import { useOptimisticMutation } from "@/shared/hooks/useOptimisticMutation"
import { createTask } from "../services/tasks.service"

import type { TaskWithCourseName, CreateTaskDto } from "@/shared/types/entities/Task"

export const useAddTask = () => {
  const queryClient = useQueryClient()

  return useOptimisticMutation<TaskWithCourseName, Error, CreateTaskDto>({
    mutationKey: ["tasks"],
    mutationFn: createTask,
    onMutateOptimistic: (newTask, previousTasks) => [
      ...previousTasks,
      {
        ...newTask,
        id: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        course: { name: "Sin Curso" }
      } as TaskWithCourseName,
    ],
    rollbackOptimistic: (previousTasks) => {
      queryClient.setQueryData(["tasks"], previousTasks)
    },
    onSuccessMessage: (data) => `Tarea "${data.name}" añadida correctamente`,
    onErrorMessage: () => "Error al añadir la tarea",
  })
}