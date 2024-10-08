import { SidebarItem, SidebarWrapper } from "@/components/sidebar"
import { MdDashboard } from "react-icons/md"
import { RiCalendarEventLine } from "react-icons/ri"
import { IoCalendarOutline, IoSettingsOutline } from "react-icons/io5"

const items = [
  { icon: <MdDashboard size={25} />, text: "Dashboard", href: "/principal/dashboard" },
  { icon: <IoCalendarOutline size={25} />, text: "Calendario", href: "/principal/calendario" },
  { icon: <RiCalendarEventLine size={25} />, text: "Horarios", href: "/principal/horario" },
  // { icon: <FiClock size={25} />, text: "Entregas", href: "/principal/entregas" },
  // { icon: <IoListOutline size={25} />, text: "Guias", href: "/principal/guias" },
]

export const Sidebar = () => {
  return <SidebarWrapper>
    {items.map((item, index) => (
      <SidebarItem key={index} icon={item.icon} text={item.text} href={item.href} />
    ))}

    <hr />
    <SidebarItem
      icon={<IoSettingsOutline size={25} />}
      text={"Configuración"}
      href={"/principal/config"}
    />
  </SidebarWrapper>
}