import type { FormData, InputProps } from "@/auth/components"
import { Input } from "@nextui-org/react"

interface Props {
  data: FormData
  handleInputChange: (key: keyof FormData, value: string) => void
}

const inputs: InputProps[] = [
  { label: "Correo", placeholder: "usuario@estudiantec.cr", type: "email", value: "email" },
  { label: "Nombre", placeholder: "Tu Nombre", type: "text", value: "name" },
  { label: "Apellido", placeholder: "Tu Apellido", type: "text", value: "lastname" },
  { label: "Contraseña", placeholder: "********", type: "password", value: "password" }
]

export const SignUpInputs = ({ data, handleInputChange }: Props) => {
  return <>
    {
      inputs.map(({ label, placeholder, type, value }: InputProps) => (
        <Input
          key={label}
          isRequired
          label={label}
          placeholder={placeholder}
          type={type}
          value={data[value]}
          onValueChange={(currentValue: string) => handleInputChange(value, currentValue)}
        />
      ))
    }
  </>
}