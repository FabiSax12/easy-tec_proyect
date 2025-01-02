import apiClient from "@/config/apiClient"
import { AuthRepository } from "@/domain/repositories/AuthRepository"
import { ErrorHandler } from "@/application/utils/ErrorHandler"

export const authApiRepository: AuthRepository = {
  async register(user) {
    try {
      const response = await apiClient.post("/auth/signup", user)
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  },

  async login(email, password) {
    try {
      const response = await apiClient.post("/auth/login", { email, password })
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  },

  async getUser(accessToken) {
    try {
      const response = await apiClient.get("/auth/profile", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  },

  async requestVerificationEmail(email) {
    try {
      await apiClient.post("/auth/request-verification-email", { email })
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  }
})