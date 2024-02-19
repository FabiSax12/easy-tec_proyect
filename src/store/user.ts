import {create} from "zustand"

interface User {
  name: string
  carrier: string
  avatarImageURL: string
  notifications: number
}

const useUserInfo = create<User>((set, get) => ({
  name: "Fabián Vargas",
  carrier: "Ingenierían en Computación",
  avatarImageURL: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  notifications: 2
}))

export default useUserInfo