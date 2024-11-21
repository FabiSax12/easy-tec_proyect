import type { User } from "@/shared/interfaces"
import type { AuthResponse, SignUpRequest } from "../interfaces"

export async function userLogin(email: string, password: string) {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })

  const data = await response.json() as AuthResponse

  return data
}

export async function userSignup(user: SignUpRequest) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })

  if (!response.ok) throw new Error("Failed to sign up")

  const data = await response.json() as User

  return data
}

export async function getUser(accessToken: string) {
  const response = await fetch("/api/auth/profile", {
    headers: { Authorization: `Bearer ${accessToken}` },
  })

  const data = await response.json() as User

  return data
}