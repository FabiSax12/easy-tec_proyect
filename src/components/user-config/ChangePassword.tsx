"use client"
import { useRef, useState } from "react"
import { Input, Button } from "@nextui-org/react"
import { SectionCard } from "@/components"
import { changePassword } from "@/actions"
import { toast } from "sonner"

const inputs = [
  { label: "Contraseña actual", name: "currentPassword" },
  { label: "Contraseña nueva", name: "newPassword" },
  { label: "Repetir contraseña", name: "repeatPassword" }
]

interface Props {
  userId: number;
}

export const ChangePassword = ({ userId }: Props) => {
  const formRef = useRef<HTMLFormElement>(null)
  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    repeatPassword: false
  })

  const formSubmit = async (formData: FormData) => {

    toast.promise(changePassword(userId, formData), {
      loading: "Cambiando contraseña...",
      success: "Contraseña cambiada exitosamente",
      error: (err) => err.message
    })
  }

  return (
    <SectionCard title="Cambiar contraseña" className="text-nowrap flex flex-col gap-4 justify-between">
      <form ref={formRef} action={formSubmit} className="flex flex-col gap-4 max-w-xs">
        {inputs.map(({ label, name }) => (
          <Input
            key={name}
            isRequired
            autoComplete={name === "currentPassword" ? "current-password" : "new-password"}
            type={showPassword[name as keyof showPassword] ? "text" : "password"}
            variant="bordered"
            placeholder="********"
            labelPlacement="outside"
            label={label}
            name={name}
          />
        ))}
      </form>
      <div className="flex gap-2 justify-end">
        <Button
          color="danger"
          size="sm"
          onClick={() => formRef.current?.reset()}
        >
          Cancelar
        </Button>
        <Button
          isDisabled={!formRef.current?.checkValidity()}
          color="primary"
          size="sm"
          onClick={() => formRef.current?.requestSubmit()}
        >
          Guardar Cambios
        </Button>
      </div>
    </SectionCard>
  )
}
