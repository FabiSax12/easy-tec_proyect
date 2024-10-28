import { Input } from "@nextui-org/react"
import { FormData, InputProps } from "./types"

interface Props {
  data: FormData
  handleInputChange: (key: keyof FormData, value: string) => void
}

const inputs: InputProps[] = [
  { label: "Correo", placeholder: "Ingrese su correo", type: "email", value: "email" },
  { label: "Contraseña", placeholder: "********", type: "password", value: "password" }
]

export const SignInInputs = ({ data, handleInputChange }: Props) => {
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