import { Period } from "@/shared/interfaces"

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