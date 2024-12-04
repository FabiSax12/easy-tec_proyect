import { useState } from "react"
import { SidebarContext } from "@/context/sidebar"
import { IoChevronForward } from "react-icons/io5"

interface Props {
  children: React.ReactNode
}

export function SidebarWrapper({ children }: Props) {
  const [expanded] = useState(false)

  return (
    <aside className={`flex flex-col justify-center items-center z-50 h-screen transition-all ${expanded ? "w-60" : "w-16"} sticky top-0 left-0`}>
      <nav className="flex flex-col bg-white shadow-sm">
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 flex flex-col gap-6">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside >
  )
}
