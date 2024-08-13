import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import { ChangePassword, Profile } from "@/components/user-config"

export const dynamic = true

interface Props { }

export default async function ConfigurationPage() {
  const session = await getServerSession(authOptions)

  if (!session) redirect("auth/signin")
  const { user } = session

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <Profile user={user} />
      <ChangePassword userId={parseInt(user.id)} />
    </div>
  )
}
