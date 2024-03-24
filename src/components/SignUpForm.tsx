import { Dispatch, SetStateAction, useState } from 'react';
import { NextPage } from 'next'
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

const SignUpForm: NextPage<Props> = ({data, handleInputChange, setSelected, setError}) => {
  const [isLoading, setIsLoading] = useState(false)

  const onSignUp = async () => {
    setError("")
    setIsLoading(true)
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    })

    const resJSON = await res.json()

    setIsLoading(false)

    if (resJSON.error) {
      setError(resJSON.error)
    }
  }
  
  return <form className="flex flex-col gap-4 h-[300px]">
    <Input
      isRequired
      label="Correo"
      placeholder="usuario@estudiantec.cr"
      type="email"
      value={data.email}
      onValueChange={(value) => handleInputChange('email', value)}
    />
    <Input
      isRequired
      label="Nombre"
      placeholder="Tu nombre"
      value={data.name}
      onValueChange={(value) => handleInputChange('name', value)}
    />
    <Input
      isRequired
      label="Apellido"
      placeholder="Tu apellido"
      value={data.lastname}
      onValueChange={(value) => handleInputChange('lastname', value)}
    />
    <Input
      isRequired
      label="Password"
      placeholder="********"
      type="password"
      value={data.password}
      onValueChange={(value) => handleInputChange('password', value)}
    />
    <p className="text-center text-small">
      Already have an account?{" "}
      <Link size="sm" onPress={() => setSelected("login")}>
        Login
      </Link>
    </p>
    <div className="flex gap-2 justify-end">
      <Button fullWidth color="primary" onPress={onSignUp} isLoading={isLoading}>
        Sign up
      </Button>
    </div>
  </form>
}

export default SignUpForm