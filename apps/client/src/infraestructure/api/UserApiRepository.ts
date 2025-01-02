import apiClient from "@/config/apiClient"
import { CreateUserDto, UpdateUserDto, User } from "@/domain/entities/User"
import { UserRepository } from "@/domain/repositories/UserRepository"
import { ErrorHandler } from "@/application/utils/ErrorHandler"

export const userApiRepository: UserRepository = {
  async getUsers(): Promise<User[]> {
    try {
      const response = await apiClient.get("/users")
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  },

  async getUserById(id: number): Promise<User> {
    try {
      const response = await apiClient.get(`/users/${id}`)
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  },

  async getUserByEmail(email: string): Promise<User> {
    try {
      const response = await apiClient.get(`/users/email/${email}`)
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  },

  async createUser(user: CreateUserDto): Promise<User> {
    try {
      const response = await apiClient.post("/users", user)
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  },

  async updateUser(userId: number, user: UpdateUserDto): Promise<User> {
    try {
      const response = await apiClient.patch(`/users/${userId}`, user)
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  },

  async deleteUser(id: number): Promise<User> {
    try {
      const response = await apiClient.delete(`/users/${id}`)
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  }
}