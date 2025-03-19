import { useRef, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { useAuthStore } from "@/modules/auth/store/auth.store"
import { getPeriodsByUserId } from "@/modules/period/services/periods.service"
import { PeriodButton } from "@/modules/period/components"
import { Button, ScrollShadow } from "@heroui/react"
import { IoChevronForward, IoChevronBack } from "react-icons/io5"
import { PeriodsSkeleton } from "./PeriodsSkeleton"
import { FaPlus, FaTrash } from "react-icons/fa"

import type { Period } from "@/shared/types/entities/Period"
import { AddAvailablePeriodModal } from "./AddAvailablePeriodModal"
import { periodToString } from "@/shared/utils"
import { RemovePeriodModal } from "./RemovePeriodModal"

export const Periods = () => {
  const { user } = useAuthStore()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false)

  const periodsQuery = useQuery<Period[]>({
    queryKey: ["periods", user?.id],
    queryFn: () => getPeriodsByUserId(user?.id),
    enabled: !!user,
    staleTime: Infinity,
  })

  const scrollLeft = () => scrollContainerRef.current?.scrollBy({ left: -400, behavior: "smooth" })
  const scrollRight = () => scrollContainerRef.current?.scrollBy({ left: 400, behavior: "smooth" })

  return (
    <div className="relative">
      <span className="absolute right-0 -top-7 transform -translate-y-1/2 z-10 flex gap-2">
        <Button
          size="sm"
          color="danger"
          endContent={<FaTrash />}
          onPress={() => setIsRemoveModalOpen(true)}
          isDisabled={periodsQuery.isFetching || periodsQuery.isError || periodsQuery.data?.length === 0}
        >
          Eliminar
        </Button>
        <Button
          size="sm"
          color="primary"
          endContent={<FaPlus />}
          onPress={() => setIsAddModalOpen(true)}
          isDisabled={periodsQuery.isFetching || periodsQuery.isError}
        >
          Añadir
        </Button>
        <Button
          isIconOnly
          size="sm"
          radius="full"
          color="primary"
          onPress={scrollLeft}
          isDisabled={periodsQuery.isFetching || periodsQuery.isError || periodsQuery.data?.length === 0}
        >
          <IoChevronBack size={15} />
        </Button>
        <Button
          isIconOnly
          size="sm"
          radius="full"
          color="primary"
          onPress={scrollRight}
          isDisabled={periodsQuery.isFetching || periodsQuery.isError || periodsQuery.data?.length === 0}
        >
          <IoChevronForward size={15} />
        </Button>
      </span>

      <ScrollShadow ref={scrollContainerRef} orientation="horizontal" hideScrollBar className="scroll-smooth">
        <div className="flex gap-6 scroll-smooth">
          {periodsQuery.isLoading && <PeriodsSkeleton />}
          {periodsQuery.isError && <p>{periodsQuery.error.message}</p>}
          {periodsQuery.isSuccess && !periodsQuery.isFetching && periodsQuery.data.length === 0 &&
            <p className="w-full text-foreground-400 align-middle text-center h-40">No se encontraron periodos</p>
          }
          {periodsQuery.isSuccess && !periodsQuery.isLoading && periodsQuery.data.length > 0 &&
            periodsQuery.data?.map((period) => (
              <PeriodButton
                key={period.id}
                id={period.id}
                code={period.code}
                title={periodToString(period)}
                startDate={period.startDate}
                endDate={period.endDate}
              />
            ))
          }
        </div>
      </ScrollShadow>
      <AddAvailablePeriodModal isOpen={isAddModalOpen} onOpenChange={() => setIsAddModalOpen(prev => !prev)} />
      <RemovePeriodModal isOpen={isRemoveModalOpen} onOpenChange={() => setIsRemoveModalOpen(prev => !prev)} />
    </div>
  )
}
