import { AddPeriodModal } from "@/modules/period/components"
import { useDisclosure } from "@easy-tec/ui"
import { FaPlus } from "react-icons/fa6"

export const AddPeriodButton = () => {
  const { onOpen, isOpen, onOpenChange } = useDisclosure()

  return <>
    <button
      onClick={onOpen}
      className="w-full px-4 py-2 rounded-md flex flex-col justify-center items-center"
    >
      <span className='flex items-center gap-1 text-sm text-primary-400'>Añadir<FaPlus /></span>
    </button>
    <AddPeriodModal isOpen={isOpen} onOpenChange={onOpenChange} />
  </>
}