import { Suspense } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { Sidebar } from "@/shared/components/sidebar"
import { Header } from "@/shared/components/header"
import { Spinner } from "@heroui/react"

export function DashboadLayout() {
  const location = useLocation()

  if (location.pathname === "/dashboard") return <Navigate to="/dashboard/overview" replace />

  return <div className="flex relative">
    <Sidebar />
    <main className="w-full max-w-full min-h-full max-h-full mr-4 my-4 px-4 py-4 bg-default-200 rounded-xl overflow-auto">
      <Header />
      <div className="pt-4">
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </div>
    </main >
  </div >
}