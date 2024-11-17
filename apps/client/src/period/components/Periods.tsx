import { useAuth, useFetch } from "@/shared/hooks"
import type { Period } from "@/shared/interfaces"
import { formatDate } from "@/shared/utils/formatDate"
import { PeriodButton, AddPeriodButton } from "@/period/components"
import { Spinner } from "@/components"

export const Periods = () => {
  const { user } = useAuth()
  const state = useFetch<Period[]>(`/api/periods/user/${user?.id}`, [user])

  console.log("Render", state.status)
  return (
    <div className="grid grid-cols-2 lg:block">
      {state.status === "loading" && <Spinner />}
      {state.status === "error" && <p>{state.error?.message}</p>}
      {state.status === "success" && state.data?.map(period => (
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