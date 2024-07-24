import { Sidebar } from "@/components/sidebar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex">
    <Sidebar />
    <main className="w-full h-full max-h-screen p-4 lg:px-8 overflow-y-scroll">
      {children}
    </main>
  </div>
}         