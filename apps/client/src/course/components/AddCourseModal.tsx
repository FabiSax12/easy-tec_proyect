import { toast } from "sonner"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createUserCourse } from "@/course/services/courses.service"
import { useAuthStore } from "@/auth/store"
import { CourseFormFields } from "./CourseFormFields"
import {
  Modal, ModalContent, ModalHeader,
  ModalBody, ModalFooter, Button,
} from "@nextui-org/react"

import type { Course } from "@/shared/interfaces"

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

export const AddCourseModal = ({ isOpen, onOpenChange }: Props) => {
  const { user } = useAuthStore()
  const queryClient = useQueryClient()

  const courseMutation = useMutation<Course, Error, { data: Omit<Course, "id"> }>({
    mutationKey: ["addedCourse"],
    mutationFn: ({ data }) => createUserCourse(data),
    onSuccess: () => {
      toast.success("Curso añadido correctamente")
      queryClient.invalidateQueries({ queryKey: ["courses"] })
    },
    onError: () => {
      toast.error("Error al añadir el curso")
    }
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
