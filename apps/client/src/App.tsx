import { Routes, Route, Navigate } from "react-router-dom"
import { DashboadLayout, AuthLayout } from "@/layouts"
import { AuthPage, DashboardPage, NotFound, Period, ProtectedPage, SchedulesPage, GuidesPage } from "@/pages"
import "./App.css"

function App() {
  return <Routes>
    <Route path="/" element={<Navigate to="/principal/dashboard" replace />} />
    <Route path="*" element={<NotFound />} />

    <Route path="/auth" element={<AuthLayout />}>
      <Route path="" element={<AuthPage />} />
    </Route>

    <Route path="/principal" element={<ProtectedPage />}>
      <Route path="" element={<DashboadLayout />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="periodo/:id" element={<Period />} />
        <Route path="calendario" />
        <Route path="horario" element={<SchedulesPage />} />
        <Route path="cursos" />
        <Route path="guias" element={<GuidesPage />} />
        <Route path="guias/:slug" element={<GuidesPage />} />
        <Route path="config" />
        <Route path="*" element={<Navigate to="/principal/dashboard" />} />
      </Route>
    </Route>
  </Routes>
}

export default App
