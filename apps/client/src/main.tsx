import { StrictMode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createRoot } from "react-dom/client"
import { NextUIProvider } from "@nextui-org/react"
import App from "./App"
import "./index.css"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <App />
        <ReactQueryDevtools />
      </NextUIProvider>
    </QueryClientProvider>
  </StrictMode>
)
