import { useNavigate, useHref } from "react-router-dom"
import { Toaster } from "sonner"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { HeroUIProvider } from "@heroui/react"

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
      <HeroUIProvider navigate={navigate} useHref={useHref}>
        {props.children}
        <ReactQueryDevtools />
        <Toaster richColors closeButton />
      </HeroUIProvider>
    </QueryClientProvider>
  )
}