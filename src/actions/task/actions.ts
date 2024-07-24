"use server"
import { Task as FullTask } from "@prisma/client"
import { Task } from "@/interfaces/db/creation-fields"
import db from "@/libs/db"

export async function createTask(task: Task) {
  return await db.task.create({ data: task })
}

export async function deleteTask(id: number) {
  return await db.task.delete({ where: { id } })
}

export async function updateTask(id: number, task: Partial<Task>) {
  return await db.task.update({ where: { id }, data: task })
}

export async function getTasks(userId: number) {
  return await db.task.findMany({
    where: { userId },
  })
}

export async function getTasksByPeriod(userId: number, period: string) {
  return await db.task.findMany({
    where: {
      userId,
      AND: { course: { period } }
    },
    include: {
      course: {
        select: { name: true }
      }
    }
  })
}

export async function appendCourseName(task: FullTask) {
  const courseName = await db.course.findUnique({
    where: { id: task.courseId },
    select: { name: true }
  })

  return Object.assign(task, { course: courseName ?? { name: "Sin curso" } })
}