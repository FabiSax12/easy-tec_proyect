import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { SidebarContext } from "@/presentation/context/sidebar"

interface Props {
  icon: React.ReactNode
  text: string
  href: string
  active?: boolean
  alert?: boolean
}

export function SidebarItem({ icon, text, alert, href }: Props) {
  const { expanded } = useContext(SidebarContext)

  return (
    <li className="w-8 h-8 flex justify-center items-center">
      <NavLink to={href}
        className={({ isActive }) => `
          relative flex items-center justify-center
          font-medium rounded-md cursor-pointer group
          after:absolute after:bottom-0 after:w-3
          after:h-6 after:bg-primary after:rounded-md after:transition-all after:duration-300
          ${isActive ? "text-primary after:-left-6" : "after:-left-10"}
        `}
      >
        <span className="flex items-center justify-center">{icon}</span>

        {/* <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
          {text}
        </span> */}

        {alert && <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}
        />}

        {!expanded && (
          <div
            className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-primary-100 text-primary-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
          >
            {text}
          </div>
        )}
      </NavLink>
    </li>
  )
}