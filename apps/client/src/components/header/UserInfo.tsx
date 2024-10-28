import { useAuth } from "@/hooks/useAuth"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from "@nextui-org/react"
import { IoEllipsisVerticalSharp } from "react-icons/io5"
import { MdLogout } from "react-icons/md"
import { useNavigate } from "react-router-dom"

export const UserInfo = () => {
  const nav = useNavigate()
  const { user, logout } = useAuth()

  console.log(user)

  const signOut = () => {
    logout()
    nav("/auth")
  }

  return (
    <div className="flex items-center gap-4">
      <User
        name={user?.name + " " + user?.lastname}
        description={user?.carrier}
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
        }}
      />

      <Button startContent={<MdLogout />} isIconOnly color="danger" variant="light" onClick={signOut} />

      <Dropdown
        showArrow
        radius="sm"
        placement="top"
        classNames={{ base: ["w-30"], content: ["max-w-30"] }}
      >
        <DropdownTrigger className="lg:hidden">
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
            if (key === "signout") signOut()
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
  )
}