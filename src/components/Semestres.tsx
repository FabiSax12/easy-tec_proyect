"use client"
import { NextPage } from 'next'
import useUserInfo from '@/store/user';
import { SemestreButton } from './SemestreButton'
import AddSemesterButton from './AddSemesterButton'
import ModalSemestre from "@/components/Modal"
import {useDisclosure} from "@nextui-org/react";

interface Props {
  className: string
}

const Semestres: NextPage<Props> = ({className}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure()
  const {semestres} = useUserInfo((user) => user)

  return (
    <section className={`${className}`}>
      <header className='w-min mx-auto'>
        <h3 className='text-xl mb-4'>Semestres</h3>
      </header>
      <div className='grid grid-cols-2 gap-2 w-max'>
        {semestres.map((semestre, idx) => (
          <SemestreButton key={idx} title={semestre.title} startDate={semestre.startDate} endDate={semestre.endDate}/>
        ))}
        
        <AddSemesterButton onPress={onOpen}/>
      </div>
      <ModalSemestre isOpen={isOpen} onOpenChange={onOpenChange}/>
    </section>
  )
}

export default Semestres