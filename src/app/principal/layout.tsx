import { Header } from "@/components"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <Header />
    <main className="h-full px-32 py-4">
      {children}
    </main>
  </>
}         