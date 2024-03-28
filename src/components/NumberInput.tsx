import { ChangeEvent } from "react"

interface Props {
  className?: string
  defaultValue?: number
  value: number
  setValue: (new_value: number) => void
  min?: number
  max?: number
  disabled?: boolean
  label?: string | number
}

export const NumberInput = (props: Props) => {
  const validateValue = (e: ChangeEvent<HTMLInputElement>) => {
    const new_value = Number(e.target.value)
    if (new_value >= 1) {
      props.setValue(new_value)
    }
  }

  return (
    <div className={`flex flex-col justify-end relative border-medium rounded-medium border-default-200 min-h-unit-14 px-3 py-2 w-full hover:border-default-400 ${props.className}`}>
      <label
        className="text-[0.7rem] text-default-700 absolute top-2 left-3"
      >
        {props.label}
      </label>

      <input
        className="w-full outline-none text-sm h-min"
        type="number"
        value={props.value}
        min={props.min}
        max={props.max}
        onChange={validateValue}
        disabled={props.disabled}
      />
    </div>
  )
}