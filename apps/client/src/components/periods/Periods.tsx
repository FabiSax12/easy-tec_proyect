// import { getServerSession } from "next-auth"
// import { getUserPeriods } from "@/actions"
// import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import { PeriodButton, AddPeriodButton } from "@/components/periods"
import { formatDate } from "@/utils/formatDate"

export const Periods = () => {
  // const session = await getServerSession(authOptions)
  // const periods = session ? await getUserPeriods(parseInt(session.user.id)) : null
  const periods = []

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