import { Key, useCallback, useMemo, useState } from "react"
import { useFetch, usePagination } from "@/hooks"
import { columns, statusOptions } from "./config"
import { Course, User } from "@/types/api"
import { TopContent } from "./TopContent"
import { BottomContent } from "./BottomContent"
import {
  Table,
  TableRow,
  TableCell,
  SortDescriptor,
  Selection,
  TableBody,
  TableHeader,
  TableColumn,
} from "@nextui-org/react"
import { StatusChip } from "./StatusChip"
import { TableActions } from "./TableActions"

const INITIAL_VISIBLE_COLUMNS = ["name", "credits", "period", "state", "actions"]

interface Props {
  user: User;
  filter?: { period?: string; state?: string };
}

export const CoursesTable = ({ user }: Props) => {
  const fetchState = useFetch<Course[]>(`/api/courses/user/${user.id}`, [user])

  const [filterValue, setFilterValue] = useState("")
  const [visibleColumns, setVisibleColumns] = useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS))
  const [statusFilter, setStatusFilter] = useState<Selection>("all")
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  })

  const { currentPage, rowsPerPage, totalPages, setPage } = usePagination({
    totalItems: fetchState.data?.length || 0,
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
    let result = [...(fetchState.data || [])]

    if (hasSearchFilter) {
      result = result.filter((course) => course.name.toLowerCase().includes(filterValue.toLowerCase()))
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
  }, [filterValue, statusFilter, hasSearchFilter, sortDescriptor, fetchState.data])

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
          return <TableActions />
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
          courses={fetchState.data || []}
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
