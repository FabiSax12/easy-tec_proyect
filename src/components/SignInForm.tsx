import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { NextPage } from "next"
import { useRouter } from "next/navigation"
import { signIn, useSession } from "next-auth/react"
import { Button, Input, Link } from "@nextui-org/react"
import useUserInfo from "@/store/user"

interface Props {
  data: {
    email: string;
    name: string;
    lastname: string;
    password: string;
  }
  handleInputChange: (key: string, value: string) => void
  setSelected: Dispatch<SetStateAction<string | number>>
  setError: Dispatch<SetStateAction<string>>
}

const SignInForm: NextPage<Props> = ({data, handleInputChange, setSelected, setError}) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const user = useUserInfo((state) => state)
  const {data: session, status} = useSession()

  useEffect(() => {
    setError("")
    if (status === "authenticated") {
      const {user: {email, id, lastname, name, token}} = session
      user.setUser({ id: parseInt(id), email, name, lastname })
      router.push("/principal")
      setIsLoading(false)
    }
  }, [status])

  const onSignIn = async () => {
    setError("")
    setIsLoading(true)
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false
    })
    
    if (res?.error) {
      setIsLoading(false)
      setError(res.error)
    }
  }
  
  return <form className="flex flex-col gap-4">
    <Input
      isRequired 
      label="Correo" 
      placeholder="Ingrese su correo" 
      type="email"
      value={data.email}
      onValueChange={(value: string) => handleInputChange("email", value)}
    />
    <Input
      isRequired
      label="Contraseña"
      placeholder="********"
      type="password"
      value={data.password}
      onValueChange={(value: string) => handleInputChange("password", value)}
    />
    <p className="text-center text-small">
      ¿No tienes una cuenta?{" "}
      <Link className="cursor-pointer" onPress={() => setSelected("sign-up")}>
        Sign up
      </Link>
    </p>
    <div className="flex gap-2 justify-end">
      <Button fullWidth color="primary" onPress={onSignIn} isLoading={isLoading}>
        Login
      </Button>
    </div>
  </form>
}

export default SignInForm