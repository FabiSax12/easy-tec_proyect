import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { useAuthStore } from "@/auth/store/auth.store"
import { SignInInputs } from "@/auth/components"
import { Button, Link } from "@nextui-org/react"

import type { AuthMode } from "@/auth/components"

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
        navigate("/principal")
        return "Sesión iniciada correctamente. Bienvenido/a "
      },
      error: (error) => error.message,
      finally: () => setIsLoading(false)
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
      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary" onPress={handleSubmit} isLoading={isLoading}>
          Login
        </Button>
      </div>
    </form>
  )
}