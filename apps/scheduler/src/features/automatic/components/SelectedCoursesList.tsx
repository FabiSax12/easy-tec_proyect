import React from "react"
import { Autocomplete, AutocompleteItem, Button, Select, SelectItem } from "@easy-tec/ui"
import { IoTrashBin } from "react-icons/io5"
import { CourseNameAndCode } from "@/interfaces/courses-schedule.ts"
import { campusOptions } from "@/features/manual/data/schedule-options"

export interface Campus {
  name: string;
  typeOfGroup: string;
}

export interface SelectedCourse {
  code: string;
  campus: Campus[];
}

interface SelectedCoursesListProps {
  isLoading: boolean;
  availableCourses: CourseNameAndCode[];
  selectedCourses: SelectedCourse[];
  onAddCourse: () => void;
  onUpdateCourseCode: (index: number, code: string) => void;
  onRemoveCourse: (index: number) => void;
  onAddCampus: (courseIndex: number) => void;
  onUpdateCampus: (courseIndex: number, campusIndex: number, field: "name" | "typeOfGroup", value: string) => void;
  onRemoveCampus: (courseIndex: number, campusIndex: number) => void;
}

const courseModalitiesOptions = [
  { name: "Regular", value: "Regular" },
  { name: "Semipresencial", value: "Semipresencial" },
  { name: "Virtual", value: "Virtual" }
]

export const SelectedCoursesList: React.FC<SelectedCoursesListProps> = ({
  isLoading,
  availableCourses,
  selectedCourses,
  onAddCourse,
  onUpdateCourseCode,
  onRemoveCourse,
  onAddCampus,
  onUpdateCampus,
  onRemoveCampus,
}) => {
  return (
    <div id="container-selected-courses" className="flex flex-col gap-12 md:gap4 w-full">
      {selectedCourses.map((course, courseIndex) => (
        <div key={courseIndex} className="grid grid-cols-1 md:grid-cols-2 items-start gap-6">
          <div className="flex gap-6">
            <Button
              startContent={<IoTrashBin />}
              onPress={() => onRemoveCourse(courseIndex)}
              color="danger"
              size="sm"
              isIconOnly
            />
            <Autocomplete
              isRequired
              id={`autocomplete-course-${courseIndex}`}
              placeholder="Seleccionar Curso"
              size="sm"
              selectedKey={course.code}
              onSelectionChange={(value) => onUpdateCourseCode(courseIndex, value?.toString() || "")}
              isLoading={isLoading}
              className="flex-grow"
              listboxProps={{
                emptyContent: "Primero busca con tu carnet"
              }}
              validate={(value) => {
                if (!value || value === "") return "Selecciona un curso"
              }}
            >
              {availableCourses.map((course) => (
                <AutocompleteItem key={course.code}>
                  {course.name}
                </AutocompleteItem>
              ))}
            </Autocomplete>
          </div>
          <div className="w-full">
            {course.campus.map((campus, campusIndex) => (
              <div key={campusIndex} className="flex flex-row md:flex-row gap-2 mb-4">
                <Select
                  id={`select-campus-${courseIndex}-${campusIndex}`}
                  isRequired
                  placeholder="Campus"
                  size="sm"
                  selectedKeys={[campus.name]}
                  onChange={(e) => onUpdateCampus(courseIndex, campusIndex, "name", e.target.value)}
                  className="md:flex-1"
                >
                  {campusOptions.map((option) => (
                    <SelectItem key={option.fullName}>
                      {option.name}
                    </SelectItem>
                  ))}
                </Select>
                <Select
                  id={`select-type-of-group-${courseIndex}-${campusIndex}`}
                  isRequired
                  placeholder="Tipo de grupo"
                  size="sm"
                  selectedKeys={[campus.typeOfGroup]}
                  onChange={(e) => onUpdateCampus(courseIndex, campusIndex, "typeOfGroup", e.target.value)}
                  className="md:flex-1"
                >
                  {
                    courseModalitiesOptions.map(modalitie => (
                      <SelectItem key={modalitie.value}>
                        {modalitie.name}
                      </SelectItem>
                    ))
                  }
                </Select>
                <Button
                  startContent={<IoTrashBin />}
                  size="sm"
                  color="danger"
                  isIconOnly
                  onPress={() => onRemoveCampus(courseIndex, campusIndex)}
                  className="self-end md:self-center"
                />
              </div>
            ))}
            <Button
              id={`button-add-campus-${courseIndex}`}
              fullWidth
              isDisabled={!course.code || course.code === "" || course.campus.some(c => c.name === "" || c.typeOfGroup === "")}
              onPress={() => onAddCampus(courseIndex)}
              size="sm"
              variant="bordered"
            >
              Añadir Sede
            </Button>
          </div>
        </div>
      ))}
      <Button id="btn-add-course" onPress={onAddCourse} size="sm" variant="bordered">
        Añadir Curso
      </Button>
    </div>
  )
}
