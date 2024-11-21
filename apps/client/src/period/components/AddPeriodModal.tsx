import { useState, useEffect, ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "@/auth/store"
import { Select, NumberInput } from "@/components"
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
  const [modality, setModality] = useState("")
  const [title, setTitle] = useState("")
  const [id, setId] = useState(0)
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [loading, setLoading] = useState(false)

  const { user } = useAuthStore()

  useEffect(() => {
    switch (modality) {
      case "S":
        setTitle("Semestre")
        setId(1)
        break
      case "V":
        setTitle("Verano")
        setId(2024)
        break
      default:
        setTitle("")
        setId(0)
        break
    }
  }, [modality])

  const onAccept = async () => {
    setLoading(true)

    const semesterData = {
      type: title,
      typeId: id,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    }

    try {
      const res = await addPeriod(user!.id, semesterData)
      const data = await res.json()

      if (res.ok) {
        setModality("")
        setStartDate("")
        setEndDate("")
        onOpenChange()
        navigate(0)
      } else {
        console.error("Error al añadir semestre:", data)
      }
    } catch (error) {
      console.error("Error al añadir semestre:", error)
    } finally {
      setLoading(false)
    }
  }

  const canAddSemester = title && startDate && endDate

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="opaque"
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          },
        },
      }}
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
                  value={modality}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => setModality(e.target.value)}
                />
                <NumberInput
                  label={modality === "S" ? "Semestre" : "Año"}
                  className="flex-[1] w-full"
                  value={id}
                  setValue={setId}
                  min={1}
                  disabled={!modality}
                />
              </div>
              <Input
                label="Fecha de inicio"
                placeholder="Fecha Inicial"
                type="date"
                variant="bordered"
                value={startDate}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setStartDate(e.target.value)}
              />
              <Input
                label="Fecha de finalización"
                placeholder="Fecha final"
                type="date"
                variant="bordered"
                value={endDate}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEndDate(e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Cancelar
              </Button>
              <Button color="primary" onPress={onAccept} isDisabled={!canAddSemester || loading}>
                {loading ? "Añadiendo..." : "Añadir"}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}