"use client"
import { useState, useEffect, ChangeEvent } from "react"
import { Select, NumberInput } from "@/components"
import useUserInfo from "@/store/user"
import { formatDate } from "@/utils/FormatDate"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react"

const data = [{ label: "Semestre", value: "S" }, { label: "Verano", value: "V" }]

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

export const ModalSemestre = ({ isOpen, onOpenChange }: Props) => {
  const [modality, setModality] = useState("")
  const [title, setTitle] = useState("")
  const [id, setId] = useState(0)
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (modality === "") {
      setTitle("")
      setId(0)
    }
    else if (modality === "S") {
      setTitle("Semestre")
      setId(1)
    }
    else if (modality === "V") {
      setTitle("Verano")
      setId(2024)
    }
  }, [modality])

  const addSemester = useUserInfo((state) => state.addSemester)

  const onAccept = async () => {
    setLoading(true)
    const semestreData = {
      title: `${title} ${id}`,
      id: `${modality}-${id}`,
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
    }
    try {
      setTimeout(() => { }, 2000)
      addSemester(semestreData)
      setModality("")
      setStartDate("")
      setEndDate("")
      onOpenChange()
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
                  options={data}
                  autoFocus
                  label="Título"
                  placeholder="Modalidad"
                  variant="bordered"
                  value={title}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => setModality(e.target.value)}
                />
                {
                  modality !== "" ? (
                    <NumberInput
                      label={modality === "S" ? "Semestre" : "Año"}
                      className="flex-[1] w-full"
                      value={id}
                      setValue={setId}
                      min={1}
                    />
                  ) : (
                    <NumberInput
                      className="flex-[1] w-full"
                      value={0}
                      setValue={setId}
                      disabled
                    />
                  )
                }
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
              <Button color="primary" onPress={onAccept} isDisabled={!canAddSemester || loading} >
                {loading ? "Añadiendo..." : "Añadir"}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}