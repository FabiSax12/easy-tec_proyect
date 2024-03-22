import Link from "next/link"

interface Props {
  title: string
  id: string
  startDate: string
  endDate: string
}

export const SemestreButton = ({title, id, startDate, endDate}: Props) => {
  return (
    <Link 
      href={`semestre/${id}`} 
      className="min-w-36 px-4 py-2 rounded-md bg-gray text-white flex flex-col hover:bg-gray-600"
    >
      <h3 className="mb-2">{title}</h3>
      <p className="text-[0.7rem]">{startDate}</p>
      <p className="text-[0.7rem]">{endDate}</p>
    </Link>
  )
}