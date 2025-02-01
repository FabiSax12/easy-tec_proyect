import { IoReload } from "react-icons/io5"

interface Props {
  title: string
}

export const TrelloColumnHeader = ({ title }: Props) => {
  return (
    <div
      className="
        bg-default-100 text-md text-default-500 h-[40px] rounded-md rounded-b-none p-3
        font-bold flex items-center justify-between shadow-small
      "
    >
      <div className="text-sm flex gap-2 cursor-text">
        {title}
      </div>
      <button
        className="stroke-gray-500 hover:stroke-default hover:bg-default rounded px-1 py-2"
      >
        <IoReload />
      </button>
    </div >
  )
}