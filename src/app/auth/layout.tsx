import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Autenticación",
  description: "",
}

export default function Layout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return <main className="w-screen h-screen flex flex-col gap-3 justify-evenly items-center">
    {children}
  </main>
}