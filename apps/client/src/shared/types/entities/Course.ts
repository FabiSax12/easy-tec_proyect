export enum CourseState {
  APROBADO = "aprobado",
  PENDIENTE = "pendiente",
  CURSANDO = "cursando"
}

export interface Course {
  readonly id: number,
  name: string,
  codex: string,
  teacher: string,
  credits: number,
  academicPeriodId: number,
  state: CourseState,
  period: string
}

export interface CreateCourseDto {
  name: string,
  codex: string,
  teacher: string,
  credits: number,
  academicPeriodId: number,
  state: CourseState,
  period: string
}

export interface UpdateCourseDto {
  name?: string,
  codex?: string,
  teacher?: string,
  credits?: number,
  academicPeriodId?: number,
  state?: CourseState,
  period?: string
}