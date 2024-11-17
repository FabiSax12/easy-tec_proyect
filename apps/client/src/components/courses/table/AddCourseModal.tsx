import { useState, useEffect, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth, useFetch, usePost } from "@/hooks"
import { Course, Period } from "@/types/api"
import { Select } from "@/components"
import {
  Modal, ModalContent, ModalHeader,
  ModalBody, ModalFooter, Button,
  Input, Chip, SelectItem, ChipProps,
} from "@nextui-org/react"
import { periodLongToShort } from "@/utils/format-period"

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

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

export const AddCourseModal = ({ isOpen, onOpenChange }: Props) => {
  const navigate = useNavigate()
  const { user } = useAuth()

  const { postData, status: coursePostStatus } = usePost<Omit<Course, "id">>()
  const periodsFetch = useFetch<Period[]>(user ? `/api/periods/user/${user?.id}` : null, [user])

  const [formData, setFormData] = useState<Omit<Course, "id">>({
    name: "",
    codex: "",
    teacher: "",
    credits: 0,
    period: "",
    state: "",
    academicPeriodId: 0,
  })

  const periods = useMemo(() => {
    if (periodsFetch.data) {
      return periodsFetch.data?.map(p => ({
        label: `${p.type} ${p.typeId}`,
        value: p.id.toString(),
      }))
    }
    return []
  }, [periodsFetch])

  useEffect(() => {
    if (!user || !isOpen) {
      resetForm()
    }
  }, [isOpen, user])

  const resetForm = () => {
    setFormData({
      name: "",
      codex: "",
      teacher: "",
      credits: 0,
      period: "",
      state: "",
      academicPeriodId: 0,
    })
  }

  const handleChange = (key: keyof Omit<Course, "id">) => (value: string | number) => {
    setFormData(prev => ({ ...prev, [key]: value }))

    if (key === "academicPeriodId") {
      const period = periodsFetch.data?.find(p => p.id == value)
      setFormData(prev => ({
        ...prev,
        period: period ? periodLongToShort(`${period.type} ${period.typeId}`) : ""
      }))
    }
  }

  const onAccept = async () => {
    // if (!user || periodsFetch.status !== "success") return

    await postData("/api/courses", formData)
    onOpenChange()
    // navigate(0)
  }

  const canAddCourse = Object.values(formData).every(field => !!field)

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="opaque">
      <ModalContent>
        <ModalHeader>Añadir nuevo curso</ModalHeader>
        <ModalBody>
          {[
            { label: "Nombre", key: "name", type: "text" },
            { label: "Código", key: "codex", type: "text" },
            { label: "Créditos", key: "credits", type: "number", min: 0 },
            { label: "Profesor", key: "teacher", type: "text" },
          ].map(({ label, key, type, min }) => (
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
          <Button color="primary" onPress={onAccept} isDisabled={!canAddCourse || coursePostStatus === "loading"}>
            {coursePostStatus === "loading" ? "Añadiendo..." : "Añadir"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
