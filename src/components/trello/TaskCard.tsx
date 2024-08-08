"use client"
import { useState, useMemo } from "react"
import { Task } from "@prisma/client"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { toast } from "sonner"
import { createTask, deleteTask } from "@/actions"
import { Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Tooltip } from "@nextui-org/react"
import { TaskModal, TaskCardInfo } from "@/components/trello"
import { IoEllipsisVerticalSharp, IoOpen, IoPencil, IoTrash } from "react-icons/io5"
import { FaCheck, FaClock } from "react-icons/fa6"

interface Props {
  task: Task & { course: { name: string } };
  handleTaskUpdate: (task: Task) => void;
  handleTaskDelete: (taskId: number) => void;
  handleTaskAdd: (task: Task) => void;
}

export function TaskCard({ task, handleTaskUpdate, handleTaskDelete, handleTaskAdd }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCardOpen, setIsCardOpen] = useState(false)
  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: task.id,
    data: { type: "Task", task },
    disabled: isCardOpen || isModalOpen
  })

  const style = useMemo(() => ({
    transition,
    transform: CSS.Transform.toString(transform),
  }), [transform, transition])

  const timeLeft = useMemo(() => {
    const taskDate = new Date(task.date).getTime()
    const currentDate = Date.now()
    const timeLeft = taskDate - currentDate

    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))

    return { daysLeft, hoursLeft, minutesLeft }
  }, [task.date])

  const onDeleteTask = async () => {
    toast.promise(() => deleteTask(task.id), {
      loading: "Eliminando tarea...",
      success: (data) => {
        handleTaskDelete(data.id)
        return `Tarea "${data.name}" eliminada exitosamente`
      },
      error: (error) => `Error al eliminar la tarea: ${error}`,
      action: {
        label: "Deshacer",
        onClick: () => toast.promise(() => {
          const { id, course, ...taskCreationFields } = task
          return createTask(taskCreationFields)
        }, {
          loading: "Restaurando tarea...",
          success: (data) => {
            handleTaskAdd(data)
            return `Tarea "${data.name}" restaurada`
          },
          error: (error) => `Error al restaurar la tarea: ${error}`
        })
      }
    })
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        bg-white p-2 h-16 min-h-[64px] flex text-left rounded-xl cursor-grab relative group ring-default ring-1 active:cursor-grabbing
        ${isDragging ? "opacity-30 ring-default cursor-grabbing" : "opacity-100"}
        ${timeLeft.daysLeft > 3 ? "hover:ring-primary" : timeLeft.daysLeft > 0 ? "hover:ring-warning" : "hover:ring-danger"}
        ${task.state === "delivered" && "hover:ring-success"}
      `}
    >
      <span>
        <p className="text-xs font-bold w-full whitespace-pre-wrap">{task.name}</p>
        <p className="text-xs text-default-600 w-full whitespace-pre-wrap">{task.course.name}</p>
        <p className="text-xs text-default-600 w-full whitespace-pre-wrap">
          {new Date(task.date).toLocaleDateString("es-ES", { day: "numeric", month: "short" })}
        </p>
      </span>

      <Dropdown size="sm" placement="left-start" offset={-35}
        classNames={{
          trigger: "p-1 rounded-full bg-default-100 text-default-500",
          content: "flex max-w-min min-w-min p-0"
        }}
      >
        <DropdownTrigger className="absolute bottom-2 right-2">
          <button><IoEllipsisVerticalSharp size={15} className="cursor-pointer text-default-500" /></button>
        </DropdownTrigger>
        <DropdownMenu classNames={{ list: "flex-row text-xs" }}>
          <DropdownItem onPress={() => setIsCardOpen(true)}><Tooltip content="Abrir"><span><IoOpen /></span></Tooltip></DropdownItem>
          <DropdownItem onPress={() => setIsModalOpen(true)}><Tooltip content="Editar"><span><IoPencil /></span></Tooltip></DropdownItem>
          <DropdownItem onPress={onDeleteTask}><Tooltip content="Eliminar"><span><IoTrash /></span></Tooltip></DropdownItem>
        </DropdownMenu>
      </Dropdown>

      {task.state !== "delivered"
        ? <Chip
          variant="solid"
          color={timeLeft.daysLeft > 3 ? "primary" : timeLeft.daysLeft > 0 ? "warning" : "danger"}
          size="sm"
          startContent={<FaClock />}
          className="absolute -top-2 -right-2"
        >
          {timeLeft.daysLeft > 0
            ? `${timeLeft.daysLeft}d`
            : timeLeft.hoursLeft > 0
              ? `${timeLeft.hoursLeft}h`
              : timeLeft.minutesLeft > 0
                ? `${timeLeft.minutesLeft}m`
                : "---"
          }
        </Chip>
        : <Chip
          variant="solid"
          color="success"
          size="sm"
          className="absolute -top-2 -right-2"
        >
          <FaCheck />
        </Chip>
      }

      {isCardOpen && <TaskCardInfo task={task} isCardOpen={isCardOpen} setIsCardOpen={setIsCardOpen} />}
      {isModalOpen && <TaskModal
        mode="update"
        handleTaskAction={handleTaskUpdate}
        isOpen={isModalOpen}
        onOpenChange={() => setIsModalOpen((prev) => !prev)}
        values={{
          id: task.id,
          taskName: task.name,
          selectedCourse: task.course.name,
          state: task.state,
          date: task.date,
          description: task.description
        }}
      />}
    </div>
  )
}
