import { useEffect } from "react"
import { useNavigate, Outlet } from "react-router-dom"
import { useAuthStore } from "@/modules/auth/store/auth.store"

export const AuthLayout = () => {
  const { user } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) navigate("/dashboard")
  }, [user, navigate])

  return <main className="w-screen h-screen flex flex-col gap-3 justify-evenly items-center">
    <Outlet />
  </main>
}