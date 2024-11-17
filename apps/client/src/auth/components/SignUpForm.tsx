import type { Dispatch, SetStateAction } from "react"
import { useAuth } from "@/shared/hooks"
import { SignUpInputs } from "@/auth/components"
import type { AuthMode, FormData } from "@/auth/components"
import { Button, Link } from "@nextui-org/react"

interface Props {
  data: FormData
  handleInputChange: (key: keyof FormData, value: string) => void
  setSelected: Dispatch<SetStateAction<AuthMode>>
  setError: Dispatch<SetStateAction<string>>
}

function validateInputs(data: FormData) {
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

export const SignUpForm = ({ data, handleInputChange, setSelected, setError }: Props) => {
  const { signup } = useAuth()

  // useEffect(() => {
  //   if (status === "authenticated") setSelected("login")
  //   if (status === "error") setError("Error al crear la cuenta")
  // }, [status, setSelected, setError])

  const handleSubmit = async () => {
    const validationError = validateInputs(data)
    if (validationError) return setError(validationError)
    setError("")
    signup(data)
    setSelected("login")
  }

  return (
    <form className="flex flex-col gap-4">
      <SignUpInputs data={data} handleInputChange={handleInputChange} />
      <p className="text-center text-small">
        ¿Ya tienes una cuenta?{" "}
        <Link className="cursor-pointer" onPress={() => setSelected("login")}>
          Login
        </Link>
      </p>
      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary" isLoading={status === "loading"} onPress={handleSubmit}>
          Sign up
        </Button>
      </div>
    </form>
  )
}