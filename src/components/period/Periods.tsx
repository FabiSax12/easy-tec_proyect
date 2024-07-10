import { getServerSession } from "next-auth"
import { getUserPeriods } from "@/actions"
import { formatDate } from "@/utils"
import { PeriodButton, AddPeriodButton } from "@/components/period"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"

export const Periods = async () => {
  const session = await getServerSession(authOptions)
  const periods = session ? await getUserPeriods(parseInt(session.user.id)) : null

  return (
    <div className="grid grid-cols-2 lg:block">
      {periods && periods.map((period) => (
        <PeriodButton
          key={period.id}
          id={period.id}
          code={`${period.type.charAt(0)}-${period.typeId}`}
          title={`${period.type} ${period.typeId}`}
          startDate={formatDate(period.startDate.toString())}
          endDate={formatDate(period.endDate.toString())}
        />
      ))}
      <AddPeriodButton />
    </div>
  )
}
