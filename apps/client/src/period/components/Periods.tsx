import { useRef } from "react"
import { useQuery } from "@tanstack/react-query"
import { Spinner } from "@/components"
import { useAuthStore } from "@/auth/store"
import { periodsByUserId } from "@/period/services/periods.service"
import { PeriodButton } from "@/period/components"
import { Button, ScrollShadow } from "@nextui-org/react"
import { IoChevronForward, IoChevronBack } from "react-icons/io5"

import type { Period } from "@/shared/interfaces"
import { PeriodsSkeleton } from "./PeriodsSkeleton"

export const Periods = () => {
  const { user } = useAuthStore()
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const periodsQuery = useQuery<Period[]>({
    queryKey: ["periods"],
    queryFn: () => periodsByUserId(user?.id),
    enabled: !!user,
    staleTime: 1000 * 60 * 5,
  })

  const scrollLeft = () => scrollContainerRef.current?.scrollBy({ left: -400, behavior: "smooth" })
  const scrollRight = () => scrollContainerRef.current?.scrollBy({ left: 400, behavior: "smooth" })

  return (
    <div className="relative">
      <Button
        isIconOnly
        size="sm"
        radius="full"
        color="primary"
        className="absolute right-10 -top-7 transform -translate-y-1/2 z-10"
        onClick={scrollLeft}
      >
        <IoChevronBack size={15} />
      </Button>
      <Button
        isIconOnly
        size="sm"
        radius="full"
        color="primary"
        className="absolute right-0 -top-7 transform -translate-y-1/2 z-10"
        onClick={scrollRight}
      >
        <IoChevronForward size={15} />
      </Button>

      <ScrollShadow ref={scrollContainerRef} orientation="horizontal" hideScrollBar className="scroll-smooth">
        <div className="flex gap-6 scroll-smooth">
          {periodsQuery.isFetching && <PeriodsSkeleton />}
          {periodsQuery.isError && <p>{periodsQuery.error.message}</p>}
          {periodsQuery.isSuccess && !periodsQuery.isFetching &&
            periodsQuery.data?.map((period) => (
              <PeriodButton
                key={period.id}
                id={period.id}
                code={`${period.type.charAt(0)}-${period.typeId}`}
                title={`${period.type} ${period.typeId}`}
                startDate={period.startDate}
                endDate={period.endDate}
              />
            ))
          }
        </div>
      </ScrollShadow>
    </div>
  )
}
