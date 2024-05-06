"use client"
import { type Dispatch, type SetStateAction, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { signIn, useSession } from "next-auth/react"
import { SignInInputs } from "@/components"
import { Button, Link } from "@nextui-org/react"
import useUserInfo from "@/store/user"

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
  // Hooks
  const router = useRouter()
  const user = useUserInfo((state) => state)
  const { data: session, status } = useSession()

  // State
  const [isLoading, setIsLoading] = useState(false)

  // Effects
  useEffect(() => {
    handleAuthenticatedUser()
  }, [status])

  // Functions
  const handleAuthenticatedUser = () => {
    if (status === "authenticated") {
      const { user: { email, id, lastname, name } } = session
      user.setUser({ id: parseInt(id), email, name, lastname })
      router.push("/principal")
      setIsLoading(false)
    }
  }

  const handleSubmit = async () => {
    setError("")
    setIsLoading(true)
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false
    })

    if (res?.error) {
      setIsLoading(false)
      setError("Credenciales Incorrectas")
    }
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
        <Button fullWidth color="primary" onPress={handleSubmit} isLoading={isLoading}>
          Login
        </Button>
      </div>
    </form>
  )
}
