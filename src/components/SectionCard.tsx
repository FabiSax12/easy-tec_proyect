import { ReactNode } from "react"

interface Props {
  children: ReactNode
  className?: string
}

const SectionCard = ({children, className}: Props) => {
  return (
    <div className={`bg-white px-6 py-2 rounded-lg ${className}`}>{children}</div>
  )
}

export default SectionCard