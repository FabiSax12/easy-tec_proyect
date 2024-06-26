"use client"
import React, { useCallback, useEffect, useMemo, useState } from "react"
import { useCourses } from "@/hooks/useCoursesTable"
import { Course } from "@prisma/client"
import { TableActionsMenu, TableBottomContent, TableFilterOption } from "@/components/courses"
import {
  Table, TableHeader, TableColumn, TableBody, TableRow,
  TableCell, Input, Button, Chip, ChipProps
} from "@nextui-org/react"
import { FaPlus } from "react-icons/fa6"
import { LuSearch } from "react-icons/lu"
import { useSession } from "next-auth/react"

const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "NOMBRE", uid: "name", sortable: true },
  { name: "CRÉDITOS", uid: "credits", sortable: true },
  { name: "PERIODO", uid: "period", sortable: true },
  { name: "ESTADO", uid: "state", sortable: true },
  { name: "ACCIONES", uid: "actions" }
  // {name: "INSTRUCTOR", uid: "instructor",sortable: true},
]

const statusOptions = [
  { name: "Pendiente", uid: "pendiente" },
  { name: "Cursando", uid: "cursando" },
  { name: "Aprobado", uid: "aprobado" }
]

const statusColorMap: Record<string, ChipProps["color"]> = {
  aprobado: "success",
  pendiente: "default",
  cursando: "primary",
}

interface Props {
  filter?: { period?: string; state?: string };
}

export const CoursesMainTable = ({ filter }: Props) => {
  const { data } = useSession()
  const userId = data?.user?.id
  const [courses, setCourses] = useState<Course[]>([])
  const {
    filterValue, selectedKeys, visibleColumns, setSelectedKeys, setVisibleColumns, statusFilter,
    setStatusFilter, semesterFilter, sortDescriptor, setSortDescriptor, page, setPage,
    items, onClear, onNextPage, onPreviousPage, onRowsPerPageChange, onSearchChange, pages
  } = useCourses({ filter, courses })

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch(`/api/courses/${userId}`)
      const data = await res.json()
      setCourses(data)
    }

    if (userId) fetchCourses()
  }, [userId])

  const hasSearchFilter = Boolean(filterValue)

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columns

    return columns.filter(column => Array.from(visibleColumns).includes(column.uid))
  }, [visibleColumns])

  const filteredItems = useMemo(() => {
    let filteredCourses = [...courses]

    if (hasSearchFilter) {
      filteredCourses = filteredCourses.filter((course) =>
        course.name.toLowerCase().includes(filterValue.toLowerCase())
      )
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredCourses = filteredCourses.filter((course) =>
        Array.from(statusFilter).includes(course.state)
      )
    }
    if (semesterFilter !== "all") {
      filteredCourses = filteredCourses.filter(
        (course) => semesterFilter == `${course.academicPeriodId}`
      )
    }

    return filteredCourses
  }, [courses, filterValue, statusFilter, semesterFilter])

  const sortedItems = useMemo(() => {
    return [...items].sort((a: Course, b: Course) => {
      const first = a[sortDescriptor.column as keyof Course] as number
      const second = b[sortDescriptor.column as keyof Course] as number
      const cmp = first < second ? -1 : first > second ? 1 : 0

      return sortDescriptor.direction === "descending" ? -cmp : cmp
    })
  }, [sortDescriptor, items])

  const renderCell = useCallback(
    (course: Course, columnKey: React.Key) => {
      const cellValue = course[columnKey as keyof Course]
      switch (columnKey) {
      case "name":
        return <>
          <p className="text-bold text-small capitalize">{course.name}</p>
          <p className="text-xs">{course.teacher}</p>
        </>
      case "state":
        return <Chip
          className="capitalize"
          color={statusColorMap[course.state]}
          size="sm"
          variant="flat"
        >
          <>{cellValue}</>
        </Chip>
      case "actions":
        return <TableActionsMenu />
      default:
        return <>{cellValue}</>
      }
    },
    []
  )

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Buscar por nombre..."
            startContent={<LuSearch />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <TableFilterOption
              title="Estado"
              selectedKeys={statusFilter}
              onSelectionChange={setStatusFilter}
              options={statusOptions}
            />
            <TableFilterOption
              title="Columnas"
              selectedKeys={visibleColumns}
              onSelectionChange={setVisibleColumns}
              options={columns}
            />
            <Button color="primary" endContent={<FaPlus />}>
              Nuevo
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total de cursos: {filteredItems.length}</span>
          <label className="flex items-center text-default-400 text-small">
            Filas por página:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    )
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    courses.length,
    hasSearchFilter,
  ])

  const bottomContent = useMemo(() => {
    return <TableBottomContent
      filteredItems={filteredItems}
      selectedKeys={selectedKeys}
      page={page} pages={pages}
      setPage={setPage}
      onPreviousPage={onPreviousPage}
      onNextPage={onNextPage}
    />
  }, [selectedKeys, items.length, page, pages, hasSearchFilter])

  return (
    <Table
      aria-label="Example table with custom cells, pagination and sorting"
      isHeaderSticky
      showSelectionCheckboxes={false}
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[382px]",
      }}
      selectedKeys={selectedKeys}
      selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
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
      <TableBody emptyContent={"No se encontraron cursos"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}