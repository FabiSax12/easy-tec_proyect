export async function periodsByUserId(userId: number | undefined) {
  if (!userId) throw new Error("User is undefined")

  const response = await fetch(`/api/periods?userId=${userId}`)
  return response.json()
}