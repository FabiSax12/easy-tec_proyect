import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    {/* <Header /> */}
    <div className="flex">
      <Sidebar />
      <main className="h-full p-4 lg:px-16">
        {children}
      </main>
    </div>
  </>
}         