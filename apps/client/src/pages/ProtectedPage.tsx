import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "@/shared/hooks"

export const ProtectedPage = () => {
  const { accessToken } = useAuth()

  if (accessToken) return <Outlet />
  else return <Navigate to="/auth" replace />
}