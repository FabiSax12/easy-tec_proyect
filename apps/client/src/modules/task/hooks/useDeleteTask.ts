import { useQueryClient } from "@tanstack/react-query"

import { useOptimisticMutation } from "@/shared/hooks/useOptimisticMutation"
import { deleteTask } from "../services/tasks.service"
import { TaskWithCourseName } from "@/shared/types/entities/Task"

export const useDeleteTask = () => {
  const queryClient = useQueryClient()

  const mutation = useOptimisticMutation<TaskWithCourseName, Error, number>({
    mutationKey: ["tasks"],
    mutationFn: deleteTask,
    onMutateOptimistic: (taskId, previousTasks) => {
      return previousTasks.filter((task) => task.id !== taskId)
    },
    rollbackOptimistic: (previousTasks: TaskWithCourseName[]) => {
      queryClient.setQueryData(["tasks"], previousTasks)
    },
    onSuccessMessage: () => "Tarea eliminada correctamente",
    onErrorMessage: () => "Error al eliminar la tarea",
    onRetry: (taskId: number) => mutation.mutate(taskId)
  })

  return mutation
}
