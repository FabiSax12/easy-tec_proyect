import { Outlet } from "react-router-dom"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header/Header"

export function DashboadLayout() {
  return <div className="flex flex-col">
    <Header />
    <div className="flex">
      <Sidebar />
      <main className="w-full min-h-full max-h-screen px-4 lg:px-8 overflow-y-scroll">
        <Outlet />
      </main>
    </div>
  </div>
}