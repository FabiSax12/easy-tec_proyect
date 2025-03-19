import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"
import App from "./App.tsx"
import "./index.css"
import { SchedulesProvider } from "./context/schedule.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
        <SchedulesProvider>
          <App />
        </SchedulesProvider>
    </BrowserRouter>
  </StrictMode>,
)
