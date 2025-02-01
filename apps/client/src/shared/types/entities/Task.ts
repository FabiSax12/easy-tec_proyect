export enum TaskState {
  TODO = "Sin hacer",
  DOING = "En proceso",
  DONE = "Hecho",
  DELIVERED = "Entregado",
}

export interface Task {
  id: number
  name: string
  description: string
  state: string
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