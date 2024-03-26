"use client"
import { NextPage } from "next"
import useUserInfo from "@/store/user"
import { SemestreButton } from "./SemestreButton"
import AddSemesterButton from "./AddSemesterButton"
import ModalSemestre from "@/components/AddSemesterModal"
import {useDisclosure} from "@nextui-org/react"

interface Props {
  className?: string
}

const Semestres: NextPage<Props> = ({className}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure()
  const {semestres} = useUserInfo((user) => user)

  return (
    <>
      <div className='grid grid-cols-2 gap-2 w-max'>
        {semestres.map((semestre, idx) => (
          <SemestreButton 
            key={semestre.id} 
            id={semestre.id} 
            title={semestre.title}
            startDate={semestre.startDate} 
            endDate={semestre.endDate}/>
        ))}
        
        <AddSemesterButton onPress={onOpen}/>
      </div>
      <ModalSemestre isOpen={isOpen} onOpenChange={onOpenChange}/>
    </>
  )
}

export default Semestres