import React from "react"
import { Button, Select, SelectItem } from "@heroui/react"
import { IoTrashBin } from "react-icons/io5"
import { CourseNameAndCode } from "@/interfaces/courses-schedule.ts"
import { campusOptions } from "@/data/schedule-options"

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
    <div className="flex flex-col gap-2 w-full">
      {selectedCourses.map((course, courseIndex) => (
        <div key={courseIndex} className="grid grid-cols-2 items-start gap-6">
          <div className="flex gap-6">
            <Button
              startContent={<IoTrashBin />}
              onPress={() => onRemoveCourse(courseIndex)}
              color="danger"
              size="sm"
              isIconOnly
            />
            <Select
              placeholder="Select Course"
              size="sm"
              selectedKeys={[course.code]}
              onChange={(e) => onUpdateCourseCode(courseIndex, e.target.value)}
              isLoading={isLoading}
            >
              {availableCourses.map((course) => (
                <SelectItem key={course.code} value={course.code}>
                  {course.name}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="w-full">
            {course.campus.map((campus, campusIndex) => (
              <div key={campusIndex} className="flex gap-2 mb-4">
                <Select
                  placeholder="Campus"
                  size="sm"
                  selectedKeys={[campus.name]}
                  onChange={(e) => onUpdateCampus(courseIndex, campusIndex, "name", e.target.value)}
                >
                  {campusOptions.map((option) => (
                    <SelectItem key={option.fullName} value={option.fullName}>
                      {option.name}
                    </SelectItem>
                  ))}
                </Select>
                <Select
                  placeholder="Tipo de grupo"
                  size="sm"
                  selectedKeys={[campus.typeOfGroup]}
                  onChange={(e) => onUpdateCampus(courseIndex, campusIndex, "typeOfGroup", e.target.value)}
                >
                  <SelectItem key="Regular" value="Regular">
                    Regular
                  </SelectItem>
                  <SelectItem key="Semipresencial" value="Semipresencial">
                    Semipresencial
                  </SelectItem>
                  <SelectItem key="Virtual" value="Virtual">
                    Virtual
                  </SelectItem>
                </Select>
                <Button
                  startContent={<IoTrashBin />}
                  size="sm"
                  color="danger"
                  isIconOnly
                  onPress={() => onRemoveCampus(courseIndex, campusIndex)}
                />
              </div>
            ))}
            <Button onPress={() => onAddCampus(courseIndex)} fullWidth size="sm" variant="bordered">
              Añadir Sede
            </Button>
          </div>
        </div>
      ))}
      <Button onPress={onAddCourse} size="sm" variant="bordered">
        Añadir Curso
      </Button>
    </div>
  )
}
