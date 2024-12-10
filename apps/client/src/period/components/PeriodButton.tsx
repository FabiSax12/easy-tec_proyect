import { Link } from "react-router-dom"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"
import { Progress } from "@nextui-org/react"
import { useQuery } from "@tanstack/react-query"
import { getCoursesByPeriodId } from "@/course/services/courses.service"
import { Course } from "@/shared/interfaces"
import { formatDate } from "@/shared/utils"
import { useMemo } from "react"

interface Props {
  title: string
  id: number
  code: string
  startDate: Date
  endDate: Date
}

export const PeriodButton = ({ title, id, code, startDate, endDate }: Props) => {
  const coursesQuery = useQuery({
    queryKey: ["courses", `periodId=${id}`],
    queryFn: () => getCoursesByPeriodId(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 60 * 12, // 12 hours
  })

  const totalCredits = coursesQuery.data?.reduce((acc: number, course: Course) => acc + course.credits, 0)
  const totalCourses = coursesQuery.data?.length
  const timeElapsedPercentage = useMemo(() => {
    const start = new Date(startDate).getTime()
    const end = new Date(endDate).getTime()
    const now = Date.now()

    if (now >= end) return 100
    if (now <= start) return 0

    const totalTime = end - start
    const elapsedTime = now - start
    const percentage = (elapsedTime / totalTime) * 100

    return percentage
  }, [endDate, startDate])

  return (
    <Link
      to={`/principal/periodo/${code}`}
      className="
      min-w-80 min-h-36 flex flex-col justify-between border-2 border-default-200 rounded-xl
      group cursor-pointer hover:border-primary transition-colors ease-in
      "
    >
      <div
        className=" w-full px-4 py-2"
      >
        <h3 className="flex items-center gap-3 group-hover:text-primary transition-colors ease-in">
          {title}
          <FaArrowUpRightFromSquare className="text-[0.7rem] text-primary transition-all opacity-0 group-hover:opacity-100" />
        </h3>
        <p className="text-[0.7rem]">{`${formatDate(startDate.toString())} - ${formatDate(endDate.toString())}`}</p>
      </div>
      <div className="w-full px-4 py-2 flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="text-xs">{totalCredits} Créditos</span>
          <span className="text-xs">{totalCourses} Cursos</span>
          <span className="text-xs">{timeElapsedPercentage.toFixed(0)}% Completado</span>
        </div>
        <Progress value={timeElapsedPercentage} size="sm" />
      </div>
      {/* <PeriodMenu periodId={id} /> */}
    </Link>
  )
}