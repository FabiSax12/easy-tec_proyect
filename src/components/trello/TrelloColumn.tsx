"use client"
import { useMemo } from "react"
import { Task } from "@prisma/client"
import { SortableContext, useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Column } from "@/interfaces/components/trello"
import { TrelloColumnHeader, TrelloColumnFooter, TaskCard } from "@/components/trello"
import { ScrollShadow } from "@nextui-org/react"

interface Props {
  column: Column;
  tasks: (Task & { course: { name: string } })[];
  toggleModal: () => void;
  handleTaskAdd: (task: Task) => void;
  handleTaskDelete: (taskId: number) => void;
  handleTaskUpdate: (task: Task) => void;
}

export function TrelloColumn({ column, tasks, toggleModal, handleTaskUpdate, handleTaskAdd, handleTaskDelete }: Props) {
  const tasksIds = useMemo(() => tasks.map((task) => task.id), [tasks])
  const { setNodeRef, attributes, transition, transform } = useSortable({
    id: column.id,
    data: { type: "Column", column }
  })

  return (
    <div
      {...attributes}
      ref={setNodeRef}
      style={{ transition, transform: CSS.Translate.toString(transform) }}
      className="w-52 h-[500px] max-h-[500px] rounded-md flex flex-col"
    >
      <TrelloColumnHeader title={column.title} />
      <ScrollShadow hideScrollBar size={50} className="flex flex-grow flex-col gap-4 px-1 py-2">
        <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
          <SortableContext items={tasksIds}>
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                handleTaskUpdate={handleTaskUpdate}
                handleTaskDelete={handleTaskDelete}
                handleTaskAdd={handleTaskAdd}
              />
            ))}
          </SortableContext>
        </div>
      </ScrollShadow>
      <TrelloColumnFooter toggleModal={toggleModal} />
    </div>
  )
}
