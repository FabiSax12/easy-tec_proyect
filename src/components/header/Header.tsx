import Image from "next/image"
import Link from "next/link"
import { HeaderUserInfo } from "@/components"
import { FaGear } from "react-icons/fa6"

export const Header = () => {
  return (
    <header className="w-full h-14 px-32 flex items-center justify-between sticky top-0 left-0 z-50 bg-white backdrop-blur-sm backdrop-saturate-100 shadow-md text-black">
      <Link href="/principal" className="w-max flex items-center gap-4 select-none">
        <Image src="/logo.png" alt="Planner logo" width={50} height={50} className="w-7" />
        <h1 className="text-2xl">Easy TEC</h1>
      </Link>

      <span className="w-max flex items-center gap-4 ">
        <Link href="/principal/configuracion">
          <FaGear className="text-black text-lg cursor-pointer" />
        </Link>
        <HeaderUserInfo />
      </span>
    </header>
  )
}