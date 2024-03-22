import React, { useCallback, useMemo, useState } from "react";
import {User as Course, Selection, SortDescriptor} from "@nextui-org/react";
import { courses, statusOptions } from "@/ui/nextui/Table/data";

type Course = typeof courses[0];

const INITIAL_VISIBLE_COLUMNS = ["name", "credits", "semester", "state", "actions"];

export const useCourses = ({filter}: {filter?: { semester?: string, state?: string }}) => {
  const [filterValue, setFilterValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = useState<Selection>(
    filter?.state ? new Set(filter.state) : "all"
  );
  const [semesterFilter, setSemesterFilter] = useState<string | "all">(
    filter?.semester ? filter.semester : "all"
  );
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  });
  const [page, setPage] = useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = useMemo(() => {
    let filteredCourses = [...courses];

    if (hasSearchFilter) {
      filteredCourses = filteredCourses.filter((course) =>
        course.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredCourses = filteredCourses.filter((course) =>
        Array.from(statusFilter).includes(course.state)
      );
    }
    if (semesterFilter !== "all") {
      filteredCourses = filteredCourses.filter(
        (course) => semesterFilter == course.semester
      );
    }

    return filteredCourses;
  }, [courses, filterValue, statusFilter, semesterFilter]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const renderCell = useCallback((course: Course, columnKey: React.Key) => {
    // Lógica de renderizado de celdas aquí...
  }, []);

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const onSearchChange = useCallback(
    (value?: string) => {
      if (value) {
        setFilterValue(value);
        setPage(1);
      } else {
        setFilterValue("");
      }
    },
    []
  );

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  return {
    filterValue,
    setFilterValue,
    selectedKeys,
    setSelectedKeys,
    visibleColumns,
    setVisibleColumns,
    statusFilter,
    setStatusFilter,
    semesterFilter,
    setSemesterFilter,
    rowsPerPage,
    setRowsPerPage,
    sortDescriptor,
    setSortDescriptor,
    page,
    setPage,
    items,
    pages,
    onNextPage,
    onPreviousPage,
    onRowsPerPageChange,
    onSearchChange,
    onClear,
    renderCell,
  };
};
