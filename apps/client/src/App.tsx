import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import { DashboadLayout, AuthLayout } from "@/layouts"
import { DashboardPage, AuthPage } from "@/pages"
import "./App.css"

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

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
