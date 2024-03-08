"use client"
import { NextPage } from 'next'
import Image from 'next/image'
import useUserInfo from '@/store/user';
import UserUI from '@/ui/nextui/User'
import { Badge } from '@nextui-org/badge';
import { Button } from '@nextui-org/button';
import { FaRegBell, FaGear } from "react-icons/fa6";
import Link from 'next/link';

interface Props {}

const Header: NextPage<Props> = ({}) => {
  const user = useUserInfo((state) => state)

  return (
    <header className="w-full h-14 px-32 flex items-center justify-between sticky top-0 left-0 z-50 bg-white backdrop-blur-sm backdrop-saturate-100 shadow-md text-black">
      <span className="w-max flex items-center gap-4 select-none">
        <Image src="/logo.png" alt="Planner logo" width={50} height={50} className="w-7"/>
        <h1 className="text-2xl">Easy TEC</h1>
      </span>

      <span className="w-max flex items-center gap-4 ">
        <Badge content={user.notifications} shape="circle" color="danger" className="cursor-pointer">
          <FaRegBell className="text-black text-lg cursor-pointer"/>
        </Badge>
        <Link href="/configuracion">
          <FaGear  className="text-black text-lg cursor-pointer"/>
        </Link>
      <UserUI 
        name={user.name}
        carrier={user.carrier}
        avatarImage={user.avatarImageURL}
      />
      </span>
    </header>
  )
}

export default Header