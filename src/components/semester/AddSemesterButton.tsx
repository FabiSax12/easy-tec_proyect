import { FaPlus } from "react-icons/fa6"

interface Props {
  onPress: () => void
}

export const AddSemesterButton = ({ onPress }: Props) => {
  return (
    <button
      onClick={onPress}
      className="px-4 py-2 rounded-md bg-gray text-white flex justify-center items-center hover:bg-gray-600"
    >
      <span className='flex items-center gap-1 text-sm'><FaPlus /> Nuevo</span>
    </button>
  )
}