import { SidebarItem, SidebarWrapper } from "@/components/sidebar"
import { MdDashboard } from "react-icons/md"
import { RiCalendarScheduleFill } from "react-icons/ri"
import { IoCalendarOutline, IoListOutline } from "react-icons/io5"
import { FaChalkboardTeacher } from "react-icons/fa"

const items = [
  { icon: <MdDashboard size={25} />, text: "Overview", href: "/principal/dashboard" },
  { icon: <IoCalendarOutline size={25} />, text: "Calendario", href: "/principal/calendario" },
  { icon: <RiCalendarScheduleFill size={25} />, text: "Horarios", href: "/principal/horario" },
  { icon: <FaChalkboardTeacher size={25} />, text: "Cursos", href: "/principal/cursos" },
  // { icon: <FiClock size={25} />, text: "Entregas", href: "/principal/entregas" },
  { icon: <IoListOutline size={25} />, text: "Guias", href: "/principal/guias" },
]

export const Sidebar = () => {
  return <SidebarWrapper>
    {items.map((item, index) => (
      <SidebarItem key={index} icon={item.icon} text={item.text} href={item.href} />
    ))}
  </SidebarWrapper>
}