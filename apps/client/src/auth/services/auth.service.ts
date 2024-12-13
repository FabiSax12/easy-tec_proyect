import type { User } from "@/shared/interfaces"
import type { AuthResponse, SignUpRequest } from "../interfaces"

export async function userLogin(email: string, password: string) {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) throw new Error("Failed to login")

    const data = await response.json() as AuthResponse

    return data
  } catch (error) {
    console.error("Failed to login", error)
    throw new Error("Failed to login")
  }
}

export async function userSignup(user: SignUpRequest) {
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