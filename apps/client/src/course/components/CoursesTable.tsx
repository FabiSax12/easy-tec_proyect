import { Key, useCallback, useMemo, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { usePagination } from "@/shared/hooks"
import { useAuthStore } from "@/auth/store"
import { getUserCourses } from "@/course/services/courses.service"
import { TopContent, BottomContent, StatusChip, TableActions } from "@/course/components"
import { columns, statusOptions } from "./config"
import {
  Table, TableRow, TableCell, SortDescriptor,
  Selection, TableBody, TableHeader, TableColumn,
} from "@nextui-org/react"

import type { Course } from "@/shared/interfaces"

const INITIAL_VISIBLE_COLUMNS = ["name", "credits", "period", "state", "actions"]

interface Props {
  filter?: { period?: string; state?: string };
}

export const CoursesTable = ({ filter }: Props) => {
  const { user } = useAuthStore()
  const [filterValue, setFilterValue] = useState("")
  const [periodFilter] = useState(filter?.period || "")
  const [statusFilter, setStatusFilter] = useState<Selection>(filter?.state ? new Set(filter.state) : "all")
  const [visibleColumns, setVisibleColumns] = useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS))
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  })

  const coursesQuery = useQuery<Course[]>({
    queryKey: ["courses"],
    queryFn: async () => getUserCourses(user!.id),
    enabled: !!user,
  })

  const { currentPage, rowsPerPage, totalPages, setPage } = usePagination({
    totalItems: coursesQuery.data?.length || 0,
    initialRowsPerPage: 7,
  })

  const hasSearchFilter = Boolean(filterValue)

  const onSearchChange = useCallback(
    (value?: string) => {
      setFilterValue(value || "")
      setPage(1)
    },
    [setPage]
  )

  const filteredAndSortedItems = useMemo(() => {
    let result = coursesQuery.data || []

    if (hasSearchFilter) {
      result = result.filter((course) => course.name.toLowerCase().includes(filterValue.toLowerCase()))
    }
    if (periodFilter) {
      result = result.filter((course) => course.period === periodFilter)
    }
    if (statusFilter !== "all") {
      result = result.filter((course) => Array.from(statusFilter).includes(course.state))
    }

    if (sortDescriptor.column) {
      result.sort((a, b) => {
        const first = a[sortDescriptor.column as keyof Course] as number
        const second = b[sortDescriptor.column as keyof Course] as number
        return sortDescriptor.direction === "descending" ? second - first : first - second
      })
    }

    return result
  }, [filterValue, periodFilter, statusFilter, hasSearchFilter, sortDescriptor, coursesQuery])

  const renderCell = useCallback(
    (course: Course, columnKey: Key) => {
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
          return <TableActions courseId={course.id} />
        default:
          return cellValue
      }
    },
    []
  )

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columns
    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid))
  }, [visibleColumns])

  const classNames = useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        "group-data-[middle=true]:before:rounded-none",
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    []
  )

  return (
    <Table
      isCompact
      removeWrapper
      bottomContentPlacement="outside"
      bottomContent={
        <BottomContent
          hasSearchFilter={hasSearchFilter}
          pages={totalPages}
          page={currentPage}
          setPage={setPage}
        />
      }
      checkboxesProps={{
        classNames: {
          wrapper: "after:bg-foreground after:text-background text-background",
        },
      }}
      classNames={classNames}
      sortDescriptor={sortDescriptor}
      topContentPlacement="outside"
      topContent={
        <TopContent
          filterValue={filterValue}
          onSearchChange={onSearchChange}
          rowsPerPage={rowsPerPage}
          setFilterValue={setFilterValue}
          setStatusFilter={setStatusFilter}
          setVisibleColumns={setVisibleColumns}
          statusFilter={statusFilter}
          visibleColumns={visibleColumns}
          columns={columns}
          courses={coursesQuery.data || []}
          statusOptions={statusOptions}
        />
      }
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent="No courses found" items={filteredAndSortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
