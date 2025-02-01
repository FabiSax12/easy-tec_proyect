import type { CreateTaskDto, TaskWithCourseName, UpdateTaskDto } from "@/shared/types/entities/Task"

function taskAdapter(task: TaskWithCourseName): TaskWithCourseName {
  return {
    ...task,
    date: new Date(task.date),
  }
}

export async function deleteTask(taskId: number) {
  const res = await fetch(`/api/tasks/${taskId}`, {
    method: "DELETE"
  })
  return taskAdapter(await res.json())
}

export async function createTask(task: CreateTaskDto) {
  const res = await fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(task)
  })
  return taskAdapter(await res.json())
}

export async function updateTask(taskId: number, data: UpdateTaskDto) {
  const res = await fetch(`/api/tasks/${taskId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if (!res.ok) {
    const errorData = await res.json()
    throw new Error(errorData?.message || `Error ${res.status}: ${res.statusText}`)
  }

  return taskAdapter(await res.json())
}

export async function getTasksByPeriodId(userId: number, periodId: number | string) {
  const res = await fetch(`/api/tasks?userId=${userId}&period=${periodId}`)

  if (!res.ok) {
    const errorData = await res.json()
    throw new Error(errorData?.message || `Error ${res.status}: ${res.statusText}`)
  }

  return (await res.json()).map(taskAdapter)
}