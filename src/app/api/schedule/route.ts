import { NextResponse, type NextRequest } from "next/server"
import { getSchedule } from "@/libs/scrapping/schedules-scrapping"

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const campus = searchParams.get("campus")
  const carrier = searchParams.get("carrier")
  const period = searchParams.get("period")

  if (campus && carrier && period) {
    const schedule = await getSchedule(
      campus,
      carrier,
      period,
      {
        email: process.env.TEC_EMAIL,
        password: process.env.TEC_PASSWORD
      }
    )
    return NextResponse.json({ data: schedule }, { status: 200 })
  } else {
    return NextResponse.json({ message: "Missing required parameters" }, { status: 400 })
  }
}