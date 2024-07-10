"use server"

import db from "@/libs/db"
import { AcademicPeriod, User } from "@prisma/client"
import bcrypt from "bcryptjs"

async function usersSeed() {
  await db.user.deleteMany()

  const user1 = await db.user.create({
    data: {
      email: "usuario1@example.com",
      password: bcrypt.hashSync("password1", 10),
      name: "Usuario",
      lastname: "Uno",
    },
  })

  const user2 = await db.user.create({
    data: {
      email: "usuario2@example.com",
      password: bcrypt.hashSync("password2", 10),
      name: "Usuario",
      lastname: "Dos",
    },
  })

  return { user1, user2 }
}

async function periodsSeed(user1: User, user2: User) {
  await db.academicPeriod.deleteMany()

  const academicPeriod1 = await db.academicPeriod.create({
    data: {
      type: "Verano",
      typeId: 2024,
      startDate: new Date("2024-05-07"),
      endDate: new Date("2024-05-30"),
      userId: user1.id
    }
  })

  return { academicPeriod1 }
}

async function coursesSeed(academicPeriod1: AcademicPeriod) {
  await db.course.deleteMany()

  const course1 = await db.course.create({
    data: {
      name: "Introducción a la Ciencia de la Computación",
      codex: "ICCOMP",
      period: "S-2",
      state: "pendiente",
      teacher: "Dr. Juan Pérez",
      credits: 3,
      academicPeriodId: academicPeriod1.id,
    }
  })

  return { course1 }
}

export async function seed() {
  if (process.env.NODE_ENV === "production") return false

  const { user1, user2 } = await usersSeed()
  const { academicPeriod1 } = await periodsSeed(user1, user2)
  const { course1 } = await coursesSeed(academicPeriod1)

  return true
}

// await seed()