import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { useAuthStore } from "@/modules/auth/store/auth.store"
import { SignUpInputs } from "@/modules/auth/components"
import { validateInputs } from "@/modules/auth/utils/validate-inputs"
import { requestVerificationEmail } from "../services/auth.service"
import { Button, Link } from "@nextui-org/react"

import type { AuthMode, FormData } from "@/modules/auth/components"

interface Props {
  setSelected: (selected: AuthMode) => void
}

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
        await requestVerificationEmail(createdUser.email).then((res) => {
          if (res.ok) {
            toast.success("Email de verificación enviado")
            navigate("/auth/created-account")
          } else {
            toast.error("Error al enviar email de verificación", {
              action: {
                label: "Reintentar",
                onClick: () => requestVerificationEmail(createdUser.email),
              },
            })
          }
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