import { Key } from "react"
import { StatusChip, TableActions } from "@/modules/course/components"

import type { Course } from "@/shared/types/entities/Course"

interface Props {
  course: Course
  columnKey: Key
  onDeleteCourse: (course: Course) => void
  onEditCourse: (id: string | number) => void
  onOpenCourse: (id: string | number) => void
}

export const CourseTableCell = ({ course, columnKey, onDeleteCourse, onEditCourse, onOpenCourse }: Props) => {
  const cellValue = course[columnKey as keyof Course]

  switch (columnKey) {
    case "name":
      return (
        <>
          <p className="text-bold text-small capitalize">{course.name}</p>
          <p className="text-xs">{course.teacher}</p>
        </>
      )
    case "state":
      return <StatusChip status={course.state ?? "Sin estado"} />
    case "actions":
      return (
        <TableActions
          onDeleteCourse={() => onDeleteCourse(course)}
          onEditCourse={() => onEditCourse(course.id)}
          onOpenCourse={() => onOpenCourse(course.id)}
        />
      )
    default:
      return <>{cellValue}</>
  }
}