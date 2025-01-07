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