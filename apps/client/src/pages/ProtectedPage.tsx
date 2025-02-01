import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "@/modules/auth/store/auth.store"

export const ProtectedPage = () => {
  const { accessToken } = useAuthStore()

  if (accessToken) return <Outlet />
  else return <Navigate to="/auth" replace />
}