import { FormEvent } from "react";
import { Form, Input, Button } from "@heroui/react";
import { IoSearchOutline } from "react-icons/io5";

interface StudentCoursesFormProps {
  onSubmit: (studentId: string) => void;
  isLoading: boolean;
}

export const StudentCoursesForm: React.FC<StudentCoursesFormProps> = ({ onSubmit, isLoading }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    onSubmit(formData.studentId as string);
  };

  return (
    <Form onSubmit={handleSubmit} className="flex flex-row mb-10" validationBehavior="native">
      <Input
        name="studentId"
        label="Carnet"
        labelPlacement="outside-left"
        variant="bordered"
        isRequired
        errorMessage="Introduce un carnet válido"
        minLength={10}
      />
      <Button
        isIconOnly
        startContent={!isLoading ? <IoSearchOutline /> : null}
        type="submit"
        color="primary"
        // isDisabled={isLoading}
        isLoading={isLoading}
      />
    </Form>
  );
};
