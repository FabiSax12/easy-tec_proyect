import type { Period } from "@/shared/types/entities/Period"

export async function getPeriodsByUserId(userId: number | undefined) {
  if (!userId) throw new Error("User is undefined")

  const response = await fetch(`/api/periods?userId=${userId}`)
  const data = await response.json() as Period[]

  const adaptedData = data.map((period: Period) => ({
    ...period,
    startDate: new Date(period.startDate),
    endDate: new Date(period.endDate),
  }))

  return adaptedData
}

export async function periodById(periodId: number) {
  const response = await fetch(`/api/periods/${periodId}`)
  return response.json()
}

export async function createPeriod(period: Period) {
  const response = await fetch("/api/periods", {
    method: "POST",
    body: JSON.stringify(period),
  })
  return response.json()
}

export async function getPeriods() {
  const response = await fetch("/api/periods")

  if (!response.ok) {
    throw new Error("Error fetching periods")
  }

  return (await response.json()) as Period[]
}

export async function deleteUserPeriod(userId: number, periodId: number) {
  const response = await fetch("/api/user-periods", {
    method: "DELETE",
    body: JSON.stringify({
      userId,
      periodId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })

  if (!response.ok) {
    throw new Error("Error deleting period")
  }

  return response.json()
}