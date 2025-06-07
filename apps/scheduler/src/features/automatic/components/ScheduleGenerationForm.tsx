import { Form, Button } from "@easy-tec/ui";
import { SelectedCoursesList } from "@/features/automatic/components/SelectedCoursesList";
import { CourseNameAndCode, EnhancedCourseSelection, SelectedCourse } from "../types/auto-schedule-types";
import { ErrorDisplay } from "@/components/ErrorDisplay";
import { campusOptions } from "@/features/manual/data/schedule-options";




interface ScheduleGenerationFormProps {
  isLoading: boolean;
  isGenerating: boolean;
  availableCourses: CourseNameAndCode[];
  selectedCourses: EnhancedCourseSelection[];
  errors: string[];
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  onAddCourse: () => void;
  onUpdateCourseCode: (index: number, code: string) => void;
  onRemoveCourse: (courseIndex: number) => void;
  onAddCampus: (courseIndex: number) => void;
  onUpdateCampus: (courseIndex: number, groupId: string, field: 'campuses' | 'typeOfGroups', values: string[]) => void;
  onRemoveCampus: (courseIndex: number, groupId: string) => void;
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
        campusOptions={campusOptions.map(c => ({ key: c.fullName, label: c.name }))}
        modalityOptions={[
          { key: "Virtual", label: "Virtual" },
          { key: "Regular", label: "Regular" },
          { key: "Semipresencial", label: "Semipresencial" },
        ]}
        isLoading={isLoading}
        availableCourses={availableCourses}
        selectedCourses={selectedCourses}
        onAddCourse={onAddCourse}
        onUpdateCourseCode={onUpdateCourseCode}
        onRemoveCourse={onRemoveCourse}
        onAddCampusGroup={onAddCampus}
        onUpdateCampusGroup={onUpdateCampus}
        onRemoveCampusGroup={onRemoveCampus}
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