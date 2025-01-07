import { useOptimisticUpdate } from "@/shared/hooks"
import { updateCourse } from "../services/courses.service"
import { CourseFormFields } from "./CourseFormFields"
import {
  Button, Drawer, DrawerBody, DrawerContent,
  DrawerFooter, DrawerHeader
} from "@nextui-org/react"

import type { Course } from "@/shared/types/entities/Course"

interface Props {
  isOpen: boolean;
  onClose: () => void;
  courseData: Course;
}

export const EditCourseDrawer = ({ isOpen, onClose, courseData }: Props) => {

  const { mutate: updateCourseMutation } = useOptimisticUpdate<Course>({
    queryKey: ["courses"],
    mutationFn: (data) => updateCourse(courseData.id, data)
  })

  const onSubmit = (data: Course) => {
    updateCourseMutation(data)
    onClose()
  }

  return <Drawer isOpen={isOpen} onOpenChange={onClose}>
    <DrawerContent>
      <DrawerHeader>Editando {courseData.name}</DrawerHeader>
      <DrawerBody>
        <CourseFormFields courseData={courseData} onSubmit={onSubmit} />
      </DrawerBody>
      <DrawerFooter>
        <Button color="danger" variant="light" onPress={onClose}>
          Cancelar
        </Button>
        <Button color="primary" type="submit" form="course-form">
          Actualizar
        </Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer >
}