import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
  return <main className="w-screen h-screen flex flex-col gap-3 justify-evenly items-center">
    <Outlet />
  </main>
}