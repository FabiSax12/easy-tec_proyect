import { useState, useMemo } from "react"

interface UsePaginationProps {
  totalItems: number;
  initialPage?: number;
  initialRowsPerPage?: number;
}

interface UsePaginationReturn {
  currentPage: number;
  rowsPerPage: number;
  totalPages: number;
  paginatedItems: <T>(items: T[]) => T[];
  setPage: (page: number) => void;
  setRowsPerPage: (rows: number) => void;
}

export function usePagination({
  totalItems,
  initialPage = 1,
  initialRowsPerPage = 10,
}: UsePaginationProps): UsePaginationReturn {
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage)

  const totalPages = useMemo(
    () => Math.ceil(totalItems / rowsPerPage),
    [totalItems, rowsPerPage]
  )

  const paginatedItems = <T,>(items: T[]): T[] => {
    const start = (currentPage - 1) * rowsPerPage
    const end = start + rowsPerPage
    return items.slice(start, end)
  }

  const setPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return {
    currentPage,
    rowsPerPage,
    totalPages,
    paginatedItems,
    setPage,
    setRowsPerPage,
  }
}
