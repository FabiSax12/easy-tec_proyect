import { useQueryClient } from "@tanstack/react-query"
import { useOptimisticMutation } from "@/shared/hooks/useOptimisticMutation"
import { updateTask } from "../services/tasks.service"

import type { TaskWithCourseName, UpdateTaskDto } from "@/shared/types/entities/Task"

export function useUpdateTask() {
  const queryClient = useQueryClient()

  return useOptimisticMutation<TaskWithCourseName, Error, { id: number; updates: UpdateTaskDto }>({
    mutationKey: ["tasks"],
    mutationFn: ({ id, updates }) => updateTask(id, updates),
    onMutateOptimistic: ({ id, updates }, previousTasks) => {
      return previousTasks.map((task) =>
        task.id === id ? { ...task, ...updates } : task
      )
    },
    rollbackOptimistic: (previousTasks) => {
      queryClient.setQueryData(["tasks"], previousTasks)
    },
    onSuccessMessage: (data) => `Tarea "${data.name}" actualizada correctamente`,
    onErrorMessage: () => "Error al actualizar la tarea",
  })
}