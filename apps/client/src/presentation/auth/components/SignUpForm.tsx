import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { useAuthStore } from "@/application/stores"
import { SignUpInputs } from "@/presentation/auth/components"
import { validateInputs } from "@/presentation/auth/utils"
import { Button, Link } from "@nextui-org/react"

import type { AuthMode, FormData } from "@/presentation/auth/components"
import { createAuthService } from "@/application/services/AuthService"
import { authApiRepository } from "@/infraestructure/api/AuthApiRepository"

interface Props {
  setSelected: (selected: AuthMode) => void
}

const authService = createAuthService(authApiRepository)

const initialData: FormData = {
  email: "",
  password: "",
  name: "",
  lastname: "",
}

export const SignUpForm = ({ setSelected }: Props) => {
  const { signup } = useAuthStore()
  const navigate = useNavigate()
  const [data, setData] = useState<FormData>(initialData)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (key: keyof FormData, value: string) => {
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }))
  }

  const handleSubmit = async () => {
    const validationError = validateInputs(data)
    if (validationError) return toast.error(validationError)

    setIsLoading(true)

    toast.promise(signup(data), {
      loading: "Creando cuenta...",
      success: async (createdUser) => {
        await authService.requestVerificationEmail(createdUser.email)
          .then(() => {
            toast.success("Email de verificación enviado")
            navigate("/auth/created-account")
          })
          .catch(() => {
            toast.error("Error al enviar email de verificación", {
              action: {
                label: "Reintentar",
                onClick: () => authService.requestVerificationEmail(createdUser.email),
              },
            })
          })
        return "Cuenta creada correctamente"
      },
      error: "Error al crear cuenta",
      finally: () => {
        setIsLoading(false)
      }
    })
  }

  return (
    <form className="flex flex-col gap-4">
      <SignUpInputs data={data} handleInputChange={handleChange} />
      <p className="text-center text-small">
        ¿Ya tienes una cuenta?{" "}
        <Link className="cursor-pointer" onPress={() => setSelected("login")}>
          Login
        </Link>
      </p>
      <Button fullWidth color="primary" isLoading={isLoading} onPress={handleSubmit}>
        Sign up
      </Button>
    </form>
  )
}