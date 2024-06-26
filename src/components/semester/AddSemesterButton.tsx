"use client"
import { FaPlus } from "react-icons/fa6"
import { ModalSemestre } from "./AddSemesterModal"
import { useDisclosure } from "@nextui-org/react"

interface Props {
  // Props
}

export const AddSemesterButton = () => {
  const { onOpen, isOpen, onOpenChange } = useDisclosure()

  return <>
    <button
      onClick={onOpen}
      className="w-full px-4 py-2 rounded-md flex flex-col justify-center items-center"
    >
      <span className='flex items-center gap-1 text-sm text-primary-400'>Añadir<FaPlus /></span>
    </button>
    <ModalSemestre isOpen={isOpen} onOpenChange={onOpenChange} />
  </>
}