import { Dispatch, SetStateAction, useState } from "react"
import { NextPage } from "next"
import { Button, Input, Link } from "@nextui-org/react"

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
    
    console.log(resJSON)
    
    setIsLoading(false)

    if (resJSON.error) {
      setError(resJSON.error)
    }
  }
  
  return <form className="flex flex-col gap-4 h-[300px]" onSubmit={onSignUp}>
    <Input
      isRequired
      label="Correo"
      placeholder="usuario@estudiantec.cr"
      type="email"
      value={data.email}
      onValueChange={(value: string) => handleInputChange("email", value)}
    />
    <Input
      isRequired
      minLength={3}
      label="Nombre"
      placeholder="Tu nombre"
      value={data.name}
      onValueChange={(value: string) => handleInputChange("name", value)}
    />
    <Input
      isRequired
      minLength={3}
      label="Apellido"
      placeholder="Tu apellido"
      value={data.lastname}
      onValueChange={(value: string) => handleInputChange("lastname", value)}
    />
    <Input
      isRequired
      minLength={8}
      label="Password"
      placeholder="********"
      type="password"
      value={data.password}
      onValueChange={(value: string) => handleInputChange("password", value)}
    />
    <p className="text-center text-small">
      ¿Ya tienes una cuenta?{" "}
      <Link className="cursor-pointer" onPress={() => setSelected("login")}>
        Login
      </Link>
    </p>
    <div className="flex gap-2 justify-end">
      <Button fullWidth type="submit" color="primary" isLoading={isLoading}>
        Sign up
      </Button>
    </div>
  </form>
}

export default SignUpForm