import { Routes, Route, Navigate } from "react-router-dom"
import { DashboadLayout, AuthLayout } from "@/layouts"
import { AuthPage, DashboardPage, NotFound, Period, ProtectedPage, SchedulesPage, GuidesPage } from "@/pages"
import { ComingSoon } from "@/components/ComingSoon"
import {
  PomodoroGuidePage, ActiveRecallGuidePage, SpacedRepetitionGuidePage,
  FeynmanMethodGuidePage, CornellMethodGuidePage, GTDWorkFlow,
  MindMappingGuidePage, MnemotecniaGuidePage, SMARTGoals, SQ3RGuidePage
} from "./guides/components"
import "./App.css"
import { VerifyMagicLinkPage } from "./pages/VerifyMagicLinkPage"
import { CreatedAccountPage } from "./pages/CreatedAccountPage"

function App() {
  return <Routes>

    <Route path="/auth" element={<AuthLayout />}>
      <Route index element={<AuthPage />} />
      <Route path="created-account" element={<CreatedAccountPage />} />
      <Route path="verify" element={<VerifyMagicLinkPage />} />
    </Route>

    <Route index element={<Navigate to="/principal/dashboard" replace />} />

    <Route path="/principal" element={<ProtectedPage />}>
      <Route path="" element={<DashboadLayout />}>

        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="periodo/:id" element={<Period />} />

        <Route path="horario" element={<SchedulesPage />} />

        <Route path="calendario" element={<ComingSoon />} />

        <Route path="cursos" element={<ComingSoon />} />

        <Route path="guias" element={<GuidesPage />} />
        <Route path="guias/tecnica-pomodoro" element={<PomodoroGuidePage />} />
        <Route path="guias/active-recall" element={<ActiveRecallGuidePage />} />
        <Route path="guias/spaced-repetition" element={<SpacedRepetitionGuidePage />} />
        <Route path="guias/metodo-feynman" element={<FeynmanMethodGuidePage />} />
        <Route path="guias/mind-mapping" element={<MindMappingGuidePage />} />
        <Route path="guias/metodo-cornell" element={<CornellMethodGuidePage />} />
        <Route path="guias/tecnica-sq3r" element={<SQ3RGuidePage />} />
        <Route path="guias/objetivos-smart" element={<SMARTGoals />} />
        <Route path="guias/mnemotecnia" element={<MnemotecniaGuidePage />} />
        <Route path="guias/tecnica-gtd" element={<GTDWorkFlow />} />

        <Route path="config" />

      </Route>
    </Route>

    <Route path="*" element={<NotFound />} />

  </Routes>
}

export default App
