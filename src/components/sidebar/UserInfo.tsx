"use client"
import Image from "next/image"
import { type User } from "next-auth"
import { signOut } from "next-auth/react"
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react"
import { IoEllipsisVerticalSharp } from "react-icons/io5"
import { MdLogout } from "react-icons/md"

interface Props {
  userSession: User
  expanded: boolean
}

export const UserInfo = ({ userSession, expanded }: Props) => {
  return <div className="border-t border-default flex p-3">
    <Image
      width={40}
      height={40}
      src={userSession.avatar}
      alt=""
      className="w-10 h-10 rounded-md"
    />
    <div
      className={`
        flex justify-between items-center
        overflow-hidden transition-all
        whitespace-nowrap
        ${expanded ? "w-52 ml-3" : "w-0"}
      `}
    >
      <div className="leading-4">
        <h4 className="font-semibold text-sm">{userSession.name} {userSession.lastname}</h4>
        <span className="text-xs text-gray-600">{userSession.carrier ?? "Sin carrera "}</span>
      </div>

      <Dropdown
        showArrow
        radius="sm"
        placement="top"
        classNames={{ base: ["w-30"], content: ["max-w-30"] }}
      >
        <DropdownTrigger>
          <button>
            <IoEllipsisVerticalSharp
              size={20}
              className="cursor-pointer text-default-500"
            />
          </button>
        </DropdownTrigger>
        <DropdownMenu
          variant="flat"
          classNames={{ base: "w-30", }}
          itemClasses={{ base: "text-sm" }}
          onAction={key => {
            if (key === "signout") signOut({ callbackUrl: "/auth" })
          }}
        >
          <DropdownItem
            key="signout"
            className="text-danger"
            color="danger"
            startContent={<MdLogout />}
          >
            Cerrar Sesion
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
}
