import { axiosClient } from "@/api/axios.config"
import type { UpdateUserDto, User } from "@/shared/types/entities/User"

export async function updateUser(newUser: UpdateUserDto) {
  try {
    const response = await axiosClient.patch<User>("/api/users", newUser)
    return response.data
  } catch (error) {
    console.error("Error updating user", error)
    throw new Error("Error updating user")
  }
}

export async function assingPeriodToUser(periodId: number) {
  try {
    const response = await axiosClient.post("/api/user-periods", { periodId })
    return response.data
  } catch (error) {
    console.error("Error assigning period to user", error)
    throw new Error("Error assigning period to user")
  }
}