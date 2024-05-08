"use client"
import { useEffect, useState } from "react"
import useUserInfo from "@/store/user"
import { formatDate } from "@/utils"
import { useDisclosure } from "@nextui-org/react"
import { SemestreButton, AddSemesterButton, ModalSemestre } from "@/components"

interface AcademicPeriod {
  id: number
  type: string
  typeId: number
  startDate: Date
  endDate: Date
  userId: number
}

export const Semestres = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const id = useUserInfo((user) => user.id)
  const [academicPeriods, setAcademicPeriods] = useState<AcademicPeriod[]>([])

  useEffect(() => {
    const fetchAcademicPeriods = async () => {
      try {
        const periods = await fetch(`/api/academic-periods/${id}`)
        const data = await periods.json()
        console.log(data)
        setAcademicPeriods(data)
      } catch (error) {
        console.error(error)
      }
    }

    if (id) fetchAcademicPeriods()

  }, [id])

  return (
    <>
      <div>
        {academicPeriods.map((period) => (
          <SemestreButton
            key={period.id}
            id={period.id.toString()}
            title={`${period.type} ${period.typeId}`}
            startDate={formatDate(period.startDate.toString())}
            endDate={formatDate(period.endDate.toString())}
          />
        ))}

        <AddSemesterButton onPress={onOpen} />
      </div>
      <ModalSemestre isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  )
}
