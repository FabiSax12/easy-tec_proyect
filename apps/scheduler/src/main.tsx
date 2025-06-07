import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router"
import { SchedulesPage } from "./pages/SchedulesPage"
import { AutoSchedulesPage } from "./pages/AutoSchedulesPage"
import { MainLayout } from "./layouts/MainLayout"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Navigate to={"/manual"} replace />,
      },
      {
        path: "/manual",
        Component: SchedulesPage
      },
      {
        path: "/auto",
        Component: AutoSchedulesPage
      },
      {
        path: "*",
        element: <Navigate to="/manual" replace />
      }
    ]
  }
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
