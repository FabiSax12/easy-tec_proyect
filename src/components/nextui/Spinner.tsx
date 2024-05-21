import { Spinner as SpinnerUI } from "@nextui-org/react"

export const Spinner = () => {
  return (
    <div className="flex w-full h-full">
      <SpinnerUI color="primary" className="items-center justify-center" />
    </div>
  )
}