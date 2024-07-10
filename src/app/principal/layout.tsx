import { Sidebar } from "@/components/sidebar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex">
    <Sidebar />
    <main className="w-full h-full p-4 lg:px-16">
      {children}
    </main>
  </div>
}         