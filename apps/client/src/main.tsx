import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import { DashboadLayout, AuthLayout } from "@/layouts"
import { DashboardPage, AuthPage } from "@/pages"
import { NextUIProvider } from "@nextui-org/react"
import "./index.css"
import { AuthProvider } from "./context/auth"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/principal/dashboard" />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <AuthPage />,
      }
    ]
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
      },
      {
        path: "",
        element: <Navigate to="/principal/dashboard" />,
      }
    ]
  }
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <NextUIProvider>
        <RouterProvider router={router} />
      </NextUIProvider>
    </AuthProvider>
  </StrictMode>,
)
