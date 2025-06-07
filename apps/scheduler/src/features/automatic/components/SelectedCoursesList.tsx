import React from 'react';
import { Autocomplete, AutocompleteItem, Button } from '@easy-tec/ui';
import { IoTrashBin, IoAdd } from 'react-icons/io5';
import { EnhancedCourseSelection, CourseNameAndCode } from '../types/auto-schedule-types';
import { CampusGroupSelector } from './CampusGroupSelector';

interface SelectedCoursesListProps {
  isLoading: boolean;
  availableCourses: CourseNameAndCode[];
  selectedCourses: EnhancedCourseSelection[];
  campusOptions: Array<{ key: string; label: string }>;
  modalityOptions: Array<{ key: string; label: string }>;
  onAddCourse: () => void;
  onUpdateCourseCode: (index: number, code: string) => void;
  onRemoveCourse: (index: number) => void;
  onAddCampusGroup: (courseIndex: number) => void;
  onUpdateCampusGroup: (courseIndex: number, groupId: string, field: 'campuses' | 'typeOfGroups', values: string[]) => void;
  onRemoveCampusGroup: (courseIndex: number, groupId: string) => void;
}

export const SelectedCoursesList: React.FC<SelectedCoursesListProps> = ({
  isLoading,
  availableCourses,
  selectedCourses,
  campusOptions,
  modalityOptions,
  onAddCourse,
  onUpdateCourseCode,
  onRemoveCourse,
  onAddCampusGroup,
  onUpdateCampusGroup,
  onRemoveCampusGroup,
}) => {

  console.log(selectedCourses)

  return (
    <div id="container-selected-courses" className="flex flex-col gap-6 w-full">
      {selectedCourses.map((course, courseIndex) => (
        <div key={courseIndex} className="p-4">
          {/* Header del curso */}
          <div className="flex gap-3 mb-4">
            <Button
              startContent={<IoTrashBin />}
              onPress={() => onRemoveCourse(courseIndex)}
              color="danger"
              size="sm"
              isIconOnly
              aria-label={`Eliminar curso ${courseIndex + 1}`}
            />

            <Autocomplete
              isRequired
              id={`autocomplete-course-${courseIndex}`}
              placeholder="Seleccionar Curso"
              size="sm"
              selectedKey={course.code}
              onSelectionChange={(value) => onUpdateCourseCode(courseIndex, value?.toString() || "")}
              isLoading={isLoading}
              className="flex-1"
              listboxProps={{
                emptyContent: "Primero busca con tu carnet"
              }}
              validate={(value) => {
                if (!value || value === "") return "Selecciona un curso";
              }}
            >
              {availableCourses.map((availableCourse) => (
                <AutocompleteItem key={availableCourse.code}>
                  {availableCourse.name}
                </AutocompleteItem>
              ))}
            </Autocomplete>
          </div>

          {/* Configuraciones de campus */}
          {course.code && (
            <div className="space-y-3">
              <h4 className="text-sm font-medium mb-2">
                Configuraciones de Campus y Modalidad:
              </h4>

              {course.campusGroups.map((group) => (
                <CampusGroupSelector
                  key={group.id}
                  courseIndex={courseIndex}
                  group={group}
                  campusOptions={campusOptions}
                  modalityOptions={modalityOptions}
                  onUpdateGroup={onUpdateCampusGroup}
                  onRemoveGroup={onRemoveCampusGroup}
                />
              ))}

              <Button
                startContent={<IoAdd />}
                onPress={() => onAddCampusGroup(courseIndex)}
                size="sm"
                variant="bordered"
                className="w-full"
                isDisabled={!course.code}
              >
                Agregar Configuración de Campus
              </Button>
            </div>
          )}

          {/* Preview de combinaciones */}
          {/* {course.campusGroups.length > 0 && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm font-medium text-blue-800 mb-2">
                Vista previa de combinaciones:
              </p>
              <div className="text-xs text-blue-600 space-y-1">
                {course.campusGroups.map((group, groupIndex) => (
                  <div key={group.id}>
                    <strong>Grupo {groupIndex + 1}:</strong> {' '}
                    {group.campuses.join(', ')} / {group.typeOfGroups.join(', ')}
                  </div>
                ))}
              </div>
            </div>
          )} */}
        </div>
      ))}

      <Button
        id="btn-add-course"
        onPress={onAddCourse}
        size="sm"
        variant="bordered"
        startContent={<IoAdd />}
        className="w-full"
      >
        Agregar Curso
      </Button>
    </div>
  );
};