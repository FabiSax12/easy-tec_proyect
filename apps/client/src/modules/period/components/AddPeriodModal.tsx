import { useState, useEffect, ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "@/modules/auth/store/auth.store"
import { Select, NumberInput } from "@/shared/components"
import {
  Modal, ModalContent, ModalHeader,
  ModalBody, ModalFooter, Button, Input
} from "@nextui-org/react"

const options = [{ label: "Semestre", value: "S" }, { label: "Verano", value: "V" }]

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

interface PeriodData {
  type: string;
  typeId: number;
  startDate: Date;
  endDate: Date;
}

function addPeriod(userId: number, periodData: PeriodData) {
  return fetch("/api/periods", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, ...periodData }),
  })
}

export const AddPeriodModal = ({ isOpen, onOpenChange }: Props) => {
  const navigate = useNavigate()
  const { user } = useAuthStore()
  const [formState, setFormState] = useState({
    modality: "",
    title: "",
    id: 0,
    startDate: "",
    endDate: "",
    loading: false
  })

  useEffect(() => {
    switch (formState.modality) {
      case "S":
        setFormState(prev => ({
          ...prev,
          title: "Semestre",
          id: 1
        }))
        break
      case "V":
        setFormState(prev => ({
          ...prev,
          title: "Verano",
          id: 2024
        }))
        break
      default:
        setFormState(prev => ({
          ...prev,
          title: "",
          id: 0
        }))
        break
    }
  }, [formState.modality])

  const onAccept = async () => {
    setFormState(prev => ({ ...prev, loading: true }))

    const semesterData = {
      type: formState.title,
      typeId: formState.id,
      startDate: new Date(formState.startDate),
      endDate: new Date(formState.endDate),
    }

    try {
      const res = await addPeriod(user!.id, semesterData)
      const data = await res.json()

      if (res.ok) {
        setFormState(prev => ({
          ...prev,
          modality: "",
          startDate: "",
          endDate: ""
        }))
        onOpenChange()
        navigate(0)
      } else {
        console.error("Error al añadir semestre:", data)
      }
    } catch (error) {
      console.error("Error al añadir semestre:", error)
    } finally {
      setFormState(prev => ({ ...prev, loading: false }))
    }
  }

  const canAddSemester = formState.title && formState.startDate && formState.endDate

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="opaque"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Añadir nuevo semestre</ModalHeader>
            <ModalBody>
              <div className="flex gap-6">
                <Select
                  className="flex-[3]"
                  options={options}
                  autoFocus
                  label="Título"
                  placeholder="Modalidad"
                  variant="bordered"
                  value={formState.modality}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setFormState(prev => ({ ...prev, modality: e.target.value }))
                  }
                />
                <NumberInput
                  label={formState.modality === "S" ? "Semestre" : "Año"}
                  className="flex-[1] w-full"
                  value={formState.id}
                  setValue={(value: number) => setFormState(prev => ({ ...prev, id: value }))}
                  min={1}
                  disabled={!formState.modality}
                />
              </div>
              <Input
                label="Fecha de inicio"
                placeholder="Fecha Inicial"
                type="date"
                variant="bordered"
                value={formState.startDate}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormState(prev => ({ ...prev, startDate: e.target.value }))
                }
              />
              <Input
                label="Fecha de finalización"
                placeholder="Fecha final"
                type="date"
                variant="bordered"
                value={formState.endDate}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormState(prev => ({ ...prev, endDate: e.target.value }))
                }
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Cancelar
              </Button>
              <Button color="primary" onPress={onAccept} isDisabled={!canAddSemester || formState.loading}>
                {formState.loading ? "Añadiendo..." : "Añadir"}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}