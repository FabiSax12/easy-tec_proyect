import { useState, useEffect, useMemo } from "react"
import { useMutation, useQuery } from "@tanstack/react-query"
import { periodLongToShort } from "@/shared/utils"
import { createUserCourse } from "@/course/services/courses.service"
import { Select } from "@/components"
import { useAuthStore } from "@/auth/store"
import {
  Modal, ModalContent, ModalHeader,
  ModalBody, ModalFooter, Button,
  Input, Chip, SelectItem, ChipProps,
} from "@nextui-org/react"

import type { Course, Period } from "@/shared/interfaces"

const statusOptions = [
  { label: "Pendiente", value: "pendiente" },
  { label: "Cursando", value: "cursando" },
  { label: "Aprobado", value: "aprobado" },
]

const statusColorMap: Record<string, ChipProps["color"]> = {
  aprobado: "success",
  pendiente: "default",
  cursando: "primary",
}

const initialFormData = {
  name: "",
  codex: "",
  teacher: "",
  credits: 0,
  period: "",
  state: "",
  academicPeriodId: 0,
} as Omit<Course, "id">

const modalBodyInputs = [
  { label: "Nombre", key: "name", type: "text" },
  { label: "Código", key: "codex", type: "text" },
  { label: "Créditos", key: "credits", type: "number", min: 0 },
  { label: "Profesor", key: "teacher", type: "text" },
]

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

export const AddCourseModal = ({ isOpen, onOpenChange }: Props) => {
  const { user } = useAuthStore()
  const [formData, setFormData] = useState(initialFormData)
  const periodsQuery = useQuery<Period[]>({
    queryKey: ["userPeriods"],
    queryFn: () => fetch(`/api/periods/user/${user!.id}`).then(res => res.json()),
    enabled: !!user
  })
  const courseMutation = useMutation<Course, Error, { data: Omit<Course, "id"> }>({
    mutationKey: ["addedCourse"],
    mutationFn: ({ data }) => createUserCourse(data),
  })

  const periods = useMemo(() => {
    if (periodsQuery.data) {
      return periodsQuery.data?.map(p => ({
        label: `${p.type} ${p.typeId}`,
        value: p.id.toString(),
      }))
    }
    return []
  }, [periodsQuery])

  useEffect(() => {
    if (!user || !isOpen) resetForm()
  }, [user, isOpen])

  const resetForm = () => setFormData(initialFormData)

  const handleChange = (key: keyof Omit<Course, "id">) => (value: string | number) => {
    setFormData(prev => ({ ...prev, [key]: value }))

    if (key === "academicPeriodId") {
      const period = periodsQuery.data?.find(p => p.id == value)
      setFormData(prev => ({
        ...prev,
        period: period ? periodLongToShort(`${period.type} ${period.typeId}`) : ""
      }))
    }
  }

  const onAccept = async () => {
    if (!user) return
    await courseMutation.mutateAsync({ data: formData })
    onOpenChange()
  }

  const canAddCourse = Object.values(formData).every(field => !!field || field === 0)

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="opaque">
      <ModalContent>
        <ModalHeader>Añadir nuevo curso</ModalHeader>
        <ModalBody>
          {modalBodyInputs.map(({ label, key, type, min }) => (
            <Input
              required
              key={key}
              size="sm"
              variant="bordered"
              label={label}
              type={type}
              min={min}
              value={formData[key as keyof Omit<Course, "id">].toString()}
              onChange={e =>
                handleChange(key as keyof Omit<Course, "id">)(Number(e.target.value) || e.target.value)
              }
            />
          ))}
          <div className="flex gap-3 flex-col sm:flex-row">
            <Select
              required
              size="sm"
              label="Periodo"
              variant="bordered"
              options={periods}
              onChange={e => handleChange("academicPeriodId")(Number(e.target.value))}
            />
            <Select
              required
              size="sm"
              label="Estado"
              variant="bordered"
              options={statusOptions}
              onChange={e => handleChange("state")(e.target.value)}
            >
              {statusOptions.map((status) => (
                <SelectItem key={status.value} value={status.value} textValue={status.label}>
                  <Chip color={statusColorMap[status.value]} size="sm" variant="flat">
                    {status.label}
                  </Chip>
                </SelectItem>
              ))}
            </Select>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="flat" onPress={onOpenChange}>
            Cancelar
          </Button>
          <Button color="primary" onPress={onAccept} isDisabled={!canAddCourse || courseMutation.isPending}>
            {courseMutation.isPending ? "Añadiendo..." : "Añadir"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
