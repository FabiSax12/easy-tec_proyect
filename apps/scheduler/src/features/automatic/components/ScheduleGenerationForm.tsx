import { Form, Button } from "@easy-tec/ui";
import { SelectedCoursesList } from "@/features/automatic/components/SelectedCoursesList";
import { CourseNameAndCode, SelectedCourse } from "../types/auto-schedule-types";
import { ErrorDisplay } from "@/components/ErrorDisplay";

interface ScheduleGenerationFormProps {
  isLoading: boolean;
  isGenerating: boolean;
  availableCourses: CourseNameAndCode[];
  selectedCourses: SelectedCourse[];
  errors: string[];
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  onAddCourse: () => void;
  onUpdateCourseCode: (index: number, code: string) => void;
  onRemoveCourse: (courseIndex: number) => void;
  onAddCampus: (courseIndex: number) => void;
  onUpdateCampus: (courseIndex: number, campusIndex: number, field: "name" | "typeOfGroup", value: string) => void;
  onRemoveCampus: (courseIndex: number, campusIndex: number) => void;
}

export const ScheduleGenerationForm = ({
  isLoading,
  isGenerating,
  availableCourses,
  selectedCourses,
  errors,
  onSubmit,
  onAddCourse,
  onUpdateCourseCode,
  onRemoveCourse,
  onAddCampus,
  onUpdateCampus,
  onRemoveCampus,
}: ScheduleGenerationFormProps) => {
  return (
    <Form onSubmit={onSubmit} validationBehavior="native" className="space-y-4">
      <SelectedCoursesList
        isLoading={isLoading}
        availableCourses={availableCourses}
        selectedCourses={selectedCourses}
        onAddCourse={onAddCourse}
        onUpdateCourseCode={onUpdateCourseCode}
        onRemoveCourse={onRemoveCourse}
        onAddCampus={onAddCampus}
        onUpdateCampus={onUpdateCampus}
        onRemoveCampus={onRemoveCampus}
      />

      <Button
        id="btn-generate-schedules"
        isLoading={isGenerating}
        color="success"
        variant="flat"
        type="submit"
        fullWidth
        isDisabled={isLoading || selectedCourses.length === 0}
      >
        {isGenerating ? "Generando..." : "Generar horarios"}
      </Button>

      <ErrorDisplay errors={errors} />
    </Form>
  );
};