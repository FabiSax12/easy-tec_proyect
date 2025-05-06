import { useState } from "react"
import { capitalize } from "@/shared/utils"
import { AddCourseModal } from "@/modules/course/components"
import {
  Input, Button, DropdownTrigger, Dropdown,
  DropdownMenu, DropdownItem, Selection
} from "@easy-tec/ui"
import { FaPlus, FaChevronDown } from "react-icons/fa6"
import { LuSearch } from "react-icons/lu"

import type { Course } from "@/shared/types/entities/Course"

interface Props {
  filterValue: string;
  setFilterValue: (value: string) => void;
  statusFilter: Selection;
  setStatusFilter: React.Dispatch<React.SetStateAction<Selection>>;
  visibleColumns: Selection;
  setVisibleColumns: React.Dispatch<React.SetStateAction<Selection>>;
  rowsPerPage: number;
  onSearchChange: (value: string) => void;
  courses: Course[];
  columns: { name: string; uid: string, sortable?: boolean }[];
  statusOptions: { name: string; uid: string }[];
}

export const TopContent = ({
  filterValue, rowsPerPage, setFilterValue,
  setStatusFilter, setVisibleColumns, statusFilter,
  visibleColumns, onSearchChange, courses, columns, statusOptions
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)


  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-3 items-end">
        <Input
          isClearable
          classNames={{
            base: "w-full sm:max-w-[44%]",
            inputWrapper: "border-1",
          }}
          placeholder="Buscar por nombre..."
          size="sm"
          startContent={<LuSearch className="text-default-300" />}
          value={filterValue}
          variant="bordered"
          onClear={() => setFilterValue("")}
          onValueChange={onSearchChange}
        />
        <div className="flex gap-3">
          <Dropdown>
            <DropdownTrigger className="hidden sm:flex">
              <Button
                endContent={<FaChevronDown className="text-small" />}
                size="sm"
                variant="flat"
              >
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
            <DropdownTrigger className="hidden sm:flex">
              <Button
                endContent={<FaChevronDown className="text-small" />}
                size="sm"
                variant="flat"
              >
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
          <Button
            color="primary"
            endContent={<FaPlus />}
            size="sm"
            onClick={() => setIsModalOpen(true)}
          >
            Añadir
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-default-400 text-small">Total {courses.length} cursos</span>
        <label className="flex items-center text-default-400 text-small">
          Filas por página: {rowsPerPage}
        </label>
      </div>
      <AddCourseModal isOpen={isModalOpen} onOpenChange={() => setIsModalOpen(prev => !prev)} />
    </div>
  )
}