import { useAuthStore } from "@/auth/store"
import { useEffect } from "react"
import { useNavigate, Outlet } from "react-router-dom"

export const AuthLayout = () => {
  const { accessToken } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (accessToken) navigate("/principal")
  }, [accessToken, navigate])

  return <main className="w-screen h-screen flex flex-col gap-3 justify-evenly items-center">
    <Outlet />
  </main>
}