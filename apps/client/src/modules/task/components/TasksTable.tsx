import { useState } from "react"
import { useQueryClient } from "@tanstack/react-query"
import { TaskWithCourseName, TimeRemaining } from "@/shared/types/entities/Task"
import { useAuthStore } from "@/modules/auth/store/auth.store"
import { EditTaskDrawer } from "./EditTaskDrawer"
import { TasksTableCell } from "./TasksTableCell"
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react"

interface Props {
  periodCode: string
}

export const TasksTable = ({ periodCode }: Props) => {
  const user = useAuthStore(state => state.user)
  const queryClient = useQueryClient()
  const tasks = queryClient.getQueryData<TaskWithCourseName[]>(["tasks", user?.id, periodCode]) || []

  const [taskEditing, setTaskEditing] = useState<TaskWithCourseName | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({ daysLeft: 0, hoursLeft: 0, minutesLeft: 0 })

  return <>
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn key="title">TITULO</TableColumn>
        <TableColumn key="description">DESCRIPTION</TableColumn>
        <TableColumn key="course">CURSO</TableColumn>
        <TableColumn key="state">ESTADO</TableColumn>
        <TableColumn key="date">FECHA</TableColumn>
        <TableColumn key="timeRemaining">TIEMPO RESTANTE</TableColumn>
        <TableColumn key="actions" align="center">ACCIONES</TableColumn>
      </TableHeader>
      <TableBody
        items={tasks}
      >
        {task => <TableRow>
          {(columnKey) => <TableCell>
            <TasksTableCell
              task={task}
              columnKey={columnKey}
              onEditTask={(timeRemaining: TimeRemaining) => {
                setTimeRemaining(timeRemaining)
                setTaskEditing(task)
                setIsModalOpen(true)
              }}
            />
          </TableCell>}
        </TableRow>}
      </TableBody>
    </Table>

    {!!taskEditing && <EditTaskDrawer
      isOpen={isModalOpen}
      task={taskEditing}
      timeRemaining={timeRemaining}
      onClose={() => setIsModalOpen(false)}
      onOpenChange={() => setIsModalOpen(prev => !prev)}
    />}
  </>
}