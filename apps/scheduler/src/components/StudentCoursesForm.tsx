import { FormEvent } from "react"
import { Form, Input, Button } from "@easy-tec/ui"
import { IoSearchOutline } from "react-icons/io5"

interface StudentCoursesFormProps {
  onSubmit: (studentId: string) => void;
  isLoading: boolean;
}

export const StudentCoursesForm: React.FC<StudentCoursesFormProps> = ({ onSubmit, isLoading }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.currentTarget))
    localStorage.setItem("studentId", formData.studentId as string)
    onSubmit(formData.studentId as string)
  }

  return (
    <Form onSubmit={handleSubmit} className="flex gap-2 flex-row mb-10" validationBehavior="native">
      <Input
        id="input-student-id"
        fullWidth={false}
        name="studentId"
        label="Carnet"
        labelPlacement="outside-left"
        defaultValue={localStorage.getItem("studentId") || ""}
        variant="bordered"
        isRequired
        errorMessage="Introduce un carnet válido"
        minLength={10}
      />
      <Button
        id="btn-search-student"
        isIconOnly
        startContent={!isLoading ? <IoSearchOutline /> : null}
        type="submit"
        color="primary"
        // isDisabled={isLoading}
        isLoading={isLoading}
      />
    </Form>
  )
}
