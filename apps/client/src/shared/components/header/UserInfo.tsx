import { useNavigate } from "react-router-dom"
import { useAuthStore } from "@/modules/auth/store/auth.store"
import {
  Button, Dropdown, DropdownItem,
  DropdownMenu, DropdownTrigger, Skeleton, User
} from "@nextui-org/react"
import { IoEllipsisVerticalSharp } from "react-icons/io5"
import { MdLogout } from "react-icons/md"
import { useQueryClient } from "@tanstack/react-query"

export const UserInfo = () => {
  const nav = useNavigate()
  const queryClient = useQueryClient()
  const { logout, user } = useAuthStore()

  const signOut = () => {
    logout()
    queryClient.clear()
    nav("/auth", { replace: true })
  }

  if (!user) return <UserInfoSkeleton />

  return (
    <div className="flex items-center gap-4">
      <User
        name={user.name + " " + user.lastname}
        description={user.carrier ?? "Sin carrera"}
        avatarProps={{
          src: user.avatar,
          disableAnimation: true,
        }}
      />

      <Button
        className="hidden lg:flex"
        endContent={<MdLogout />}
        isIconOnly
        color="danger"
        variant="light"
        onPress={signOut}
      />

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

const UserInfoSkeleton = () => (
  <div className="max-w-max w-full flex items-center gap-3">
    <div>
      <Skeleton className="flex rounded-full w-10 h-10" />
    </div>
    <div className="w-full flex flex-col gap-2">
      <Skeleton className="h-3 w-40 rounded-lg" />
      <Skeleton className="h-3 w-36 rounded-lg" />
    </div>
  </div>
)