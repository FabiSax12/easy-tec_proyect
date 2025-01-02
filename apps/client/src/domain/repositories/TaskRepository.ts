import { CreateTaskDto, Task, UpdateTaskDto } from "../entities/Task"

export interface TaskRepository {
  getTasks(): Promise<Task[]>
  getTaskById(id: number): Promise<Task>
  getByUserId(userId: number): Promise<Task[]>
  createTask(task: CreateTaskDto): Promise<Task>
  updateTask(taskId: number, task: UpdateTaskDto): Promise<Task>
  deleteTask(taskId: number): Promise<Task>
}