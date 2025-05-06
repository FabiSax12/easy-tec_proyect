// import { useRouter } from "next/navigation"
// import { deletePeriod } from "@/actions"
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@easy-tec/ui"
import { IoEllipsisVerticalSharp, IoTrashOutline } from "react-icons/io5"

interface Props {
  periodId: number
}

export const PeriodMenu = ({ }: Props) => {
  // const router = useRouter()

  return <Dropdown
    showArrow
    radius="sm"
    placement="right"
  >

    <DropdownTrigger>
      <button>
        <IoEllipsisVerticalSharp size={16} className="cursor-pointer text-default-500" />
      </button>
    </DropdownTrigger>

    <DropdownMenu
      variant="flat"
      onAction={async key => {
        if (key === "delete") {
          // await deletePeriod(periodId)
          // router.refresh()
        }
      }}
    >
      <DropdownItem key="delete" startContent={<IoTrashOutline />} className="text-danger" color="danger">Eliminar</DropdownItem>
    </DropdownMenu>

  </Dropdown>
}