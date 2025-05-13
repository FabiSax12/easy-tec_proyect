import { useAuthStore } from "@/modules/auth/store/auth.store"
import axios from "axios"

export const axiosClient = axios.create()

axiosClient.interceptors.request.use((config) => {
  const { accessToken } = useAuthStore.getState()

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

let isRefreshing = false
axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { logout, refreshAccessToken } = useAuthStore.getState()

    if (error.response?.status === 401) {
      const originalRequest = error.config

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          const interval = setInterval(() => {
            if (!isRefreshing) {
              clearInterval(interval)
              originalRequest.headers.Authorization = `Bearer ${useAuthStore.getState().accessToken}`
              return axiosClient(originalRequest).then(resolve).catch(reject)
            }
          }, 100)
        })
      }

      try {
        isRefreshing = true
        const newAccessToken = await refreshAccessToken()
        console.log("Refreshing access token")

        if (newAccessToken) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
          return axiosClient(originalRequest)
        } else {
          logout()
        }
      } catch (refreshError) {
        console.error("Error refreshing access token", refreshError)
        logout()
      } finally {
        isRefreshing = false
      }
    }

    return Promise.reject(error)
  }
)


export const handleAxiosError = (error: unknown): never => {
  if (axios.isAxiosError(error) && error.response) {
    const status = error.response.status
    const message = error.response.data?.message || error.message

    console.error(`Error ${status}: ${message}`)
    throw new Error(message)
  }

  console.error("Unexpected error:", error)
  throw new Error("Unexpected error occurred")
}