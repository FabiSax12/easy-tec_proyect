import { Input } from "@nextui-org/react"

interface Props {
  formData: { email: string, password: string }
  handleInputChange: (key: "email" | "password", value: string) => void
}

export const SignInInputs = ({ formData, handleInputChange }: Props) => {

  return (
    <>
      <Input
        isRequired
        label="Correo"
        placeholder="Ingrese su correo"
        type="email"
        value={formData.email}
        onValueChange={(currentValue: string) => handleInputChange("email", currentValue)}
        autoComplete="email"
      />
      <Input
        isRequired
        label="Contraseña"
        placeholder="********"
        type="password"
        value={formData.password}
        onValueChange={(currentValue: string) => handleInputChange("password", currentValue)}
        autoComplete="current-password"
      />
    </>
  )
}