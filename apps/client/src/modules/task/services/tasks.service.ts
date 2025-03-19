import axios from "axios"
import { axiosClient } from "@/api/axios.config"
import type { CreateTaskDto, TaskWithCourseName, UpdateTaskDto } from "@/shared/types/entities/Task"

function taskAdapter(task: TaskWithCourseName): TaskWithCourseName {
  return {
    ...task,
    date: new Date(task.date),
  }
}

export async function deleteTask(taskId: number): Promise<TaskWithCourseName> {
  try {
    const response = await axiosClient.delete<TaskWithCourseName>(`/api/tasks/${taskId}`)
    return taskAdapter(response.data)
  } catch (error) {
    console.error("Error deleting task", error)
    throw new Error("Error deleting task")
  }
}

export async function createTask(task: CreateTaskDto): Promise<TaskWithCourseName> {
  try {
    const response = await axiosClient.post<TaskWithCourseName>("/api/tasks", task)
    return taskAdapter(response.data)
  } catch (error) {
    console.error("Error creating task", error)
    throw new Error("Error creating task")
  }
}

export async function updateTask(taskId: number, data: UpdateTaskDto): Promise<TaskWithCourseName> {
  try {
    const response = await axiosClient.patch<TaskWithCourseName>(`/api/tasks/${taskId}`, data)
    return taskAdapter(response.data)
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data?.message) {
      throw new Error(error.response.data.message)
    }
    console.error("Error updating task", error)
    throw new Error(`Error updating task: ${error}`)
  }
}

export async function getTasksByPeriodId(periodId: number | string): Promise<TaskWithCourseName[]> {
  try {
    const response = await axiosClient.get<TaskWithCourseName[]>("/api/tasks", {
      params: { filterByUser: true, periodId: periodId },
    })
    return response.data.map(taskAdapter)
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data?.message) {
      throw new Error(error.response.data.message)
    }
    console.error("Error fetching tasks by period", error)
    throw new Error("Error fetching tasks by period")
  }
}

export async function getTasksByPeriodCode(periodCode: string): Promise<TaskWithCourseName[]> {
  try {
    const response = await axiosClient.get<TaskWithCourseName[]>("/api/tasks", {
      params: { filterByUser: true, periodCode },
    })
    return response.data.map(taskAdapter)
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data?.message) {
      throw new Error(error.response.data.message)
    }
    console.error("Error fetching tasks by period code", error)
    throw new Error("Error fetching tasks by period code")
  }
}