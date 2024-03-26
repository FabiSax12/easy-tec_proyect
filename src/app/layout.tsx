import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Providers } from "./providers"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Easy TEC",
  description: "App destinada a estudiantes del TEC",
}

export default function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-light">
      <body className={`${inter.className} h-screen`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
