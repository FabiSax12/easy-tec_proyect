import { SidebarItem, SidebarWrapper } from "@/shared/components/sidebar"
import { MdDashboard } from "react-icons/md"
import { RiCalendarScheduleFill } from "react-icons/ri"
import { IoCalendarOutline, IoListOutline } from "react-icons/io5"
import { FaChalkboardTeacher } from "react-icons/fa"

const items = [
  { icon: <MdDashboard size={25} />, text: "Overview", href: "/dashboard/overview" },
  { icon: <IoCalendarOutline size={25} />, text: "Calendario", href: "/dashboard/calendario" },
  { icon: <RiCalendarScheduleFill size={25} />, text: "Horarios", href: "/dashboard/horario" },
  { icon: <FaChalkboardTeacher size={25} />, text: "Cursos", href: "/dashboard/cursos" },
  // { icon: <FiClock size={25} />, text: "Entregas", href: "/dashboard/entregas" },
  { icon: <IoListOutline size={25} />, text: "Guias", href: "/dashboard/guias" },
]

export const Sidebar = () => {
  return <SidebarWrapper>
    {items.map((item, index) => (
      <SidebarItem key={index} icon={item.icon} text={item.text} href={item.href} />
    ))}
  </SidebarWrapper>
}