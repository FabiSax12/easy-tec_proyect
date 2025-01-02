import { useState, useMemo, useEffect } from "react"
import { toast } from "sonner"
import { useAuthStore } from "@/application/stores"
import { defaultCols } from "@/presentation/task/data/trello-columns"
import {
  DragEndEvent, DragOverEvent, DragStartEvent,
  PointerSensor, useSensor, useSensors
} from "@dnd-kit/core"
import { arrayMove } from "@dnd-kit/sortable"

import type { Course, Task } from "@/presentation/shared/interfaces"

type TaskDBWithCourse = Task & { course: Pick<Course, "name"> }

async function updateTask(taskId: number, data: Partial<TaskDBWithCourse>) {
  const res = await fetch(`/api/tasks/${taskId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  return await res.json() as TaskDBWithCourse
}

async function getTasksByPeriod(userId: number, period: string) {
  const res = await fetch(`/api/tasks?userId=${userId}&period=${period}`)
  return await res.json() as TaskDBWithCourse[]
}

// async function appendCourseName(task: TaskDBWithCourse): Promise<TaskDBWithCourse> {
//   const res = await fetch(`/api/courses/${task.courseId}`)
//   const data = await res.json() as Course

//   return Object.assign(task, { course: { name: data?.name ?? "Sin Curso" } })
// }



export function useTaskDnD(period: string) {
  const { accessToken, user } = useAuthStore()
  const [tasks, setTasks] = useState<TaskDBWithCourse[]>([])
  const [activeTask, setActiveTask] = useState<TaskDBWithCourse | null>(null)
  const columns = useMemo(() => defaultCols, [])
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns])

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10
      }
    })
  )

  useEffect(() => {
    if (!accessToken || !user) return

    getTasksByPeriod(user.id, period).then(data => setTasks(data ?? []))
  }, [accessToken, user, period])

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
      setTasks((tasks) => {
        const updatedTasks = [...tasks]
        const activeIndex = updatedTasks.findIndex((t) => t.id === activeId)
        const overIndex = updatedTasks.findIndex((t) => t.id === overId)

        updatedTasks[activeIndex].state = overTask.state
        return arrayMove(updatedTasks, activeIndex, overIndex)
      })
    }

    const isOverAColumn = over.data.current?.type === "Column"

    // Im dropping a Task over a column
    if (isActiveATask && isOverAColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId)

        tasks[activeIndex].state = overId as string
        return arrayMove(tasks, activeIndex, activeIndex)
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
      toast.promise(updateTask(taskId, { state: taskOver.state }), {
        loading: "Moviendo tarea...",
        success: (data) => `Tarea "${data.name}" movida correctamente`,
        error: "Error al mover la tarea",
        action: {
          label: "Deshacer",
          onClick: async () => await updateTask(taskId, { state: activeTask?.state }),
          type: "undo"
        }
      })
    }

    setActiveTask(null)
  }

  const onTaskUpdate = (task: Task) => {
    console.log("Task updated")
    // appendCourseName(task)
    //   .then(newTask => setTasks((tasks) => tasks.map((t) => (t.id === newTask.id ? newTask : t))))
  }

  const onTaskDelete = (taskId: number) => {
    console.log("Task deleted")
    setTasks((tasks) => tasks.filter((t) => t.id !== taskId))
  }

  const onTaskAdd = async (task: Task) => {
    console.log("Task added")
    // appendCourseName(task)
    //   .then(newTask => setTasks((tasks) => [...tasks, newTask]))
  }

  return {
    tasks, activeTask, columns, columnsId, sensors,
    onDragStart, onDragOver, onDragEnd, onTaskUpdate, onTaskDelete, onTaskAdd
  }
}