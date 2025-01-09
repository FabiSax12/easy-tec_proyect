import { useMemo } from "react"
import { CSS } from "@dnd-kit/utilities"
import { SortableContext, useSortable } from "@dnd-kit/sortable"
import { Column } from "@/modules/task/data/trello-columns"
import { TrelloColumnHeader, TrelloColumnFooter, TaskCard } from "@/modules/task/components"
import { ScrollShadow, Skeleton } from "@nextui-org/react"

import type { TaskWithCourseName } from "@/shared/types/entities/Task"

interface Props {
  column: Column;
  tasks: (TaskWithCourseName)[];
  isLoading: boolean;
  toggleModal: () => void;
}

export function TrelloColumn({ column, tasks, isLoading, toggleModal }: Props) {
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
          {isLoading
            ? <ColumnTasksSkeleton />
            : <SortableContext items={tasksIds}>
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                />
              ))}
            </SortableContext>
          }
        </div>
      </ScrollShadow>
      <TrelloColumnFooter toggleModal={toggleModal} />
    </div>
  )
}

const ColumnTasksSkeleton = () => <>
  <Skeleton className="h-16 min-h-[64px] rounded-xl w-full" />
  <Skeleton className="h-16 min-h-[64px] rounded-xl w-full" />
  <Skeleton className="h-16 min-h-[64px] rounded-xl w-full" />
  <Skeleton className="h-16 min-h-[64px] rounded-xl w-full" />
  <Skeleton className="h-16 min-h-[64px] rounded-xl w-full" />
</>