import { Spinner } from "@nextui-org/react"

export default function Loading() {
  return (
    <div className="flex w-full h-full">
      <Spinner color="primary" className="items-center justify-center" />
    </div>
  )
}



