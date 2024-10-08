// import { UserInfo } from "./UserInfo"
import { useState } from "react"
import { SidebarContext } from "@/context/sidebar"
import { Logo } from "@/components/sidebar"
import { IoChevronBack, IoChevronForward } from "react-icons/io5"

interface Props {
  children: React.ReactNode
}

export function SidebarWrapper({ children }: Props) {
  const [expanded, setExpanded] = useState(true)
  // const { data, status } = useSession()

  // if (!data || !(status === "authenticated")) return null

  return (
    <aside className={`z-50 h-screen transition-all ${expanded ? "w-60" : "w-16"}`}>
      <nav className="h-full flex flex-col bg-white border-r border-default shadow-sm">

        <div className="p-4 pb-2 flex justify-between items-center">
          <Logo expanded={expanded} />
          <button
            onClick={() => setExpanded(prevState => !prevState)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <IoChevronBack /> : <IoChevronForward />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        {/* <UserInfo userSession={data.user} expanded={expanded} /> */}
      </nav>
    </aside >
  )
}
