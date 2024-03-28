"use client"
import { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import { signOut } from "next-auth/react"
import useUserInfo from "@/store/user"
import { Badge } from "@nextui-org/badge"
import { Button } from "@nextui-org/react"
import UserUI from "@/ui/nextui/User"
import { FaRegBell, FaGear } from "react-icons/fa6"
import { MdLogout } from "react-icons/md"

interface Props { }

const Header: NextPage<Props> = () => {
  const user = useUserInfo((state) => state)

  return (
    <header className="w-full h-14 px-32 flex items-center justify-between sticky top-0 left-0 z-50 bg-white backdrop-blur-sm backdrop-saturate-100 shadow-md text-black">
      <Link href="/principal" className="w-max flex items-center gap-4 select-none">
        <Image src="/logo.png" alt="Planner logo" width={50} height={50} className="w-7" />
        <h1 className="text-2xl">Easy TEC</h1>
      </Link>

      <span className="w-max flex items-center gap-4 ">
        <Badge content={user.notifications} shape="circle" color="danger" className="cursor-pointer">
          <FaRegBell className="text-black text-lg cursor-pointer" />
        </Badge>
        <Link href="/principal/configuracion">
          <FaGear className="text-black text-lg cursor-pointer" />
        </Link>
        <UserUI
          name={user.name}
          lastname={user.lastname}
          carrier={user.carrier}
          avatarImage={user.avatarImageURL}
        />
        <Button
          size="md"
          variant="light"
          color="danger"
          startContent={<MdLogout />}
          onPress={() => signOut({ callbackUrl: "/auth" })}
        >
          Salir
        </Button>
      </span>
    </header>
  )
}

export default Header