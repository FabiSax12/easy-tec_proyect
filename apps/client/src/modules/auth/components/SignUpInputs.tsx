import type { FormData, InputProps } from "@/modules/auth/components"
import { PasswordInput } from "@/shared/components/PasswordInput"
import { Input } from "@nextui-org/react"

interface Props {
  data: FormData
  handleInputChange: (key: keyof FormData, value: string) => void
}

const inputs: InputProps[] = [
  { label: "Correo", placeholder: "usuario@estudiantec.cr", type: "email", value: "email", autoComplete: "email" },
  { label: "Nombre", placeholder: "Tu Nombre", type: "text", value: "name", autoComplete: "given-name" },
  { label: "Apellido", placeholder: "Tu Apellido", type: "text", value: "lastname", autoComplete: "family-name" },
]

export const SignUpInputs = ({ data, handleInputChange }: Props) => {
  return <>
    {
      inputs.map(({ label, placeholder, type, value, autoComplete }: InputProps) => (
        <Input
          key={label}
          isRequired
          label={label}
          placeholder={placeholder}
          type={type}
          value={data[value]}
          onValueChange={(currentValue: string) => handleInputChange(value, currentValue)}
          autoComplete={autoComplete}
        />
      ))
    }
    <PasswordInput
      isRequired
      label="Contraseña"
      placeholder="********"
      value={data.password}
      onValueChange={(currentValue: string) => handleInputChange("password", currentValue)}
      autoComplete="new-password"
    />
  </>
}