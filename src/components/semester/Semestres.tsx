"use client"
import useUserInfo from "@/store/user"
import { useDisclosure } from "@nextui-org/react"
import { SemestreButton, AddSemesterButton, ModalSemestre } from "@/components"

interface Props {
  className?: string
}

export const Semestres = ({ className }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const { semestres } = useUserInfo((user) => user)

  return (
    <>
      <div className='grid grid-cols-2 gap-2 w-max'>
        {semestres.map((semestre, idx) => (
          <SemestreButton
            key={semestre.id}
            id={semestre.id}
            title={semestre.title}
            startDate={semestre.startDate}
            endDate={semestre.endDate} />
        ))}

        <AddSemesterButton onPress={onOpen} />
      </div>
      <ModalSemestre isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  )
}