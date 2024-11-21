import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "@/auth/store"

export const ProtectedPage = () => {
  const { accessToken } = useAuthStore()

  if (accessToken) return <Outlet />
  else return <Navigate to="/auth" replace />
}