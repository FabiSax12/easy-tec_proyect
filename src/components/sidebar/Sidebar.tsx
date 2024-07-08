import { SidebarItem } from "./SidebarItem"
import { SidebarWrapper } from "./SidebarWrapper"
import { MdDashboard } from "react-icons/md"
import { RiCalendarEventLine } from "react-icons/ri"
import {
  IoCalendarOutline, IoListOutline, IoSettingsOutline
} from "react-icons/io5"

export const Sidebar = () => {
  return <SidebarWrapper>
    <SidebarItem icon={<MdDashboard size={25} />} text="Dashboard" href="/principal/dashboard" />
    <SidebarItem icon={<IoCalendarOutline size={25} />} text="Calendario" href="/principal/calendario" />
    <SidebarItem icon={<RiCalendarEventLine size={25} />} text="Horarios" href="/principal/horarios/crear" />
    <SidebarItem icon={<IoListOutline size={25} />} text="Entregas" href="/principal/entregas" />
    <hr />
    <SidebarItem icon={<IoSettingsOutline size={25} />} text="Configuración" href="/principal/configuracion" />
  </SidebarWrapper>
}
