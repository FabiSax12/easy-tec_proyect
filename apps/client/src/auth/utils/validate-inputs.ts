import { FormData } from "@/auth/interfaces"

export function validateInputs(data: FormData) {
  const { email, name, lastname, password } = data

  if (!email.endsWith("@estudiantec.cr")) {
    return "El correo debe ser @estudiantec.cr"
  }
  if (name.length < 2) {
    return "El nombre debe tener al menos 2 caracteres"
  }
  if (lastname.length < 1) {
    return "El Apellido debe tener al menos 1 caracter"
  }
  if (password.length < 8) {
    return "La contraseña debe tener al menos 8 caracteres"
  }
  return null
}