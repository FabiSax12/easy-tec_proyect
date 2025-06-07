import { Pagination } from "@easy-tec/ui";

interface CoursePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const CoursePagination = ({
  currentPage,
  totalPages,
  onPageChange
}: CoursePaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <Pagination
      isCompact
      showControls
      showShadow
      color="primary"
      page={currentPage}
      total={totalPages}
      onChange={onPageChange}
    />
  );
};