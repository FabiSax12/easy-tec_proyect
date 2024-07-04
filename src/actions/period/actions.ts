"use server"

import db from "@/libs/db"
import { AcademicPeriod } from "@prisma/client"

export async function getUserPeriods(userId: number) {
  const periods = await db.academicPeriod.findMany({ where: { userId: Number(userId) } })
  return periods
}

export async function addPeriod(userId: number, periodData: Omit<AcademicPeriod, "id" | "userId">) {
  // Prepare the data
  const data = {
    type: periodData.type,
    typeId: periodData.typeId,
    startDate: periodData.startDate,
    endDate: periodData.endDate,
    user: {
      connect: { id: userId }
    }
  }

  // Create the academic period
  const createdAcademicPeriod = await db.academicPeriod.create({ data })

  // If creation fails
  if (!createdAcademicPeriod) {
    return null
  }

  // revalidatePath("/principal")
  return createdAcademicPeriod
}