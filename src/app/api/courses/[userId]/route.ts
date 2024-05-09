import { NextResponse, NextRequest } from "next/server"
import db from "@/libs/db"

export async function GET(req: Request, context: {params: {userId: string}}) {
  const userId = context.params.userId

  try {
    const periods = await db.academicPeriod.findMany({ where: { userId: Number(userId) } })
    const periodIds = periods.map(period => period.id)

    const courses = await db.course.findMany({ where: { academicPeriodId: { in: periodIds }}})

    return NextResponse.json(courses, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "Error fetching courses" }, { status: 500 })
  }
}