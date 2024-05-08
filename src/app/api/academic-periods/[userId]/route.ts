import { NextResponse } from "next/server"
import db from "@/libs/db"

export async function GET(req: Request, context: {params: {userId: string}}) {
  const { userId } = context.params

  try {
    const periods = await db.academicPeriod.findMany({where: {userId: Number(userId)}})
    return NextResponse.json(periods, {status: 200})
  } catch (error) {
    return NextResponse.json({error: "Error fetching academic periods"}, {status: 500})
  }
}