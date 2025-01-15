import { useState, useMemo } from "react"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import {
  DragEndEvent, DragOverEvent, DragStartEvent,
  PointerSensor, useSensor, useSensors
} from "@dnd-kit/core"
import { arrayMove } from "@dnd-kit/sortable"
import { useAuthStore } from "@/modules/auth/store/auth.store"
import { defaultCols } from "@/modules/task/data/trello-columns"
import { getTasksByPeriodId } from "../services/tasks.service"
import { useUpdateTask } from "./useUpdateTask"

import type { TaskWithCourseName } from "@/shared/types/entities/Task"

export function useTaskDnD(period: string) {
  const { accessToken, user } = useAuthStore()

  const [activeTask, setActiveTask] = useState<TaskWithCourseName | null>(null)
  const columns = useMemo(() => defaultCols, [])
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns])

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10
      }
    })
  )

  const queryClient = useQueryClient()

  const { data: tasks = [], isLoading: loadingTasks, } = useQuery<TaskWithCourseName[]>({
    queryKey: ["tasks", user?.id, period],
    queryFn: () => getTasksByPeriodId(user!.id, period),
    enabled: !!user?.id && !!period && !!accessToken,
    staleTime: Infinity
  })

  const updateTaskMutation = useUpdateTask(period)

  const onDragStart = (event: DragStartEvent) => {
    if (event.active.data.current?.type === "Task") {
      setActiveTask({ ...event.active.data.current.task })
    }
  }

  function onDragOver(event: DragOverEvent) {
    const { active, over } = event
    if (!over) return

    const activeId = active.id
    const overId = over.id

    const isActiveATask = active.data.current?.type === "Task"
    if (!isActiveATask) return

    const activeTask = tasks.find((t) => t.id === activeId)
    const overTask = tasks.find((t) => t.id === overId)

    if (activeTask && overTask && activeTask.state !== overTask.state) {
      queryClient.setQueryData(["tasks", user?.id, period], (tasks: TaskWithCourseName[]) => {
        const activeIndex = tasks.findIndex((t: TaskWithCourseName) => t.id === activeId)
        const overIndex = tasks.findIndex((t: TaskWithCourseName) => t.id === overId)

        return arrayMove(tasks.map((t: TaskWithCourseName, index: number) => {
          if (index === activeIndex) {
            return { ...t, state: overTask.state }
          }
          return t
        }), activeIndex, overIndex)
      })

    }

    const isOverAColumn = over.data.current?.type === "Column"

    // Im dropping a Task over a column
    if (isActiveATask && isOverAColumn) {
      queryClient.setQueryData(["tasks", user?.id, period], (tasks: TaskWithCourseName[]) => {
        const activeIndex = tasks.findIndex((t: TaskWithCourseName) => t.id === activeId)
        return tasks.map((t: TaskWithCourseName, index: number) => {
          if (index === activeIndex) {
            return { ...t, state: overId as string }
          }
          return t
        })
      })
    }
  }

  async function onDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (!over) return

    const activeId = active.id
    const overId = over.id

    const taskOver = tasks.find((t) => t.id === overId)
    const taskActive = tasks.find((t) => t.id === activeId)

    if (!taskOver || !taskActive) return

    if (taskActive.state != taskOver.state || active.data.current?.task.state !== activeTask?.state) {
      const taskId = parseInt(activeId as string)
      updateTaskMutation.mutate({ id: taskId, updates: { state: taskOver.state } })
    }

    setActiveTask(null)
  }

  return {
    tasks,
    activeTask,
    columns,
    columnsId,
    sensors,
    loadingTasks,
    onDragStart,
    onDragOver,
    onDragEnd
  }
}