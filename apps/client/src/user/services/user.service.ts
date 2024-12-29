import { User } from "@/shared/interfaces"

export async function updateUser(newUser: Partial<User>) {
  const response = await fetch("/api/user", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(newUser)
  })

  if (!response.ok) {
    throw new Error("Error updating user")
  }


}