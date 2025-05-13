import { useState } from "react"
import { useNavigate } from "react-router"
import { toast } from "sonner"
import { useAuthStore } from "@/modules/auth/store/auth.store"
import { SignInInputs } from "@/modules/auth/components"
import { Button, Link } from "@easy-tec/ui"

import type { AuthMode } from "@/modules/auth/components"
import { requestVerificationEmail } from "../services/auth.service"

interface Props {
  setSelected: (selected: AuthMode) => void;
}

const initialData = {
  email: "",
  password: ""
}

export const SignInForm = ({ setSelected }: Props) => {
  const navigate = useNavigate()
  const { login, } = useAuthStore()

  const [formData, setFormData] = useState(initialData)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (key: keyof typeof formData, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value
    }))
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    toast.promise(login(formData.email, formData.password), {
      loading: "Iniciando sesión...",
      success: () => {
        navigate("/dashboard")
        return "Sesión iniciada correctamente. Bienvenido/a "
      },
      error: (error) => error.message,
      finally: () => setIsLoading(false)
    })
  }

  const handleRequestVerificationEmail = () => {

    if (!formData.email) return toast.error("Debes ingresar un correo")

    toast.promise(requestVerificationEmail(formData.email), {
      loading: "Enviando email de verificación...",
      success: "Email de verificación enviado",
      error: "Error al enviar email de verificación",
    })
  }

  return (
    <form className="flex flex-col gap-4">
      <SignInInputs formData={formData} handleInputChange={handleInputChange} />
      <p className="text-center text-small">
        ¿No tienes una cuenta?{" "}
        <Link className="cursor-pointer" onPress={() => setSelected("sign-up")}>
          Sign up
        </Link>
      </p>
      <p className="text-center text-small">
        <Link className="cursor-pointer" onPress={handleRequestVerificationEmail}>
          Reenviar email de confirmación
        </Link>
      </p>
      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary" onPress={handleSubmit} isLoading={isLoading}>
          Login
        </Button>
      </div>
    </form >
  )
}