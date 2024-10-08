import { Outlet } from "react-router-dom"
import { Sidebar } from "@/components/sidebar"

export function DashboadLayout() {
  return <div className="flex">
    <Sidebar />
    <main className="w-full h-full max-h-screen p-4 lg:px-8 overflow-y-scroll">
      <Outlet />
    </main>
  </div>
}