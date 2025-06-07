import { GroupedCourse } from "@/interfaces/courses-schedule";
import { ScheduleGroupCard } from "./ScheduleGroupCard";

interface Props {
  courseData: GroupedCourse;
}

export const CourseGroupCarousel = ({ courseData }: Props) => {
  return (
    <div className="mb-6"> {/* Espacio debajo de cada bloque de curso */}
      {/* Encabezado del Curso */}
      <div className="px-2 mb-3">
        <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
          {courseData.code} - {courseData.subject}
        </h2>
        <div className="flex items-center gap-4 text-xs text-neutral-600 dark:text-neutral-400 mt-1">
          <span>{courseData.credits} Créditos</span>
          <span> | </span>
          <span>{courseData.typeOfSubject}</span>
        </div>
      </div>

      {/* Contenedor del Carrusel Horizontal */}
      <div
        className="
          flex overflow-x-auto space-x-4 pb-4 pt-4 pl-4
          snap-x snap-mandatory
          scrollbar-thin scrollbar-thumb-neutral-400 scrollbar-track-transparent
          dark:scrollbar-thumb-neutral-600
        "
      >
        {courseData.groups.map((group) => (
          <ScheduleGroupCard key={group.id} groupSchedule={group} />
        ))}
        {/* Indicador visual si no hay grupos (poco probable si el curso está listado) */}
        {courseData.groups.length === 0 && (
          <div className="text-sm text-neutral-500 italic w-full text-center py-4">
            No hay grupos disponibles para este curso.
          </div>
        )}
      </div>
    </div>
  );
};
