import { useQueryClient } from "@tanstack/react-query"

import { useAuthStore } from "@/modules/auth/store/auth.store"
import { useOptimisticMutation } from "@/shared/hooks/useOptimisticMutation"
import { createTask } from "../services/tasks.service"

import type { TaskWithCourseName, CreateTaskDto } from "@/shared/types/entities/Task"
import { Course } from "@/shared/types/entities/Course"

export const useAddTask = (periodCode: string) => {
  const userId = useAuthStore(state => state.user?.id)
  const queryClient = useQueryClient()

  return useOptimisticMutation<TaskWithCourseName, Error, CreateTaskDto>({
    mutationKey: ["tasks", userId, periodCode],
    mutationFn: createTask,
    onMutateOptimistic: (newTask, previousTasks) => [
      ...previousTasks,
      {
        ...newTask,
        id: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        course: {
          name: queryClient.getQueryData<Course[]>(["courses", userId])?.find(course => course.id === newTask.courseId)?.name || ""
        }
      } as TaskWithCourseName,
    ],
    rollbackOptimistic: (previousTasks) => {
      queryClient.setQueryData(["tasks", userId, periodCode], previousTasks)
    },
    onSuccessMessage: (data) => `Tarea "${data.name}" añadida correctamente`,
    onErrorMessage: () => "Error al añadir la tarea",
    replaceOldData: (createdTask) => {
      const oldTasks = queryClient.getQueryData<TaskWithCourseName[]>(["tasks", userId, periodCode])
      const newTasks = oldTasks?.filter((task) => task.id !== -1) || []
      queryClient.setQueryData(["tasks", userId, periodCode], [...newTasks!, createdTask])
    }
  })
}