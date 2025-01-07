import type { Period } from "@/shared/types/entities/Period"

export async function periodsByUserId(userId: number | undefined) {
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
