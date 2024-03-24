import { ReactNode } from 'react'
import { NextPage } from 'next'

interface Props {
  children: ReactNode
}

const Layout: NextPage<Props> = ({children}) => {
  return <main className="w-screen h-screen flex flex-col gap-3 justify-evenly items-center">
    {children}
  </main>
}

export default Layout