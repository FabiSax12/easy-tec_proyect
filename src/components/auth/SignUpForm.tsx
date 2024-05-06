"use client"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Button, Link } from "@nextui-org/react"
import { SignUpInputs } from "@/components"
import { InputsData } from "./interfaces"

interface Props {
  data: InputsData
  handleInputChange: (key: string, value: string) => void
  setSelected: Dispatch<SetStateAction<string | number>>
  setError: Dispatch<SetStateAction<string>>
}

function validateInputs(data: InputsData) {
  const { email, name, lastname, password } = data

  if (!email.endsWith("@estudiantec.cr")) {
    return "El correo debe ser @estudiantec.cr"
  }
  if (name.length < 2) {
    return "El nombre debe tener al menos 2 caracteres"
  }
  if (lastname.length < 1) {
    return "El Apellido debe tener al menos 1 caracter"
  }
  if (password.length < 8) {
    return "La contraseña debe tener al menos 8 caracteres"
  }
  return null
}

export const SignUpForm = ({ data, handleInputChange, setSelected, setError }: Props) => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setError("")
  }, [])

  const handleSubmit = async () => {
    const validationError = validateInputs(data)

    if (validationError) {
      setError(validationError)
      return
    }

    setError("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json"
        }
      })

      const responseData = await response.json()
      setIsLoading(false)

      if (response.ok) {
        setSelected("login")
      } else {
        setError(responseData.error || "Error de servidor")
      }
    } catch (error) {
      setError("Error de red al enviar la solicitud")
      setIsLoading(false)
    }
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
        <Button fullWidth color="primary" isLoading={isLoading} onPress={handleSubmit}>
          Sign up
        </Button>
      </div>
    </form>
  )
}
