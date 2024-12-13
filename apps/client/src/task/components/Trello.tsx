import { useState } from "react"
import { createPortal } from "react-dom"
import { useTaskDnD } from "@/task/hooks/useTaskDnD"
import { SortableContext } from "@dnd-kit/sortable"
import { DndContext, DragOverlay } from "@dnd-kit/core"
import { TrelloColumn, TaskCard, TaskModal } from "@/task/components"
import { ScrollShadow } from "@nextui-org/react"

interface Props {
  period: string
}

export const Trello = ({ period }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {
    columns, columnsId, activeTask, tasks, sensors,
    onDragEnd, onDragOver, onDragStart, onTaskAdd, onTaskDelete, onTaskUpdate
  } = useTaskDnD(period)

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