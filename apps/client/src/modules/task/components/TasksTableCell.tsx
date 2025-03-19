import { Key, useMemo } from "react"
import { TaskState, TaskWithCourseName, TaskStateSpanish, TimeRemaining } from "@/shared/types/entities/Task"
import { ChipProps, Chip, Tooltip } from "@nextui-org/react"
import { LuPencil, LuTrash2 } from "react-icons/lu"

const STATE_COLOR_MAP: Record<TaskState, ChipProps["color"]> = {
  todo: "danger",
  doing: "warning",
  done: "primary",
  delivered: "success"
}

interface Props {
  task: TaskWithCourseName
  columnKey: Key
  onEditTask: (timeRemaining: TimeRemaining) => void
}

export const TasksTableCell = ({ task, columnKey, onEditTask }: Props) => {

  const timeRemaining = useMemo(() => {
    const taskDate = new Date(task.date).getTime()
    const currentDate = Date.now()
    const timeRemaining = taskDate - currentDate

    const daysLeft = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
    const hoursLeft = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutesLeft = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))

    return { daysLeft, hoursLeft, minutesLeft }
  }, [task])

  switch (columnKey) {
    case "title":
      return task.name
    case "description":
      return task.description
    case "course":
      return task.course.name
    case "state":
      return <Chip
        variant="flat"
        color={STATE_COLOR_MAP[task.state]}
      >
        {TaskStateSpanish[task.state]}
      </Chip>
    case "date":
      return new Date(task.date).toLocaleDateString("es-ES", { day: "numeric", month: "short" })
    case "timeRemaining":
      return `${timeRemaining.daysLeft} días ${timeRemaining.hoursLeft} horas`
    case "actions":
      return <div className="flex gap-8 justify-center">
        <Tooltip content="Editar" placement="top">
          <button className="text-success" onClick={() => onEditTask(timeRemaining)}>
            <LuPencil size={20} />
          </button>
        </Tooltip>
        <Tooltip content="Eliminar" placement="top">
          <button className="text-danger">
            <LuTrash2 size={20} />
          </button>
        </Tooltip>
      </div>
    default:
      return null
  }
}