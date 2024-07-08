import { getServerSession } from "next-auth"
import { getUserPeriods } from "@/actions"
import { formatDate } from "@/utils"
import { SemestreButton, AddSemesterButton } from "@/components/semester"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"

export const Semestres = async () => {
  const session = await getServerSession(authOptions)
  const periods = session ? await getUserPeriods(parseInt(session.user.id)) : null

  return (
    <div className="grid grid-cols-2 lg:block">
      {periods && periods.map((period) => (
        <SemestreButton
          key={period.id}
          id={`${period.type.charAt(0)}-${period.typeId}`}
          title={`${period.type} ${period.typeId}`}
          startDate={formatDate(period.startDate.toString())}
          endDate={formatDate(period.endDate.toString())}
        />
      ))}
      <AddSemesterButton />
    </div>
  )
}
