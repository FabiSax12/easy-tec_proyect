import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "@/auth/store/auth.store"
import { SignInInputs } from "@/auth/components"
import { Button, Link } from "@nextui-org/react"

import type { Dispatch, SetStateAction } from "react"
import type { AuthMode, FormData } from "@/auth/components"

interface Props {
  data: FormData;
  handleInputChange: (key: keyof FormData, value: string) => void;
  setSelected: Dispatch<SetStateAction<AuthMode>>;
  setError: Dispatch<SetStateAction<string>>;
}

export const SignInForm = ({ data, handleInputChange, setSelected, setError }: Props) => {
  const navigate = useNavigate()
  const { accessToken, login } = useAuthStore()

  useEffect(() => {
    if (accessToken) navigate("/principal")
  }, [accessToken, navigate, setError])

  const handleSubmit = async () => {
    setError("")
    login(data.email, data.password).then(() => {
      if (!accessToken) setError("Error al iniciar sesión")
    })
  }

  return (
    <form className="flex flex-col gap-4">
      <SignInInputs data={data} handleInputChange={handleInputChange} />
      <p className="text-center text-small">
        ¿No tienes una cuenta?{" "}
        <Link className="cursor-pointer" onPress={() => setSelected("sign-up")}>
          Sign up
        </Link>
      </p>
      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary" onPress={handleSubmit} isLoading={status === "loading"}>
          Login
        </Button>
      </div>
    </form>
  )
}