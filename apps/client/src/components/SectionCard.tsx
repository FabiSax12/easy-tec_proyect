import { ReactNode } from "react"

interface Props {
  title?: string
  children: ReactNode
  className?: string
}

export const SectionCard = ({ title, children, className }: Props) => {
  return (
    <section className={`bg-white px-6 py-2 rounded-lg ${className}`}>
      {
        title && <header className='w-min mx-auto'>
          <h3 className='text-xl mb-4'>{title}</h3>
        </header>
      }
      {children}
    </section>
  )
}