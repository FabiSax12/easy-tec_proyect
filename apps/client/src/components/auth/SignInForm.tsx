import { type Dispatch, type SetStateAction, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { SignInInputs } from "@/components/auth"
import { Button, Link } from "@nextui-org/react"
import { useAuth } from "@/hooks/useAuth"

interface Props {
  data: {
    email: string;
    password: string;
  };
  handleInputChange: (key: string, value: string) => void;
  setSelected: Dispatch<SetStateAction<string | number>>;
  setError: Dispatch<SetStateAction<string>>;
}

export const SignInForm = ({ data, handleInputChange, setSelected, setError }: Props) => {
  const navigate = useNavigate()
  const { login, status } = useAuth()

  useEffect(() => {
    if (status === "authenticated") navigate("/principal")
    if (status === "error") setError("Error al iniciar sesión")
  }, [status, navigate, setError])

  const handleSubmit = async () => {
    setError("")
    login(data)
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