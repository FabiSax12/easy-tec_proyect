import { useQueryClient } from "@tanstack/react-query"
import { useAuthStore } from "@/modules/auth/store/auth.store"
import { useOptimisticMutation } from "@/shared/hooks/useOptimisticMutation"
import { updateTask } from "../services/tasks.service"

import type { TaskWithCourseName, UpdateTaskDto } from "@/shared/types/entities/Task"

export function useUpdateTask(periodCode: string) {
  const userId = useAuthStore(state => state.user?.id)
  const queryClient = useQueryClient()

  return useOptimisticMutation<TaskWithCourseName, Error, { id: number; updates: UpdateTaskDto }>({
    mutationKey: ["tasks", userId, periodCode],
    mutationFn: ({ id, updates }) => updateTask(id, updates),
    onMutateOptimistic: ({ id, updates }, previousTasks) => {
      return previousTasks.map((task) =>
        task.id === id ? { ...task, ...updates } : task
      )
    },
    rollbackOptimistic: (previousTasks) => {
      queryClient.setQueryData(["tasks", userId, periodCode], previousTasks)
    },
    onSuccessMessage: (data) => `Tarea "${data.name}" actualizada correctamente`,
    onErrorMessage: () => "Error al actualizar la tarea",
    // replaceOldData: (newData) => {
    //   const oldTasks = queryClient.getQueryData<TaskWithCourseName[]>(["tasks", userId, periodCode])

    //   const newTasks = oldTasks?.filter((task) => task.id !== newData.id) || []

    //   queryClient.setQueryData(["tasks", userId, periodCode], [...newTasks, newData])
    // }
  })
}