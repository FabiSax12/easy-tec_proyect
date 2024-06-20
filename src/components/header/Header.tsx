import Image from "next/image"
import Link from "next/link"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import { HeaderUserInfo } from "@/components"
import { FaGear } from "react-icons/fa6"

export const Header = async () => {
  const session = await getServerSession(authOptions)
  const user = session?.user

  return (
    <header className="w-full h-14 px-4 lg:px-16 flex items-center justify-between sticky top-0 left-0 z-50 bg-white backdrop-blur-sm backdrop-saturate-100 shadow-md text-black">
      <Link href="/principal" className="w-max flex items-center gap-4 select-none">
        <Image src="/logo.png" alt="Planner logo" width={50} height={50} className="w-7" />
        <h1 className="text-lg lg:text-2xl">Easy TEC</h1>
      </Link>

      <span className="w-max flex items-center gap-4 ">
        <Link href="/principal/configuracion">
          <FaGear className="text-black text-lg cursor-pointer" />
        </Link>
        <HeaderUserInfo user={user} />
      </span>
    </header>
  )
}