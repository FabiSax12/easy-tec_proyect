import { CoursePagination } from "./CoursePagination";
import { Input } from "@easy-tec/ui";

interface ScheduleControlsProps {
  onSearch: (value: string) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  hasSchedules: boolean;
}

export const ScheduleControls = ({
  onSearch,
  currentPage,
  totalPages,
  onPageChange,
  hasSchedules,
}: ScheduleControlsProps) => {
  if (!hasSchedules) return null;

  return (
    <div className="sticky top-0 z-10 flex flex-col w-full items-center gap-y-3 py-4 px-8">
      <Input
        placeholder='Buscar curso por nombre o código...'
        onChange={(e) => onSearch(e.target.value)}
        className="w-full"
      />
      <CoursePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};