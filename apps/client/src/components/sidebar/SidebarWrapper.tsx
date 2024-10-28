import { useState } from "react"
import { SidebarContext } from "@/context/sidebar"
import { IoChevronForward } from "react-icons/io5"

interface Props {
  children: React.ReactNode
}

export function SidebarWrapper({ children }: Props) {
  const [expanded, setExpanded] = useState(true)

  return (
    <aside className={`z-50 h-screen transition-all ${expanded ? "w-60" : "w-16"}`}>
      <nav className="h-full flex flex-col bg-white border-r border-default shadow-sm">

        <div className={"p-4 pb-2 flex items-center justify-between"}>
          {/* <Logo expanded={expanded} /> */}
          <span className={`overflow-hidden ${!expanded && "hidden delay-700"}`}>Navegación</span>
          <button
            onClick={() => setExpanded(prevState => !prevState)}
            className="p-1.5"
          >
            <IoChevronForward
              className={`transition-all ${expanded ? "rotate-180" : "rotate-0"}`}
            />
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside >
  )
}
