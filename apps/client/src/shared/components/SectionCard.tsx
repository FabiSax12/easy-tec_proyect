import { Spinner } from "@nextui-org/react"
import { ReactNode, Suspense } from "react"

interface Props {
  title?: string
  children: ReactNode
  className?: string
  centerTitle?: boolean
}

export const SectionCard = ({ title, children, className, centerTitle = false }: Props) => {
  return (
    <section className={`bg-white px-6 py-2 rounded-lg ${className}`}>
      {
        title && <header className={`w-min ${centerTitle && "mx-auto"}`}>
          <h3 className='text-xl mb-4'>{title}</h3>
        </header>
      }
      <Suspense fallback={<Spinner />}>
        {children}
      </Suspense>
    </section>
  )
}