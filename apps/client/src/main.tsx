import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import { DashboadLayout } from "@/layouts"
import { DashboardPage } from "@/pages"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/principal/dashboard" />,
  },
  {
    path: "/principal",
    element: <DashboadLayout />,
    children: [
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "calendario",
      },
      {
        path: "horario",
      },
      {
        path: "config",
      }
    ]
  }
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
