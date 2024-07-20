import { SpinnerProps, Spinner as SpinnerUI } from "@nextui-org/react"

export const Spinner = (props: SpinnerProps) => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <SpinnerUI color="primary" className="items-center justify-center" {...props} />
    </div>
  )
}