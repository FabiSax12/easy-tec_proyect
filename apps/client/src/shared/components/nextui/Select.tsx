import { useState } from "react"
import { Select as SelectUI, SelectItem, Selection, SelectProps } from "@nextui-org/react"

interface Option {
  label: string
  value: string
}

interface Props extends Omit<SelectProps, "children"> {
  options: Option[]
  controlled?: boolean
  children?: SelectProps["children"]
}

export function Select(props: Props) {
  const [value, setValue] = useState<Selection>(new Set([]))

  if (props.controlled) return (
    <SelectUI
      selectedKeys={value}
      onSelectionChange={setValue}
      onChange={props.onChange}
      {...props}
    >
      {props.children
        ? props.children
        : props.options.map((period) => (
          <SelectItem key={period.value} value={period.value}>
            {period.label}
          </SelectItem>
        ))}
    </SelectUI>
  )

  return <SelectUI
    className="items-center ps-2"
    {...props}
  >
    {props.children
      ? props.children
      : props.options.map((period) => (
        <SelectItem key={period.value} value={period.value}>
          {period.label}
        </SelectItem>
      ))}
  </SelectUI>
}