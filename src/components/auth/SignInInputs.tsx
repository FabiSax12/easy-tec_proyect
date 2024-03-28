import { Input } from "@nextui-org/react"
import { InputProps, InputsData } from "./interfaces"

interface Props {
  data: Omit<InputsData, "name" | "lastname">
  handleInputChange: (key: string, value: string) => void
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