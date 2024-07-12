"use client"
import { useState, useEffect, ChangeEvent } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { addCourse, getUserPeriods } from "@/actions"
import { Select } from "@/components"
import {
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,
  Button, Input, Chip, SelectItem, ChipProps
} from "@nextui-org/react"

const statusOptions = [
  { label: "Pendiente", value: "pendiente" },
  { label: "Cursando", value: "cursando" },
  { label: "Aprobado", value: "aprobado" }
]

const statusColorMap: Record<string, ChipProps["color"]> = {
  aprobado: "success",
  pendiente: "default",
  cursando: "primary",
}

interface Option {
  label: string
  value: string
}

interface Props {
  isOpen: boolean
  onOpenChange: () => void
}

export const AddCourseModal = ({ isOpen, onOpenChange }: Props) => {
  const router = useRouter()
  const { data: session } = useSession()
  const [loading, setLoading] = useState(false)

  // Modal inputs
  const [courseName, setCourseName] = useState("")
  const [code, setCode] = useState("")
  const [teacher, setTeacher] = useState("")
  const [credits, setCredits] = useState(0)
  const [periods, setPeriods] = useState<Option[]>([])
  const [selectedPeriod, setSelectedPeriod] = useState("")
  const [state, setState] = useState("")

  useEffect(() => {
    if (!session) return

    if (!isOpen) {
      resetForm()
      return
    }

    const fetchUserPeriods = async () => {
      try {
        const periods = await getUserPeriods(parseInt(session.user.id))
        const mappedPeriods = periods.map(period => ({
          label: `${period.type} ${period.typeId}`,
          value: period.id.toString()
        }))
        setPeriods(mappedPeriods)
      } catch (error) {
        console.error("Error al obtener periodos del usuario:", error)
      }
    }

    fetchUserPeriods()
  }, [isOpen, session])

  const resetForm = () => {
    setCourseName("")
    setCode("")
    setTeacher("")
    setCredits(0)
    setSelectedPeriod("")
    setState("")
  }

  const onAccept = async () => {
    setLoading(true)
    try {
      if (!session) return

      const period = periods.find(period => period.value === selectedPeriod)?.label as string
      await addCourse({
        name: courseName,
        codex: code,
        teacher,
        credits,
        academicPeriodId: parseInt(selectedPeriod),
        state,
        period: period.split(" ")[0].charAt(0) + "-" + period.split(" ")[1],
      })
      onOpenChange()
    } catch (error) {
      console.error("Error al añadir curso:", error)
    } finally {
      setLoading(false)
      router.refresh()
    }
  }

  const canAddCourse = courseName && code && selectedPeriod && state && teacher && credits

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
        {onClose => (
          <>
            <ModalHeader className="flex flex-col">Añadir nuevo curso</ModalHeader>
            <ModalBody>
              <Input
                required
                size="sm"
                label="Nombre"
                type="text"
                variant="bordered"
                value={courseName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setCourseName(e.target.value)}
              />
              <div className="flex gap-3 flex-col sm:flex-row">
                <Input
                  required
                  size="sm"
                  label="Código"
                  type="text"
                  variant="bordered"
                  value={code}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
                />
                <Input
                  required
                  size="sm"
                  label="Créditos"
                  type="number"
                  min={0}
                  variant="bordered"
                  value={credits.toString()}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setCredits(parseInt(e.target.value))}
                />
              </div>
              <Input
                required
                size="sm"
                label="Profesor"
                type="text"
                variant="bordered"
                value={teacher}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTeacher(e.target.value)}
              />
              <div className="flex gap-3 flex-col sm:flex-row">
                <Select
                  required
                  size="sm"
                  label="Periodo"
                  variant="bordered"
                  options={periods}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedPeriod(e.target.value)}
                />
                <Select
                  required
                  size="sm"
                  label="Estado"
                  variant="bordered"
                  options={statusOptions}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => setState(e.target.value)}
                >
                  {statusOptions.map((status) => (
                    <SelectItem key={status.value} value={status.value} textValue={status.label}>
                      <Chip
                        className="capitalize"
                        color={statusColorMap[status.value]}
                        size="sm"
                        variant="flat"
                      >
                        {status.label}
                      </Chip>
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Cancelar
              </Button>
              <Button color="primary" onPress={onAccept} isDisabled={!canAddCourse || loading}>
                {loading ? "Añadiendo..." : "Añadir"}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
