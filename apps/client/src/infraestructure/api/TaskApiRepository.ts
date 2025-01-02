import { ErrorHandler } from "@/application/utils/ErrorHandler"
import apiClient from "@/config/apiClient"
import { TaskRepository } from "@/domain/repositories/TaskRepository"

export const taskApiRepository: TaskRepository = {
  async createTask(task) {
    try {
      const response = await apiClient.post("/tasks", task)
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  },

  async getTasks() {
    try {
      const response = await apiClient.get("/tasks")
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  },

  async getTaskById(taskId) {
    try {
      const response = await apiClient.get(`/tasks/${taskId}`)
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  },

  async getByUserId(userId) {
    try {
      const response = await apiClient.get(`/tasks?userId=${userId}`)
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  },

  async updateTask(taskId, updates) {
    try {
      const response = await apiClient.put(`/tasks/${taskId}`, updates)
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  },

  async deleteTask(taskId) {
    try {
      const response = await apiClient.delete(`/tasks/${taskId}`)
      return response.data
    } catch (error) {
      ErrorHandler.handleAxiosError(error)
    }
  }
}