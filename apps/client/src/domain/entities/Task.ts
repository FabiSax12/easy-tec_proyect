export interface Task {
  readonly id: number
  readonly createdAt: Date
  readonly updatedAt: Date
  name: string
  description: string
  state: string
  date: Date
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
