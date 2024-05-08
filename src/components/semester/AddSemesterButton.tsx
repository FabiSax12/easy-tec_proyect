import { FaPlus } from "react-icons/fa6"

interface Props {
  onPress: () => void
}

export const AddSemesterButton = ({ onPress }: Props) => {
  return (
    <button
      onClick={onPress}
      className="w-full px-4 py-2 rounded-md flex flex-col justify-center items-center"
    >
      <span className='flex items-center gap-1 text-sm text-primary-400'>Añadir<FaPlus /></span>
    </button>
  )
}