"use client"
import { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import useUserInfo from "@/store/user"
import UserUI from "@/ui/nextui/User"
import { Badge } from "@nextui-org/badge"
import { FaRegBell, FaGear } from "react-icons/fa6"
import { Button } from "@nextui-org/react"

interface Props {}

const Header: NextPage<Props> = () => {
  const user = useUserInfo((state) => state)

  return (
    <header className="w-full h-14 px-32 flex items-center justify-between sticky top-0 left-0 z-50 bg-white backdrop-blur-sm backdrop-saturate-100 shadow-md text-black">
      <Link href="/" className="w-max flex items-center gap-4 select-none">
        <Image src="/logo.png" alt="Planner logo" width={50} height={50} className="w-7"/>
        <h1 className="text-2xl">Easy TEC</h1>
      </Link>

      <span className="w-max flex items-center gap-4 ">
        {
          user.email ? <>
            <Badge content={user.notifications} shape="circle" color="danger" className="cursor-pointer">
              <FaRegBell className="text-black text-lg cursor-pointer"/>
            </Badge>
            <Link href="/configuracion">
              <FaGear className="text-black text-lg cursor-pointer"/>
            </Link>
            <UserUI 
              name={user.name}
              lastname={user.lastname}
              carrier={user.carrier}
              avatarImage={user.avatarImageURL}
            />
          </> : <Link href="/auth"><Button variant="bordered" color="primary">Iniciar Sesión</Button></Link>
        }
      </span>
    </header>
  )
}

export default Header