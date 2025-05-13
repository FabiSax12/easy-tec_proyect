import { axiosClient } from "@/api/axios.config"
import type { Period } from "@/shared/types/entities/Period"

export async function getPeriodsByUserId(userId: number | undefined): Promise<Period[]> {
  if (!userId) throw new Error("User is undefined")

  try {
    const response = await axiosClient.get<Period[]>("/api/periods", {
      params: { filterByUser: true }
    })

    const adaptedData = response.data.map((period: Period) => ({
      ...period,
      startDate: new Date(period.startDate),
      endDate: new Date(period.endDate),
    }))

    return adaptedData
  } catch (error) {
    console.error("Error fetching periods by user ID", error)
    throw new Error("Error fetching periods by user ID")
  }
}

export async function periodById(periodId: number): Promise<Period> {
  try {
    const response = await axiosClient.get<Period>(`/api/periods/${periodId}`)
    return response.data
  } catch (error) {
    console.error("Error fetching period by ID", error)
    throw new Error("Error fetching period by ID")
  }
}

export async function createPeriod(period: Period): Promise<Period> {
  try {
    const response = await axiosClient.post<Period>("/api/periods", period)
    return response.data
  } catch (error) {
    console.error("Error creating period", error)
    throw new Error("Error creating period")
  }
}

export async function getPeriods(): Promise<Period[]> {
  try {
    const response = await axiosClient.get<Period[]>("/api/periods")
    return response.data
  } catch (error) {
    console.error("Error fetching periods", error)
    throw new Error("Error fetching periods")
  }
}

export async function deleteUserPeriod(periodId: number) {
  try {
    const res = await axiosClient.delete(`/api/user-periods/${periodId}`)
    return res.data as Period
  } catch (error) {
    console.error("Error deleting period", error)
    throw new Error("Error deleting period")
  }
}
