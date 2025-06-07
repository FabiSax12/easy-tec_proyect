import { ScrollShadow } from "@easy-tec/ui";
import { ScheduleRow } from "@/interfaces/courses-schedule";
import { EmptyState } from "@/components/EmptyState";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { CourseGroupCarousel } from "@/features/manual/components/CourseGroupCarousel";
import { useGroupedSchedules } from "@/features/manual/hooks/useGroupedSchedules";
import { usePagination } from "@/features/manual/hooks/usePagination";
import { ScheduleControls } from "@/features/manual/components/ScheduleControls";

interface Props {
  schedules: ScheduleRow[];
  isLoading: boolean;
}

const COURSES_PER_PAGE = 5;

export const GroupedSchedulesView = ({ schedules, isLoading }: Props) => {
  const {
    groupedCourses,
    filteredCourses,
    page,
    setPage,
    handleSearch,
  } = useGroupedSchedules(schedules);

  const { currentItems: currentCourses, totalPages } = usePagination({
    items: filteredCourses,
    page,
    itemsPerPage: COURSES_PER_PAGE,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const hasSchedules = schedules.length > 0;
  const hasGroupedCourses = groupedCourses.length > 0;

  return (
    <div className="flex flex-col h-full">
      <ScheduleControls
        onSearch={handleSearch}
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
        hasSchedules={hasSchedules}
      />

      {!hasGroupedCourses ? (
        <EmptyState />
      ) : (
        <ScrollShadow size={50} offset={0} className="flex-1">
          <div className="space-y-4 p-4">
            {currentCourses.map((course) => (
              <CourseGroupCarousel
                key={course.code}
                courseData={course}
              />
            ))}
          </div>
        </ScrollShadow>
      )}
    </div>
  );
};