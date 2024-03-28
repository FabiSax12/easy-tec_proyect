"use client"
import React, { useCallback, useMemo } from "react"
import {
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,
  Input, Button, DropdownTrigger, Dropdown, DropdownMenu, DropdownItem,
  Chip, User as Course, Pagination, ChipProps
} from "@nextui-org/react"
import { FaPlus, FaChevronDown } from "react-icons/fa6"
import { HiDotsVertical } from "react-icons/hi"
import { LuSearch } from "react-icons/lu"
import { columns, courses, statusOptions } from "@/components/nextui/data"
import { capitalize } from "@/utils/Capitalize"
import { useCourses } from "./useCoursesTable"

const statusColorMap: Record<string, ChipProps["color"]> = {
  aprobado: "success",
  pendiente: "default",
  cursando: "primary",
}

type Course = typeof courses[0];

interface Props {
  filter?: { semester?: string; state?: string };
}

export const CoursesMainTable = ({ filter }: Props) => {
  const {
    filterValue, selectedKeys, visibleColumns, setFilterValue, setSelectedKeys, setVisibleColumns,
    statusFilter, setStatusFilter, semesterFilter, setSemesterFilter, rowsPerPage, setRowsPerPage,
    sortDescriptor, setSortDescriptor, page, setPage, items, onClear, onNextPage, onPreviousPage,
    onRowsPerPageChange, onSearchChange, pages
  } = useCourses({ filter })

  const hasSearchFilter = Boolean(filterValue)

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columns

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    )
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
        (course) => semesterFilter == course.semester
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
          return (
            <Course
              // avatarProps={{radius: "lg", src: course.avatar}}
              description={course.teacher}
              name={cellValue}
            >
              {course.teacher}
            </Course>
          )
        case "state":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[course.state]}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          )
        case "actions":
          return (
            <div className="relative flex justify-end items-center gap-2">
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly size="sm" variant="light">
                    <HiDotsVertical className="text-default-300" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem color="primary" variant="light">
                    Abrir
                  </DropdownItem>
                  <DropdownItem color="success" variant="light">
                    Editar
                  </DropdownItem>
                  <DropdownItem className="text-danger" color="danger" variant="solid">
                    Eliminar
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          )
        default:
          return cellValue
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
            <Dropdown>
              <DropdownTrigger className="sm:flex">
                <Button endContent={<FaChevronDown className="text-small" />} variant="flat">
                  Estado
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="sm:flex">
                <Button endContent={<FaChevronDown className="text-small" />} variant="flat">
                  Columnas
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
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
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
            ? "Todos seleccionados"
            : `${selectedKeys.size} de ${filteredItems.length} seleccionados`}
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
            Previous
          </Button>
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
            Next
          </Button>
        </div>
      </div>
    )
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