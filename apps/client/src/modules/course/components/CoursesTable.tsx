import { useCallback, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { useQuery } from "@tanstack/react-query"
import { useOptimisticDelete, usePagination } from "@/shared/hooks"
import { useAuthStore } from "@/modules/auth/store/auth.store"
import { getUserCourses, deleteCourse } from "@/modules/course/services/courses.service"
import { TopContent, BottomContent } from "@/modules/course/components"
import { useCoursesTable } from "../hooks/useCoursesTable"
import { EditCourseDrawer } from "./EditCourseDrawer"
import { CourseTableCell } from "./CourseTableCell"
import { columns, INITIAL_VISIBLE_COLUMNS, statusOptions } from "./config"
import {
  Selection, Spinner, Table,
  TableBody, TableCell, TableColumn,
  TableHeader, TableRow
} from "@heroui/react"

import type { Course } from "@/shared/types/entities/Course"

interface Props {
  filter?: { period?: string; state?: string };
}

export const CoursesTable = ({ filter }: Props) => {
  const navigate = useNavigate()
  const { user } = useAuthStore()
  const [visibleColumns, setVisibleColumns] = useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS))
  const [editingCourse, setEditingCourse] = useState<Course | null>(null)

  const { mutate: deleteCourseMutation } = useOptimisticDelete<Course>({
    queryKey: ["courses"],
    mutationFn: deleteCourse,
    getUpdatedData: (oldData, id) => oldData.filter((item) => item.id !== id)
  })

  const coursesQuery = useQuery<Course[]>({
    queryKey: ["courses", user?.id],
    queryFn: async () => getUserCourses(),
    enabled: !!user,
    staleTime: Infinity
  })

  const {
    filterValue,
    setFilterValue,
    statusFilter,
    setStatusFilter,
    filteredAndSortedItems,
    hasSearchFilter,
    setSortDescriptor,
    sortDescriptor
  } = useCoursesTable(coursesQuery.data, filter)

  const { currentPage, rowsPerPage, totalPages, setPage } = usePagination({
    totalItems: coursesQuery.data?.length || 0,
    initialRowsPerPage: 7,
  })

  const onSearchChange = useCallback(
    (value?: string) => {
      setFilterValue(value || "")
      setPage(1)
    },
    [setPage, setFilterValue]
  )

  const onDeleteCourse = useCallback((course: Course) => {
    toast.warning(`¿Seguro que desea eliminar el curso "${course.name}"?`, {
      description: "Se eliminará permanentemente",
      duration: 5000,
      cancel: {
        label: "Cancelar",
        onClick: () => undefined
      },
      action: {
        label: "Eliminar",
        onClick: () => deleteCourseMutation(course.id)
      }
    })
  }, [deleteCourseMutation])

  const onEditCourse = useCallback((courseId: string | number) => {
    setEditingCourse(coursesQuery.data?.find(c => c.id == courseId) ?? null)
  }, [coursesQuery.data])

  const onOpenCourse = useCallback((courseId: string | number) => {
    navigate(`/courses/${courseId}`)
  }, [navigate])

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columns
    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid))
  }, [visibleColumns])

  return <>
    <Table
      isCompact
      removeWrapper
      sortDescriptor={sortDescriptor}
      onSortChange={setSortDescriptor}
      topContentPlacement="outside"
      bottomContentPlacement="outside"
      bottomContent={
        <BottomContent
          hasSearchFilter={hasSearchFilter}
          pages={totalPages}
          page={currentPage}
          setPage={setPage}
        />
      }
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
      <TableBody
        emptyContent="No se encontraron cursos"
        items={filteredAndSortedItems}
        loadingContent={<Spinner />}
        isLoading={coursesQuery.isLoading}
      >
        {item => (
          <TableRow key={item.id}>
            {columnKey => <TableCell>
              <CourseTableCell
                course={item}
                columnKey={columnKey}
                onDeleteCourse={onDeleteCourse}
                onEditCourse={onEditCourse}
                onOpenCourse={onOpenCourse}
              />
            </TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    {
      !!editingCourse && <EditCourseDrawer
        courseData={editingCourse}
        isOpen={true}
        onClose={() => setEditingCourse(null)}
      />
    }
  </>
}
