import { useState } from "react"
import { createPortal } from "react-dom"
import { SortableContext } from "@dnd-kit/sortable"
import { DndContext, DragOverlay } from "@dnd-kit/core"
import { useTaskDnD } from "@/modules/task/hooks/useTaskDnD"
import { TrelloColumn, TaskCard, AddTaskModal } from "@/modules/task/components"
import { ScrollShadow } from "@heroui/react"

interface Props {
  period: string
}

export const Trello = ({ period }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {
    columns, columnsId, activeTask, tasks, loadingTasks, sensors,
    onDragEnd, onDragOver, onDragStart
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
                    isLoading={loadingTasks}
                    column={col}
                    tasks={tasks.filter((task) => task.state === col.id)}
                    toggleModal={() => setIsModalOpen(prev => !prev)}
                  />
                ))}
              </SortableContext>
            </div>
          </div>
        </ScrollShadow>

        {/* object document sometimes are undefined */}
        {typeof document !== "undefined" && createPortal(
          <DragOverlay>
            {activeTask && <TaskCard task={activeTask} />}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
      <AddTaskModal
        isOpen={isModalOpen}
        onOpenChange={() => setIsModalOpen(prev => !prev)}
      />
    </div>
  )
}