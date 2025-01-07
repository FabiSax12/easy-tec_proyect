import { useNavigate, useLocation } from "react-router-dom"
import { SectionCard } from "../SectionCard"
import { UserInfo } from "./UserInfo"
import { Badge, BreadcrumbItem, Breadcrumbs } from "@nextui-org/react"
import { AiFillBell } from "react-icons/ai"
import { FaGear } from "react-icons/fa6"
import { ConfigModal } from "@/modules/user-config/components/ConfigModal"
import { useState } from "react"

export const Header = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  return <>
    <header className="flex justify-between items-center">
      <Breadcrumbs
        separator="/"
        itemClasses={{
          separator: "px-2"
        }}
      >
        {pathname.split("/").slice(1).map((path, index) => (
          <BreadcrumbItem key={index}>{path.toUpperCase()}</BreadcrumbItem>
        ))}
      </Breadcrumbs>

      <SectionCard className="w-max flex items-center gap-4">
        <Badge color="primary" size="md" content="5">
          <AiFillBell size={20} className="cursor-pointer" />
        </Badge>
        <FaGear size={20} className="cursor-pointer" onClick={() => setIsOpen(true)} />
        <UserInfo />
      </SectionCard>
    </header>
    <ConfigModal isOpen={isOpen} onOpenChange={() => setIsOpen(prev => !prev)} />
  </>
}