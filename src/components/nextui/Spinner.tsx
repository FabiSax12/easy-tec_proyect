import { SpinnerProps, Spinner as SpinnerUI } from "@nextui-org/react"

export const Spinner = (props: SpinnerProps) => {
  return <SpinnerUI
    color="primary"
    classNames={{
      base: "flex w-full h-full justify-center items-center"
    }}
    {...props}
  />
}