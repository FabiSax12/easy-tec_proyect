import axios from "axios"

const apiClient = axios.create({
  baseURL: process.env.API_URL || "/api",
  headers: {
    "Content-Type": "application/json",
  },
})

apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem("token")

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

apiClient.interceptors.response.use(
  response => response
)

export default apiClient