// File to handle all the API calls

export const addAcademicPeriod = async (data: any, userId: string | null) => {
  try {
    const response = await fetch(`/api/academic-periods/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error("Failed to create academic period")
    }

    return await response.json()
  } catch (error) {
    console.error("Error creating academic period:", error)
    throw error
  }
}
