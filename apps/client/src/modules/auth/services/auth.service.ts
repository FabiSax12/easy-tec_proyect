import axios from "axios"
import { CreateUserDto, User } from "@/shared/types/entities/User"
import { axiosClient, handleAxiosError } from "@/api/axios.config"

export async function userLogin(email: string, password: string) {
  try {
    const response = await axiosClient.post("/api/auth/login", { email, password })
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      throw new Error("El usuario no existe o no se ha verificado")
    }
    handleAxiosError(error)
  }
}

export async function userSignup(user: CreateUserDto) {
  try {
    const response = await axiosClient.post("/api/auth/signup", user)
    return response.data as User
  } catch (error) {
    return handleAxiosError(error)
  }
}

export async function getUser() {
  try {
    const response = await axiosClient.get<User>("/api/auth/profile")
    return response.data
  } catch (error) {
    handleAxiosError(error)
  }
}

export const requestVerificationEmail = async (email: string): Promise<void> => {
  try {
    await axiosClient.post<void>("/api/auth/request-verification-email", { email })
  } catch (error) {
    handleAxiosError(error)
  }
}

export const getNewAccessToken = async () => {
  try {
    const response = await axiosClient.post("/api/auth/refresh", {}, { withCredentials: true })
    return response.data.access_token
  } catch (error) {
    handleAxiosError(error)
  }
}

export const getUserProfile = async () => {
  try {
    const response = await axiosClient.get<User>("/api/auth/profile")
    return response.data
  } catch (error) {
    handleAxiosError(error)
  }
}