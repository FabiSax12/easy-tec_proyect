import { Card, CardBody } from "@easy-tec/ui";
import { StudentCoursesForm } from "@/features/automatic/components/StudentCoursesForm";
import { ScheduleGenerationForm } from "./ScheduleGenerationForm";
import { CourseNameAndCode, SelectedCourse } from "../types/auto-schedule-types";

interface StudentCoursesPanelProps {
  isLoading: boolean;
  isGenerating: boolean;
  availableCourses: CourseNameAndCode[];
  selectedCourses: SelectedCourse[];
  errors: string[];
  onFetchStudentCourses: (studentId: string) => Promise<void>;
  onGenerateSchedules: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  onAddCourse: () => void;
  onUpdateCourseCode: (index: number, code: string) => void;
  onRemoveCourse: (courseIndex: number) => void;
  onAddCampus: (courseIndex: number) => void;
  onUpdateCampus: (courseIndex: number, campusIndex: number, field: "name" | "typeOfGroup", value: string) => void;
  onRemoveCampus: (courseIndex: number, campusIndex: number) => void;
}

export const StudentCoursesPanel = ({
  isLoading,
  isGenerating,
  availableCourses,
  selectedCourses,
  errors,
  onFetchStudentCourses,
  onGenerateSchedules,
  onAddCourse,
  onUpdateCourseCode,
  onRemoveCourse,
  onAddCampus,
  onUpdateCampus,
  onRemoveCampus,
}: StudentCoursesPanelProps) => {
  return (
    <Card className="col-span-1">
      <CardBody className="flex flex-col flex-wrap gap-4">
        <StudentCoursesForm
          onSubmit={onFetchStudentCourses}
          isLoading={isLoading}
        />

        <ScheduleGenerationForm
          isLoading={isLoading}
          isGenerating={isGenerating}
          availableCourses={availableCourses}
          selectedCourses={selectedCourses}
          errors={errors}
          onSubmit={onGenerateSchedules}
          onAddCourse={onAddCourse}
          onUpdateCourseCode={onUpdateCourseCode}
          onRemoveCourse={onRemoveCourse}
          onAddCampus={onAddCampus}
          onUpdateCampus={onUpdateCampus}
          onRemoveCampus={onRemoveCampus}
        />
      </CardBody>
    </Card>
  );
};