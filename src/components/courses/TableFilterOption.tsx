import { capitalize } from "@/utils"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Selection } from "@nextui-org/react"
import { FaChevronDown } from "react-icons/fa6"

interface Props {
  title: string;
  selectedKeys: Selection;
  onSelectionChange: React.Dispatch<React.SetStateAction<Selection>>;
  options: { name: string; uid: string }[];
}

export function TableFilterOption({ title, selectedKeys, onSelectionChange, options }: Props) {
  return (
    <Dropdown>
      <DropdownTrigger className="sm:flex">
        <Button endContent={<FaChevronDown className="text-small" />} variant="flat">
          {title}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Table Columns"
        closeOnSelect={false}
        selectedKeys={selectedKeys}
        selectionMode="multiple"
        onSelectionChange={onSelectionChange}
      >
        {options.map((option) => (
          <DropdownItem key={option.uid} className="capitalize">
            {capitalize(option.name)}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}