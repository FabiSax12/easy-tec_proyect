import { useState } from "react"
import { Select as SelectUI, SelectItem, Selection, SelectProps } from "@heroui/react"

interface Props extends Omit<SelectProps, "children"> {
  label?: string
  placeholder?: string
  description?: string
  errorMessage: string
  options: {
    key: string | number
    label: string
  }[]
  onValueChange?: (value: string | null) => void
}

export const ValidatedSelect = (props: Props) => {
  const { options, errorMessage, onValueChange, ...otherProps } = props
  const [currentSelection, setCurrentSelection] = useState<Selection>(new Set())
  const [touched, setTouched] = useState<boolean>(false)

  const validate = () => {
    if (typeof currentSelection === "string") {
      return currentSelection.length > 0
    }

    return currentSelection.size > 0
  }
  const isValid = validate()

  const setValue = (value: Selection) => {
    setCurrentSelection(value)

    if (!onValueChange) return
    if (typeof value === "string") {
      onValueChange(value)
      return
    }

    if (value.size === 0) {
      onValueChange(null)
      return
    }
    onValueChange(Array.from(value)[0] as string)
  }

  return (
    <SelectUI
      variant="bordered"
      className="max-w-xs"
      errorMessage={isValid || !touched ? "" : errorMessage
      }
      isInvalid={isValid || !touched ? false : true}
      selectedKeys={currentSelection}
      onSelectionChange={setValue}
      onClose={() => setTouched(true)}
      {...otherProps}
    >
      {
        options.map((option) => (
          <SelectItem key={option.key} >
            {option.label}
          </SelectItem>
        ))
      }
    </SelectUI>
  )
}