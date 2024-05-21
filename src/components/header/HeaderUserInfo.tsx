"use client"
import { signOut } from "next-auth/react"
import { User } from "@prisma/client"
import { UserUI } from "@/components"
import { Badge, Button } from "@nextui-org/react"
import { FaRegBell } from "react-icons/fa6"
import { MdLogout } from "react-icons/md"


export const HeaderUserInfo = ({ user }: { user: User }) => {
  return (
    <>
      <Badge content={2} shape="circle" color="danger" className="cursor-pointer">
        <FaRegBell className="text-black text-lg cursor-pointer" />
      </Badge>
      <UserUI
        name={user.name}
        lastname={user.lastname}
      // carrier={/*user.carrier*/"Ingeniería en Computación"}
      // avatarImage={/*user.avatarImageURL*/ "https://randomuser.me/api/portraits"}
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
    </>
  )
}

