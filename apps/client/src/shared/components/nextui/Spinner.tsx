import { SpinnerProps, Spinner as SpinnerUI } from "@easy-tec/ui"

export const Spinner = (props: SpinnerProps) => {
  return <SpinnerUI
    color="primary"
    classNames={{
      base: "flex w-full h-full justify-center items-center"
    }}
    {...props}
  />
}