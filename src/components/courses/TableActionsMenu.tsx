import Link from "next/link"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react"
import { FaArrowUpRightFromSquare, FaPen, FaTrashCan } from "react-icons/fa6"
import { HiDotsVertical } from "react-icons/hi"

export function TableActionsMenu() {
  return (
    <div className="relative flex justify-end items-center gap-2">
      <span className="w-full flex items-center justify-evenly lg:hidden">
        <Link href="#" className="text-primary">
          <FaArrowUpRightFromSquare />
        </Link>
        <button className="text-success">
          <FaPen />
        </button>
        <button className="text-danger">
          <FaTrashCan />
        </button>
      </span>

      <Dropdown className="hidden lg:block">
        <DropdownTrigger className="hidden lg:inline-flex">
          <Button isIconOnly size="sm" variant="light">
            <HiDotsVertical className="text-default-300" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem color="primary" variant="light" startContent={<FaArrowUpRightFromSquare />}>
            Abrir
          </DropdownItem>
          <DropdownItem color="success" variant="light" startContent={<FaPen />}>
            Editar
          </DropdownItem>
          <DropdownItem className="text-danger" color="danger" variant="solid" startContent={<FaTrashCan />}>
            Eliminar
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>

  )
}