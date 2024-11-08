import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { AuthProvider } from "./context/auth"
import { NextUIProvider } from "@nextui-org/react"
import App from "./App"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </AuthProvider>
  </StrictMode>
)
