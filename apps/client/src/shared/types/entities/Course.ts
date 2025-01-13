export enum CourseState {
  APROBADO = "aprobado",
  PENDIENTE = "pendiente",
  CURSANDO = "cursando"
}

export interface Course {
  readonly id: number,
  name: string,
  code: string,
  teacher: string,
  credits: number,
  periodId: number,
  state: CourseState,
  periodCode: string
}

export interface CreateCourseDto {
  name: string,
  code: string,
  teacher: string,
  credits: number,
  periodId: number,
  state: CourseState,
  periodCode: string
}

export interface UpdateCourseDto {
  name?: string,
  code?: string,
  teacher?: string,
  credits?: number,
  periodId?: number,
  state?: CourseState,
  periodCode?: string
}