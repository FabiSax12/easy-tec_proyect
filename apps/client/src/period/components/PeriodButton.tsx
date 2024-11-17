import { Link } from "react-router-dom"
import { PeriodMenu } from "@/period/components"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"

interface Props {
  title: string
  id: number
  code: string
  startDate: string
  endDate: string
}

export const PeriodButton = ({ title, id, code, startDate, endDate }: Props) => {
  return (
    <div className="min-w-36 px-4 py-2 flex justify-between items-center border-b-2 border-b-default-200">
      <Link
        to={`/principal/periodo/${code}`}
        className="group"
      >
        <h3 className="flex items-center gap-3 group-hover:text-primary transition-colors ease-in">
          {title}
          <FaArrowUpRightFromSquare className="text-[0.7rem] text-primary transition-all opacity-0 group-hover:opacity-100" />
        </h3>
        <p className="text-[0.7rem]">{`${startDate} - ${endDate}`}</p>
      </Link>
      <PeriodMenu periodId={id} />
    </div>
  )
}