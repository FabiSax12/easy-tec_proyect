import { Spinner as SpinnerUI } from "@nextui-org/react"

export const Spinner = () => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <SpinnerUI color="primary" className="items-center justify-center" />
    </div>
  )
}