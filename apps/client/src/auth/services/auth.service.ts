import { ApiResponse, User } from "@/shared/interfaces"
import { AuthResponse, SignUpRequest } from "../interfaces"

export async function userLogin(email: string, password: string) {

  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })

  const data = await response.json() as ApiResponse<AuthResponse>

  if (data.error) throw new Error(data.error)

  return data
}

export async function userSignup(user: SignUpRequest) {

  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })

  const data = await response.json() as ApiResponse<undefined>

  if (data.error) throw new Error(data.error)

  return data
}

export async function getUser(accessToken: string) {

  const response = await fetch("/api/auth/profile", {
    headers: { Authorization: `Bearer ${accessToken}` },
  })

  const { data } = await response.json() as ApiResponse<User>

  return data
}