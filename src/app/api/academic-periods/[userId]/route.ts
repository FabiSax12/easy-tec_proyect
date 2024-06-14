import { NextResponse } from "next/server"
import db from "@/libs/db"

export async function GET(req: Request, context: { params: { userId: string } }) {
  const { userId } = context.params

  try {
    const periods = await db.academicPeriod.findMany({ where: { userId: Number(userId) } })
    return NextResponse.json(periods, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "Error fetching academic periods" }, { status: 500 })
  }
}

export async function POST(req: Request, context: { params: { userId: string } }) {
  try {
    // Get the body of the request
    const body = await req.json();
    const userId = parseInt(context.params.userId, 10);

    // Prepare the data
    const data = {
      type: body.type,
      typeId: Number(body.typeId),
      startDate: new Date(body.startDate),
      endDate: new Date(body.endDate),
      user: {
        connect: { id: userId }
      }
    };

    // Create the academic period
    const createdAcademicPeriod = await db.academicPeriod.create({ data });

    // If creation fails
    if (!createdAcademicPeriod) {
      return NextResponse.json({ error: "Error creating academic period" }, { status: 500 });
    }

    // revalidatePath("/principal")
    return NextResponse.json(createdAcademicPeriod, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}