import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import { DashboadLayout, AuthLayout } from "@/layouts"
import { AuthPage, DashboardPage, NotFound, Period, ProtectedPage, SchedulesPage } from "@/pages"
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/principal/dashboard" replace />,
    errorElement: <NotFound />,
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
    element: <ProtectedPage />,
    children: [
      {
        path: "",
        element: <DashboadLayout />,
        children: [
          {
            path: "dashboard",
            element: <DashboardPage />,
          },
          {
            path: "periodo/:id",
            element: <Period />
          },
          {
            path: "calendario",
          },
          {
            path: "horario",
            element: <SchedulesPage />
          },
          {
            path: "cursos",
          },
          {
            path: "guias"
          },
          {
            path: "config",
          },
          {
            path: "*",
            element: <Navigate to="/principal/dashboard" />,
          }
        ]
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
