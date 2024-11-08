import { useAuth } from "@/hooks"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedPage = () => {
  const { accessToken } = useAuth()

  if (accessToken) return <Outlet />
  else return <Navigate to="/auth" replace />
}