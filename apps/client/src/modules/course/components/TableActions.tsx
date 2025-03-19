import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react"
import { FaPen, FaTrashCan } from "react-icons/fa6"
import { HiDotsVertical } from "react-icons/hi"

interface Props {
  onDeleteCourse: () => void,
  onEditCourse: () => void,
  onOpenCourse: () => void
}

export function TableActions({ onDeleteCourse, onEditCourse }: Props) {
  return (
    <div className="relative flex justify-end items-center gap-2">
      <span className="hidden w-full lg:flex lg:items-center lg:justify-evenly">
        {/* <button className="text-primary" onClick={onOpenCourse}>
          <FaArrowUpRightFromSquare />
        </button> */}
        <button className="text-success" onClick={onEditCourse}>
          <FaPen />
        </button>
        <button className="text-danger" onClick={onDeleteCourse}>
          <FaTrashCan />
        </button>
      </span>

      <Dropdown className="block lg:hidden">
        <DropdownTrigger className="inline-flex lg:hidden">
          <Button isIconOnly size="sm" variant="light">
            <HiDotsVertical className="text-default-300" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          {/* <DropdownItem
            key={1}
            color="primary"
            variant="light"
            startContent={<FaArrowUpRightFromSquare />}
            onPress={onOpenCourse}
          >
            Abrir
          </DropdownItem> */}
          <DropdownItem
            key={2}
            color="success"
            variant="light"
            startContent={<FaPen />}
            onPress={onEditCourse}
          >
            Editar
          </DropdownItem>
          <DropdownItem
            key={3}
            className="text-danger"
            color="danger"
            variant="solid"
            startContent={<FaTrashCan />}
            onPress={onDeleteCourse}
          >
            Eliminar
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>

  )
}