// "use client"
// import { useEffect, useState } from "react"
// import useUserInfo from "@/store/user"
// import { useDisclosure } from "@nextui-org/react"
import { formatDate } from "@/utils"
import { SemestreButton, AddSemesterButton, ModalSemestre } from "@/components"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"

interface AcademicPeriod {
  id: number
  type: string
  typeId: number
  startDate: Date
  endDate: Date
  userId: number
}

export const Semestres = async () => {
  const session = await getServerSession(authOptions)

  const res = await fetch(`http://localhost:3000/api/academic-periods/${session?.user.id}`)
  const academicPeriods: AcademicPeriod[] = await res.json()

  console.log(academicPeriods)

  return (
    <>
      <div>
        {
          academicPeriods ? academicPeriods.map((period) => (
            <SemestreButton
              key={period.id}
              id={period.id.toString()}
              title={`${period.type} ${period.typeId}`}
              startDate={formatDate(period.startDate.toString())}
              endDate={formatDate(period.endDate.toString())}
            />
          )) : null
        }
        {/* <AddSemesterButton onPress={onOpen} /> */}
      </div>
      {/* <ModalSemestre isOpen={isOpen} onOpenChange={onOpenChange} /> */}
    </>
  )
}
