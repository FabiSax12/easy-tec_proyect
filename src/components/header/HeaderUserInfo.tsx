"use client"
import { signOut } from "next-auth/react"
import { UserUI } from "@/components"
import { Badge, Button } from "@nextui-org/react"
import { FaRegBell } from "react-icons/fa6"
import { MdLogout } from "react-icons/md"
import { User } from "next-auth"

export const HeaderUserInfo = ({ user }: { user: User | undefined }) => {
  return (
    <>
      <Badge content={2} shape="circle" color="danger" className="cursor-pointer">
        <FaRegBell className="text-black text-lg cursor-pointer" />
      </Badge>
      {
        user ? (
          <UserUI
            name={user.name}
            lastname={user.lastname}
            carrier={user.carrier}
            avatarImage={user.avatar}
          />
        ) : (
          <UserUI
            name="Usuario"
            lastname="Invitado"
            carrier="Sin carrera"
            avatarImage="/avatar.png"
          />
        )
      }
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

