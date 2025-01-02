import { useRef, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { useAuthStore } from "@/auth/store"
import { createPeriod, periodsByUserId } from "@/period/services/periods.service"
import { AddPeriodModal, PeriodButton } from "@/period/components"
import { Button, ScrollShadow } from "@nextui-org/react"
import { IoChevronForward, IoChevronBack } from "react-icons/io5"

import type { Period } from "@/shared/interfaces"
import { PeriodsSkeleton } from "./PeriodsSkeleton"
import { FaPlus } from "react-icons/fa"
import { useOptimisticCreate } from "@/shared/hooks/useOptimisticCreate"

export const Periods = () => {
  const { user } = useAuthStore()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const periodsQuery = useQuery<Period[]>({
    queryKey: ["periods"],
    queryFn: () => periodsByUserId(user?.id),
    enabled: !!user,
    staleTime: 1000 * 60 * 5,
  })

  const { mutate: periodMutate, isPending: isCreatingPeriod } = useOptimisticCreate({
    queryKey: ["periods"],
    mutationFn: createPeriod,
    getUpdatedData: (data) => data,
  })

  const scrollLeft = () => scrollContainerRef.current?.scrollBy({ left: -400, behavior: "smooth" })
  const scrollRight = () => scrollContainerRef.current?.scrollBy({ left: 400, behavior: "smooth" })

  return (
    <div className="relative">
      <span className="absolute right-0 -top-7 transform -translate-y-1/2 z-10 flex gap-2">
        <Button
          size="sm"
          color="primary"
          endContent={<FaPlus />}
          onClick={() => setIsModalOpen(true)}
        >
          Añadir
        </Button>
        <Button
          isIconOnly
          size="sm"
          radius="full"
          color="primary"
          onClick={scrollLeft}
          isDisabled={periodsQuery.isFetching || periodsQuery.isError || periodsQuery.data?.length === 0}
        >
          <IoChevronBack size={15} />
        </Button>
        <Button
          isIconOnly
          size="sm"
          radius="full"
          color="primary"
          onClick={scrollRight}
          isDisabled={periodsQuery.isFetching || periodsQuery.isError || periodsQuery.data?.length === 0}
        >
          <IoChevronForward size={15} />
        </Button>
      </span>

      <ScrollShadow ref={scrollContainerRef} orientation="horizontal" hideScrollBar className="scroll-smooth">
        <div className="flex gap-6 scroll-smooth">
          {periodsQuery.isFetching && <PeriodsSkeleton />}
          {periodsQuery.isError && <p>{periodsQuery.error.message}</p>}
          {periodsQuery.isSuccess && !periodsQuery.isFetching && periodsQuery.data.length === 0 &&
            <p className="w-full text-foreground-400 align-middle text-center h-40">No se encontraron periodos</p>
          }
          {periodsQuery.isSuccess && !periodsQuery.isFetching && periodsQuery.data.length > 0 &&
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
      <AddPeriodModal isOpen={isModalOpen} onOpenChange={() => setIsModalOpen(prev => !prev)} />
    </div>
  )
}
