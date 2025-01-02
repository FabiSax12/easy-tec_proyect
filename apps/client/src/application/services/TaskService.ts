import { CreateTaskDto, Task, UpdateTaskDto } from "@/domain/entities/Task"
import { TaskRepository } from "@/domain/repositories/TaskRepository"

export const createTaskService = (taskRepository: TaskRepository) => ({
  async createTask(taskData: CreateTaskDto): Promise<Task> {
    const response = await taskRepository.createTask(taskData)

    // if (!response.ok) {
    //   throw new Error("Error al crear la tarea")
    // }

    return response
  },

  async getTasks(): Promise<Task[]> {
    const response = await taskRepository.getTasks()

    // if (!response.ok) {
    //   throw new Error("Error al obtener las tareas")
    // }

    return response
  },

  async getTaskById(taskId: number): Promise<Task> {
    const response = await taskRepository.getTaskById(taskId)

    // if (!response.ok) {
    //   throw new Error("Error al obtener la tarea")
    // }

    return response
  },

  async updateTask(taskId: number, updates: UpdateTaskDto): Promise<Task> {
    const response = await taskRepository.updateTask(taskId, updates)

    // if (!response.ok) {
    //   throw new Error("Error al actualizar la tarea")
    // }

    return response
  },

  async deleteTask(taskId: number): Promise<Task> {
    const response = await taskRepository.deleteTask(taskId)

    // if (!response.ok) {
    //   throw new Error("Error al eliminar la tarea")
    // }

    return response
  }
})
