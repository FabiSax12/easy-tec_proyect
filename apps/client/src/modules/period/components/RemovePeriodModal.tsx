import { ChangeEvent, useMemo, useState } from "react"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { Period } from "@/shared/types/entities/Period"
import { CustomModal } from "@/shared/components/nextui/Modal"
import { periodToString } from "@/shared/utils"
import { useAuthStore } from "@/modules/auth/store/auth.store"
import { deleteUserPeriod, getPeriodsByUserId } from "../services/periods.service"
import { Alert, Button, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react"
import { useOptimisticMutation } from "@/shared/hooks/useOptimisticMutation"
import { Select } from "@/shared/components/nextui/Select"
import { Course } from "@/shared/types/entities/Course"

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

export const RemovePeriodModal = (props: Props) => {

  const user = useAuthStore(state => state.user)
  const queryClient = useQueryClient()

  const [selectedPeriod, setSelectedPeriod] = useState("")

  const userAssignedPeriodsQuery = useQuery<Period[]>({
    queryKey: ["periods", user!.id],
    queryFn: () => getPeriodsByUserId(user!.id),
    enabled: !!user,
    staleTime: 1000 * 60 * 5,
  })

  const periodsOptions = useMemo(
    () => userAssignedPeriodsQuery.data?.map(period => ({
      label: periodToString(period),
      value: period.id.toString()
    })) || [],
    [userAssignedPeriodsQuery.data]
  )

  const removePeriodToUserMutation = useOptimisticMutation<Period, Error, { userId: number, periodId: number }>({
    mutationKey: ["periods", user!.id],
    mutationFn: (data) => deleteUserPeriod(data.userId, data.periodId),
    onMutateOptimistic: ({ periodId }, previousPeriods) => {

      queryClient.setQueryData<Course[]>(
        ["courses", user?.id],
        (prev) => prev?.filter(course => course.periodId !== periodId)
      )

      return previousPeriods.filter(period => period.id !== periodId)
    },
    rollbackOptimistic: (previousTasks) => {
      queryClient.setQueryData(["periods", user!.id], previousTasks)
    },
    onSuccessMessage: (data) => `Periodo "${periodToString(data)}" eliminado correctamente`,
    onErrorMessage: () => "Error al eliminar el periodo"
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
      <ModalHeader>Eliminar un periodo</ModalHeader>
      <ModalBody>
        <Select
          controlled
          label="Periodos disponibles"
          placeholder="Selecciona un periodo"
          isLoading={userAssignedPeriodsQuery.isFetching}
          options={periodsOptions}
          value={[selectedPeriod]}
          onChange={handleChange}
        />
        <Alert
          title="Advertencia"
          description="Eliminar un periodo de tu cuenta tambien eliminará todos los cursos y tareas asociadas a este."
          color="warning"
          variant="faded"
        />
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
            removePeriodToUserMutation.mutate({ userId: user!.id, periodId: Number(selectedPeriod) })
          }}
        >
          Eliminar
        </Button>
      </ModalFooter>
    </ModalContent>
  </CustomModal>
}