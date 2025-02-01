import { useNavigate, useHref } from "react-router-dom"
import { Toaster } from "sonner"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { NextUIProvider } from "@nextui-org/react"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

export const Providers = (props: { children: React.ReactNode }) => {
  const navigate = useNavigate()

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider navigate={navigate} useHref={useHref}>
        {props.children}
        <ReactQueryDevtools />
        <Toaster richColors closeButton />
      </NextUIProvider>
    </QueryClientProvider>
  )
}