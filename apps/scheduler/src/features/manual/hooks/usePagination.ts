import { useMemo } from "react";

interface UsePaginationProps<T> {
  items: T[];
  page: number;
  itemsPerPage: number;
}

export const usePagination = <T,>({
  items,
  page,
  itemsPerPage
}: UsePaginationProps<T>) => {
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  }, [items, page, itemsPerPage]);

  return {
    currentItems,
    totalPages,
    totalItems: items.length,
  };
};