import { ChangeEvent, useMemo, useState } from "react"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { Period } from "@/shared/types/entities/Period"
import { CustomModal } from "@/shared/components/nextui/Modal"
import { periodToString } from "@/shared/utils"
import { useAuthStore } from "@/modules/auth/store/auth.store"
import { getPeriods, getPeriodsByUserId } from "../services/periods.service"
import { Button, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem, SelectSection } from "@easy-tec/ui"
import { useOptimisticMutation } from "@/shared/hooks/useOptimisticMutation"
import { assingPeriodToUser } from "@/modules/user/services/user.service"
// import { Select } from "@/shared/components/nextui/Select"

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

export const AddAvailablePeriodModal = (props: Props) => {

  const user = useAuthStore(state => state.user)
  const queryClient = useQueryClient()

  const [selectedPeriod, setSelectedPeriod] = useState("")

  const availablePeriodsQuery = useQuery<Period[]>({
    queryKey: ["availablePeriods"],
    queryFn: getPeriods,
    enabled: props.isOpen,
    staleTime: 1000 * 60 * 5,
  })

  const userAssignedPeriodsQuery = useQuery<Period[]>({
    queryKey: ["periods", user?.id],
    queryFn: () => getPeriodsByUserId(user?.id),
    enabled: !!user,
    staleTime: Infinity,
  })

  const sections = useMemo(
    () => Array.from(new Set(availablePeriodsQuery.data?.map(period => period.type))),
    [availablePeriodsQuery]
  )

  const periodsOptions = useMemo(
    () => availablePeriodsQuery.data?.map(period => ({
      section: period.type,
      label: periodToString(period),
      value: period.id.toString()
    })) || [],
    [availablePeriodsQuery.data]
  )

  const disabledKeys = useMemo(
    () => userAssignedPeriodsQuery.data?.map(period => period.id.toString()) || [],
    [userAssignedPeriodsQuery.data]
  )

  const handleAddPeriod = async (periodId: number) => {
    if (selectedPeriod && user) {
      return assingPeriodToUser(periodId)
    }
  }

  const assingPeriodToUserMutation = useOptimisticMutation<Period, Error, { periodId: number }>({
    mutationKey: ["periods", user?.id],
    mutationFn: (data) => handleAddPeriod(data.periodId),
    onMutateOptimistic: ({ periodId }, previousPeriods) => {
      const newPeriod = availablePeriodsQuery.data?.find(period => period.id === periodId) as Period

      return [
        ...previousPeriods,
        newPeriod
      ]
    },
    rollbackOptimistic: (previousTasks) => {
      queryClient.setQueryData(["periods", user?.id], previousTasks)
    },
    onSuccessMessage: (data) => `Periodo "${periodToString(data)}" añadido correctamente`,
    onErrorMessage: () => "Error al añadir el periodo"
  })

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPeriod(e.target.value)
  }

  return <CustomModal
    isOpen={props.isOpen}
    onOpenChange={props.onOpenChange}
    size="sm"
  >
    <ModalContent>
      <ModalHeader>
        Añade un periodo a tu cuenta
      </ModalHeader>
      <ModalBody>
        <Select
          label="Periodos disponibles"
          placeholder="Selecciona un periodo"
          isLoading={availablePeriodsQuery.isFetching}
          disabledKeys={disabledKeys}
          value={[selectedPeriod]}
          onChange={handleChange}
        >
          {sections.map(section => (
            <SelectSection
              key={section}
              title={section}
              classNames={{ heading: "flex w-full sticky top-1 z-20 py-1.5 px-2 bg-default-100 shadow-small rounded-small" }}
            >
              {periodsOptions.filter(option => option.section === section).map(option => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  textValue={option.label}
                  classNames={{ title: "flex justify-between items-center" }}
                >
                  {option.label}
                  {userAssignedPeriodsQuery.data?.find(period => period.id === Number(option.value)) && (
                    <span className="text-xs text-success-500 font-bold">Añadido</span>
                  )}
                </SelectItem>
              ))}
            </SelectSection>
          ))}
        </Select>
      </ModalBody>
      <ModalFooter>
        <Button
          size="sm"
          color="danger"
          onPress={props.onOpenChange}
        >
          Cancelar
        </Button>
        <Button
          size="sm"
          color="primary"
          onPress={() => {
            props.onOpenChange()
            assingPeriodToUserMutation.mutate({ periodId: Number(selectedPeriod) })
          }}
        >
          Guardar
        </Button>
      </ModalFooter>
    </ModalContent>
  </CustomModal>
}