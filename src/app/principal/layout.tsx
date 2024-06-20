import { Header } from "@/components"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <Header />
    <main className="h-full p-4 lg:px-16">
      {children}
    </main>
  </>
}         