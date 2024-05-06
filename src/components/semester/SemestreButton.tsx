import Link from "next/link"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"

interface Props {
  title: string
  id: string
  startDate: string
  endDate: string
}

export const SemestreButton = ({ title, id, startDate, endDate }: Props) => {
  return (
    <Link
      href={`semestre/${id}`}
      className="min-w-36 px-4 py-2 flex flex-col border-b-2 border-b-default-200"
    >
      <h3 className="w-full flex items-center justify-between hover:text-primary">
        {title}
        <FaArrowUpRightFromSquare className="text-[0.7rem] hover:text-primary" />
      </h3>
      <p className="text-[0.7rem]">{`${startDate} - ${endDate}`}</p>

    </Link>
  )
}