import { notFound } from "next/navigation"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import db from "@/libs/db"
import { carriersOptions, campusOptions, periodsOptions, subjectsOptions } from "@/data/schedule-options"

export async function GET(req: Request) {
  if (process.env.NODE_ENV !== "development") return notFound()

  // Clear data
  await db.course.deleteMany()
  await db.academicPeriod.deleteMany()
  await db.user.deleteMany()

  await db.campus.deleteMany()
  await db.carrier.deleteMany()
  await db.period.deleteMany()

  // Create users
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

  // Create academic periods
  const academicPeriod1 = await db.academicPeriod.create({
    data: {
      type: "Verano",
      typeId: 2024, // O el ID correspondiente a 2024
      startDate: new Date("2024-05-07"),
      endDate: new Date("2024-05-30"),
      userId: user1.id, // Asignar al primer usuario
    },
  })

  // Create courses
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

  // // Add carriers
  // for (const carrier of Object.values(carriersOptions)) {
  //   await db.carrier.create({
  //     data: {
  //       name: carrier.name,
  //       code: carrier.code,
  //     },
  //   })
  // }

  // for (const subject of Object.values(subjectsOptions)) {
  //   await db.subject.create({
  //     data: {
  //       name: subject.name,
  //       code: subject.code,
  //     },
  //   })
  // }

  // for (const campus of campusOptions) {
  //   await db.campus.create({
  //     data: {
  //       name: campus.name,
  //       code: campus.code,
  //       carriers: {
  //         connect: campus.carriers.map(carrier => ({ code: carrier.code })),
  //       },
  //       subjects: {
  //         connect: campus.subjects.map(subject => ({ code: subject.code })),
  //       },
  //     },
  //   })
  // }

  // for (const period of periodsOptions) {
  //   await db.period.create({
  //     data: {
  //       name: period.name,
  //       code: period.code,
  //     },
  //   })
  // }

  console.log("Data created successfully.")
  return NextResponse.json({ message: "Data created successfully." }, { status: 200 })
}