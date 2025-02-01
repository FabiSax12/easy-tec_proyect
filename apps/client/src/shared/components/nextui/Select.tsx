import { useState } from "react"
import { Select as SelectUI, SelectItem, Selection, SelectProps, SelectSection } from "@nextui-org/react"

interface Option {
  label: string
  value: string
  section?: string
}

interface Props extends Omit<SelectProps, "children"> {
  options: Option[]
  controlled?: boolean
  hasSections?: boolean
  sections?: string[]
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
        : props.sections
          ? props.sections.map(section => (
            <SelectSection key={section} title={section}>
              {props.options.filter(option => option.section === section).map(option => (
                <SelectItem key={option.value} value={option.value} classNames={{ title: "flex justify-between items-center" }}>
                  {option.label}
                  {Array.from(props.disabledKeys || []).includes(option.value)}
                </SelectItem>
              ))}
            </SelectSection>
          ))
          : props.options.map((period) => (
            <SelectItem key={period.value} value={period.value}>
              {period.label}
            </SelectItem>
          ))}
    </SelectUI>
  )

  if (props.hasSections && props.sections) {
    return props.sections?.map(section => (
      <SelectSection
        key={section}
        title={section}
        classNames={{ heading: "flex w-full sticky top-1 z-20 py-1.5 px-2 bg-default-100 shadow-small rounded-small" }}
      >
        {props.options.filter(option => option.section === section).map(option => (
          <SelectItem key={option.value} value={option.value} classNames={{ title: "flex justify-between items-center" }}>
            {option.label}
            {Array.from(props.disabledKeys || []).includes(option.value)}
          </SelectItem>
        ))}
      </SelectSection>
    ))
  }

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