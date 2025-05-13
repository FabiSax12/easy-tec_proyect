export type TaskState = "todo" | "doing" | "done" | "delivered"

export interface TimeRemaining {
  daysLeft: number
  hoursLeft: number
  minutesLeft: number
}

export enum TaskStateSpanish {
  todo = "Pendiente",
  doing = "En proceso",
  done = "Hecho",
  delivered = "Entregado"
}

export interface Task {
  id: number
  name: string
  description: string
  state: TaskState
  date: Date
  createdAt: Date
  updatedAt: Date
  userId: number
  courseId: number
}

export interface TaskWithCourseName extends Task {
  course: {
    name: string
  }
}

export interface CreateTaskDto {
  name: string
  description: string
  state: string
  date: Date
  userId: number
  courseId: number
}

export interface UpdateTaskDto {
  name?: string
  description?: string
  state?: string
  date?: Date
  userId?: number
  courseId?: number
}