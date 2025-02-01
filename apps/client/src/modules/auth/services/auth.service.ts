import type { User, CreateUserDto } from "@/shared/types/entities/User"

export async function userLogin(email: string, password: string) {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })

    if (response.status === 401) throw new Error("El usuario no existe o no se ha verificado")

    if (!response.ok) throw new Error("Error al iniciar sesión")

    const data = await response.json()

    return data
  } catch (error) {
    console.error("Error al iniciar sesión", error)
    throw error
  }
}

export async function userSignup(user: CreateUserDto) {
  try {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })

    if (!response.ok) throw new Error("Failed to sign up")

    const data = await response.json() as User

    return data
  } catch (error) {
    console.error("Failed to sign up", error)
    throw new Error("Failed to sign up")
  }
}

export async function getUser(accessToken: string) {
  try {
    const response = await fetch("/api/auth/profile", {
      headers: { Authorization: `Bearer ${accessToken}` },
    })

    if (!response.ok) throw new Error("Failed to get user")

    const data = await response.json() as User

    return data
  } catch (error) {
    console.error("Failed to get user", error)
    throw new Error("Failed to get user")
  }
}

export const requestVerificationEmail = (email: string) => fetch("/api/auth/request-verification-email", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ email }),
})