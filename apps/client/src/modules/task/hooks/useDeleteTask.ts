import { useQueryClient } from "@tanstack/react-query"

import { useOptimisticMutation } from "@/shared/hooks/useOptimisticMutation"
import { deleteTask } from "../services/tasks.service"
import { TaskWithCourseName } from "@/shared/types/entities/Task"
import { useAuthStore } from "@/modules/auth/store/auth.store"

export const useDeleteTask = (periodCode: string) => {
  const userId = useAuthStore(state => state.user?.id)
  const queryClient = useQueryClient()

  const mutation = useOptimisticMutation<TaskWithCourseName, Error, number>({
    mutationKey: ["tasks", userId, periodCode],
    mutationFn: deleteTask,
    onMutateOptimistic: (taskId, previousTasks) => {
      return previousTasks.filter((task) => task.id !== taskId)
    },
    rollbackOptimistic: (previousTasks: TaskWithCourseName[]) => {
      queryClient.setQueryData(["tasks", userId, periodCode], previousTasks)
    },
    onSuccessMessage: () => "Tarea eliminada correctamente",
    onErrorMessage: () => "Error al eliminar la tarea",
    onRetry: (taskId: number) => mutation.mutate(taskId)
  })

  return mutation
}
