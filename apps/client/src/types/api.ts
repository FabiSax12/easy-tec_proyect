export interface User {
  id: number
  name: string
  lastname: string;
  email: string;
  avatar: string;
  carrier: string;
  verified: boolean;
}

export interface Period {
  id: number
  type: string
  typeId: number
  startDate: Date
  endDate: Date
}

export interface Course {
  id: number
  name: string
  codex: string
  teacher: string
  credits: number
  academicPeriodId: number
  state: "aprobado" | "pendiente" | "cursando" | ""
  period: string
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