import { useMemo, useState } from "react";
import { ScheduleRow } from "@/interfaces/courses-schedule";
import { CourseGroupCarousel, GroupedCourse } from "./CourseGroupCarousel";
import { Spinner, Pagination, ScrollShadow } from "@easy-tec/ui";

interface Props {
  schedules: ScheduleRow[];
  isLoading: boolean;
}

// Función para agrupar los schedules por código de curso
const groupSchedulesByCourse = (schedules: ScheduleRow[]): GroupedCourse[] => {
  if (!schedules || schedules.length === 0) {
    return [];
  }

  const grouped = schedules.reduce((acc, schedule) => {
    if (!acc[schedule.code]) {
      acc[schedule.code] = {
        code: schedule.code,
        subject: schedule.subject,
        credits: schedule.credits,
        typeOfSubject: schedule.typeOfSubject,
        groups: [],
      };
    }
    acc[schedule.code].groups.push(schedule);
    acc[schedule.code].groups.sort((a, b) => a.group - b.group);
    return acc;
  }, {} as Record<string, GroupedCourse>);

  // Convertir el objeto agrupado en un array y ordenarlo por código
  return Object.values(grouped).sort((a, b) => a.code.localeCompare(b.code));
};

export const GroupedSchedulesView = ({ schedules, isLoading }: Props) => {
  // Agrupar los datos usando useMemo para eficiencia
  const groupedCourses = useMemo(
    () => groupSchedulesByCourse(schedules),
    [schedules]
  );

  const [page, setPage] = useState(1);
  const coursesPerPage = 5;
  const totalCourses = groupedCourses.length;
  const totalPages = Math.ceil(totalCourses / coursesPerPage);

  const currentCourses = useMemo(() => {
    const start = (page - 1) * coursesPerPage;
    const end = start + coursesPerPage;
    return groupedCourses.slice(start, end);
  }, [page, groupedCourses, coursesPerPage]);

  // --- Renderizado ---
  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8 min-h-[200px]">
        <Spinner label="Buscando horarios..." />
      </div>
    );
  }

  if (totalCourses === 0) {
    return (
      <div className="text-center p-8 text-neutral-500 dark:text-neutral-400 min-h-[200px]">
        No hay horarios disponibles que coincidan con tu búsqueda.
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">

      {/* Paginación de Cursos */}
      {totalPages > 1 && (
        <div className="sticky top-0 z-10 flex w-full justify-center py-4">
          <Pagination
            isCompact
            showControls
            showShadow
            color="primary"
            page={page}
            total={totalPages}
            onChange={(newPage) => setPage(newPage)}
          />
        </div>
      )}

      {/* Carruseles con Sombra de Scroll */}
      <ScrollShadow size={50} offset={0}>
        {currentCourses.map((course) => (
          <CourseGroupCarousel key={course.code} courseData={course} />
        ))}
      </ScrollShadow>
    </div>

  );
};
