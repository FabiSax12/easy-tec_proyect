import { useState, useMemo } from "react"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Chip } from "@easy-tec/ui"
import { EditTaskDrawer } from "./EditTaskDrawer"
import { FaClock } from "react-icons/fa6"

import type { TaskWithCourseName } from "@/shared/types/entities/Task"

interface Props {
  task: TaskWithCourseName;
}

export function TaskCard({ task }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: task.id,
    data: { type: "Task", task },
    disabled: isModalOpen
  })

  const style = useMemo(() => ({
    transition,
    transform: CSS.Transform.toString(transform),
  }), [transform, transition])

  const timeRemaining = useMemo(() => {
    const taskDate = new Date(task.date).getTime()
    const currentDate = Date.now()
    const timeRemaining = taskDate - currentDate

    const daysLeft = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
    const hoursLeft = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutesLeft = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))

    return { daysLeft, hoursLeft, minutesLeft }
  }, [task.date])

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        bg-white p-2 h-16 min-h-[64px] flex text-left rounded-xl cursor-grab relative
        group ring-default ring-1 active:cursor-grabbing select-none hover:cursor-pointer
        ${isDragging ? "opacity-30 ring-default cursor-grabbing" : "opacity-100"}
        ${timeRemaining.daysLeft > 3 ? "hover:ring-primary" : timeRemaining.daysLeft > 0 ? "hover:ring-warning" : "hover:ring-danger"}
      `}
      onClick={() => setIsModalOpen(true)}
    >
      <span>
        <p className="text-xs font-bold w-full whitespace-pre-wrap">{task.name}</p>
        <p className="text-xs text-default-600 w-full whitespace-pre-wrap">{task.course.name}</p>
        <p className="text-xs text-default-600 w-full whitespace-pre-wrap">
          {new Date(task.date).toLocaleDateString("es-ES", { day: "numeric", month: "short" })}
        </p>
      </span>

      <Chip
        variant="solid"
        color={timeRemaining.daysLeft > 3 ? "primary" : timeRemaining.daysLeft > 0 ? "warning" : "danger"}
        size="sm"
        startContent={<FaClock />}
        className="absolute -top-2 -right-2"
      >
        {timeRemaining.daysLeft > 0
          ? `${timeRemaining.daysLeft}d`
          : timeRemaining.hoursLeft > 0
            ? `${timeRemaining.hoursLeft}h`
            : timeRemaining.minutesLeft > 0
              ? `${timeRemaining.minutesLeft}m`
              : "---"
        }
      </Chip>

      {<EditTaskDrawer
        isOpen={isModalOpen}
        task={task}
        timeRemaining={timeRemaining}
        onClose={() => setIsModalOpen(false)}
        onOpenChange={() => setIsModalOpen(prev => !prev)}
      />}
    </div>
  )
}