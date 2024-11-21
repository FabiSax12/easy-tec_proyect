import { useQuery } from "@tanstack/react-query"
import { formatDate } from "@/shared/utils"
import { Spinner } from "@/components"
import { useAuthStore } from "@/auth/store"
import { periodsByUserId } from "@/period/services/periods.service"
import { PeriodButton, AddPeriodButton } from "@/period/components"

import type { Period } from "@/shared/interfaces"

export const Periods = () => {
  const { user } = useAuthStore()

  const periodsQuery = useQuery<Period[]>({
    queryKey: ["periods"],
    queryFn: () => periodsByUserId(user?.id),
    enabled: !!user,
  })

  return (
    <div className="grid grid-cols-2 lg:block">
      {periodsQuery.isFetching && <Spinner />}
      {periodsQuery.isError && <p>{periodsQuery.error.message}</p>}
      {periodsQuery.isSuccess && periodsQuery.data?.map(period => (
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