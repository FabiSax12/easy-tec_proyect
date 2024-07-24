import { User as UserDB, Course as CourseDB, AcademicPeriod, Task as TaskDB } from "@prisma/client"

export interface User extends Omit<UserDB, "id" | "verified" | "createdAt" | "updatedAt"> { }

export interface Course extends Omit<CourseDB, "id" | "createdAt" | "updatedAt"> { }

export interface Period extends Omit<AcademicPeriod, "id"> { }

export interface Task extends Omit<TaskDB, "id" | "updatedAt" | "createdAt"> { }