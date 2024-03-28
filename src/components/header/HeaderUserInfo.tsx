"use client"
import { UserUI } from "@/components"
import useUserInfo from "@/store/user"
import { Badge, Button } from "@nextui-org/react"
import { signOut } from "next-auth/react"
import { FaRegBell } from "react-icons/fa6"
import { MdLogout } from "react-icons/md"


export const HeaderUserInfo = () => {
  const user = useUserInfo((state) => state)

  return (
    <>
      <Badge content={user.notifications} shape="circle" color="danger" className="cursor-pointer">
        <FaRegBell className="text-black text-lg cursor-pointer" />
      </Badge>
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
    </>
  )
}
