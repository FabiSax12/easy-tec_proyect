import { useAuthStore } from "@/auth/store"
import { SignUpInputs } from "@/auth/components"
import { validateInputs } from "@/auth/utils"
import { Button, Link } from "@nextui-org/react"

import type { Dispatch, SetStateAction } from "react"
import type { AuthMode, FormData } from "@/auth/components"

interface Props {
  data: FormData
  handleInputChange: (key: keyof FormData, value: string) => void
  setSelected: Dispatch<SetStateAction<AuthMode>>
  setError: Dispatch<SetStateAction<string>>
}

export const SignUpForm = ({ data, handleInputChange, setSelected, setError }: Props) => {
  const { signup } = useAuthStore()

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