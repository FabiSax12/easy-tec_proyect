"use client"
import { useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"
import { useSession } from "next-auth/react"
import { Task } from "@prisma/client"
import { toast } from "sonner"
import { arrayMove, SortableContext } from "@dnd-kit/sortable"
import {
  DndContext, DragEndEvent, DragOverEvent, DragStartEvent,
  DragOverlay, useSensor, useSensors, PointerSensor
} from "@dnd-kit/core"
import { appendCourseName, getTasksByPeriod, updateTask } from "@/actions"
import { defaultCols } from "./data"
import { ScrollShadow } from "@nextui-org/react"
import { TrelloColumn, TaskCard, TaskModal } from "@/components/trello"

type TaskDBWithCourse = Task & { course: { name: string } }

interface Props {
  period: string
}

export const Trello = ({ period }: Props) => {
  const { data, status } = useSession()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tasks, setTasks] = useState<TaskDBWithCourse[]>([])
  const [activeTask, setActiveTask] = useState<TaskDBWithCourse | null>(null)
  const columns = useMemo(() => defaultCols, [])
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns])

  useEffect(() => {
    if (status !== "authenticated") return
    getTasksByPeriod(parseInt(data.user.id), period).then(setTasks)
  }, [data?.user, period, status])

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10
      }
    })
  )

  const onTaskUpdate = (task: Task) => {
    console.log("Task updated")
    appendCourseName(task)
      .then(newTask => setTasks((tasks) => tasks.map((t) => (t.id === newTask.id ? newTask : t))))
  }

  const onTaskDelete = (taskId: number) => {
    console.log("Task deleted")
    setTasks((tasks) => tasks.filter((t) => t.id !== taskId))
  }

  const onTaskAdd = async (task: Task) => {
    console.log("Task added")
    appendCourseName(task)
      .then(newTask => setTasks((tasks) => [...tasks, newTask]))
  }

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

  return (
    <div>
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >
        <ScrollShadow size={60} orientation="horizontal">
          <div className="pb-4 flex gap-4 min-w-min justify-center">
            <div className="flex gap-5 justify-evenly">
              <SortableContext items={columnsId}>
                {columns.map(col => (
                  <TrelloColumn
                    key={col.id}
                    column={col}
                    tasks={tasks.filter((task) => task.state === col.id)}
                    toggleModal={() => setIsModalOpen(prev => !prev)}
                    handleTaskUpdate={onTaskUpdate}
                    handleTaskDelete={onTaskDelete}
                    handleTaskAdd={onTaskAdd}
                  />
                ))}
              </SortableContext>
            </div>
          </div>
        </ScrollShadow>

        {/* object document sometimes are undefined */}
        {typeof document !== "undefined" && createPortal(
          <DragOverlay>
            {activeTask && (
              <TaskCard
                task={activeTask}
                handleTaskUpdate={() => { }}
                handleTaskDelete={() => { }}
                handleTaskAdd={() => { }}
              />
            )}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
      <TaskModal
        mode="add"
        isOpen={isModalOpen}
        onOpenChange={() => setIsModalOpen(prev => !prev)}
        handleTaskAction={onTaskAdd}
      />
    </div>
  )
}