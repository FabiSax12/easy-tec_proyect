import { toast } from "sonner"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CourseFormFields } from "./CourseFormFields"
import {
  Modal, ModalContent, ModalHeader,
  ModalBody, ModalFooter, Button,
} from "@nextui-org/react"

import { Course, CreateCourseDto } from "@/domain/entities/Course"
import { createCourseService } from "@/application/services/CourseService"
import { courseApiRepository } from "@/infraestructure/api/CourseApiRepository"
import { useAuthStore } from "@/application/stores"

const courseService = createCourseService(courseApiRepository)

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

export const AddCourseModal = ({ isOpen, onOpenChange }: Props) => {
  const { user } = useAuthStore()
  const queryClient = useQueryClient()

  const courseMutation = useMutation<Course, Error, { data: CreateCourseDto }>({
    mutationKey: ["addedCourse"],
    mutationFn: ({ data }) => courseService.createCourse(data),
    onSuccess: () => {
      toast.success("Curso añadido correctamente")
      queryClient.invalidateQueries({ queryKey: ["courses"] })
    },
    onError: () => {
      toast.error("Error al añadir el curso")
    },
  })

  const onAccept = async (courseData: Course) => {
    if (!user) return
    await courseMutation.mutateAsync({ data: courseData })
    onOpenChange()
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="opaque">
      <ModalContent>
        <ModalHeader>Añadir nuevo curso</ModalHeader>
        <ModalBody>
          <CourseFormFields onSubmit={onAccept} />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="flat" onPress={onOpenChange}>
            Cancelar
          </Button>
          <Button color="primary" isDisabled={courseMutation.isPending} type="submit" form="course-form">
            {courseMutation.isPending ? "Añadiendo..." : "Añadir"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
