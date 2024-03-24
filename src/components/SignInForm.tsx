import { Dispatch, SetStateAction, useState } from 'react';
import { NextPage } from 'next'
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Button, Input, Link } from '@nextui-org/react'

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

  const onSignIn = async () => {
    setError("")
    setIsLoading(true)
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false
    })

    setIsLoading(false)

    res?.error ? setError(res.error) : router.push("/")
  }
  
  return <form className="flex flex-col gap-4">
    <Input
      isRequired 
      label="Correo" 
      placeholder="Ingrese su correo" 
      type="email"
      value={data.email}
      onValueChange={(value) => handleInputChange('email', value)}
    />
    <Input
      isRequired
      label="Contraseña"
      placeholder="********"
      type="password"
      value={data.password}
      onValueChange={(value) => handleInputChange('password', value)}
    />
    <p className="text-center text-small">
      Need to create an account?{" "}
      <Link size="sm" onPress={() => setSelected("sign-up")}>
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