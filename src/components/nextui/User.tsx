import { User } from "@nextui-org/react"

interface Props {
  name: string | undefined
  lastname: string | undefined
  carrier?: string | null
  avatarImage?: string | null
}

export const UserUI = ({ name, lastname, carrier, avatarImage }: Props) => {
  return (
    <User
      name={`${name} ${lastname}`}
      description={carrier ?? "Sin carrera"}
      avatarProps={{
        src: avatarImage ?? "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
      }}
    />
  )
}
