import { NextPage } from 'next'
import Image from 'next/image'
import UserUI from '@/ui/nextui/User'
import { Badge } from '@nextui-org/badge';
import { Button } from '@nextui-org/button';
import { FaRegBell, FaGear } from "react-icons/fa6";

const user = {
  name: "Fabián Vargas",
  carrier: "Ingenierían en Computación",
  avatarImageURL: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  notifications: 2
}

interface Props {}

const Header: NextPage<Props> = ({}) => {
  return (
    <header className="w-full h-14 px-32 flex items-center justify-between mb-4 sticky top-0 left-0 z-50 bg-white backdrop-blur-sm backdrop-saturate-100  text-black">
      <span className="w-max flex items-center gap-4 ">
        <Image src="/logo.png" alt="Planner logo" width={50} height={50} className="w-7"/>
        <h1 className="text-2xl">Easy TEC</h1>
      </span>
      <span className="w-max flex items-center gap-4 ">
      <Badge content={user.notifications} shape="circle" color="danger">
        <Button
          radius="full"
          isIconOnly
          aria-label="more than 99 notifications"
          variant="light"
        >
          <FaRegBell className="text-black text-lg"/>
        </Button>
      </Badge>
      <Button
          radius="full"
          isIconOnly
          aria-label="more than 99 notifications"
          variant="light"
        >
          <FaGear  className="text-black text-lg"/>
        </Button>
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