import { CreateTaskDto, UpdateTaskDto } from "@/shared/types/entities/Task"

export async function deleteTask(taskId: number) {
  const res = await fetch(`/api/tasks/${taskId}`, {
    method: "DELETE"
  })
  return await res.json()
}

export async function createTask(task: CreateTaskDto) {
  const res = await fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(task)
  })
  return await res.json()
}

export async function updateTask(taskId: number, data: UpdateTaskDto) {
  const res = await fetch(`/api/tasks/${taskId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  return await res.json()
}