import { useMemo, useState } from "react"
import type { Course } from "@/shared/types/entities/Course"
import type { Selection, SortDescriptor } from "@easy-tec/ui"

export const useCoursesTable = (courses: Course[] | undefined, initialFilter?: { period?: string; state?: string }) => {
  const [filterValue, setFilterValue] = useState("")
  const [periodFilter] = useState(initialFilter?.period || "")
  const [statusFilter, setStatusFilter] = useState<Selection>(initialFilter?.state ? new Set(initialFilter.state) : "all")
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  })

  const filteredAndSortedItems = useMemo(() => {
    let result = courses || []

    if (filterValue) {
      result = result.filter((course) =>
        course.name.toLowerCase().includes(filterValue.toLowerCase())
      )
    }

    if (periodFilter) {
      result = result.filter((course) => course.periodCode === periodFilter)
    }

    if (statusFilter !== "all") {
      result = result.filter((course) =>
        Array.from(statusFilter).includes(course.state)
      )
    }

    if (sortDescriptor.column) {
      result.sort((a, b) => {
        const first = a[sortDescriptor.column as keyof Course] as number
        const second = b[sortDescriptor.column as keyof Course] as number
        return sortDescriptor.direction === "descending" ? second - first : first - second
      })
    }

    return result
  }, [courses, filterValue, periodFilter, statusFilter, sortDescriptor])

  return {
    filterValue,
    setFilterValue,
    statusFilter,
    setStatusFilter,
    sortDescriptor,
    setSortDescriptor,
    filteredAndSortedItems,
    hasSearchFilter: Boolean(filterValue)
  }
}