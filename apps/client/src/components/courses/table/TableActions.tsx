import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react"
import { FaArrowUpRightFromSquare, FaPen, FaTrashCan } from "react-icons/fa6"
import { HiDotsVertical } from "react-icons/hi"
import { Link, useNavigate } from "react-router-dom"

interface Props {
  courseId: number
}

async function deleteCourse(courseId: number) {
  return fetch(`/api/courses/${courseId}`, { method: "DELETE" }).then(res => {
    if (!res.ok) throw new Error("Failed to delete course")
    return res.json()
  }).catch(err => {
    console.error(err)
  })
}

export function TableActions({ courseId }: Props) {
  const navigate = useNavigate()

  const onDeleteCourse = async () => {
    console.log("Deleting course", courseId)
    await deleteCourse(courseId)
    navigate(0)
  }

  return (
    <div className="relative flex justify-end items-center gap-2">
      <span className="hidden w-full lg:flex lg:items-center lg:justify-evenly">
        <Link to="#" className="text-primary">
          <FaArrowUpRightFromSquare />
        </Link>
        <button className="text-success">
          <FaPen />
        </button>
        <button className="text-danger">
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
          <DropdownItem color="primary" variant="light" startContent={<FaArrowUpRightFromSquare />}>
            Abrir
          </DropdownItem>
          <DropdownItem color="success" variant="light" startContent={<FaPen />}>
            Editar
          </DropdownItem>
          <DropdownItem className="text-danger" color="danger" variant="solid" startContent={<FaTrashCan />} onPress={onDeleteCourse}>
            Eliminar
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>

  )
}