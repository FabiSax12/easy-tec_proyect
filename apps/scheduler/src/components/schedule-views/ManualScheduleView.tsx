import { useMemo, useRef, useState } from "react"
import { toPng } from "html-to-image"
import { useSchedule } from "@/hooks/useSchedules"
import { ScheduleEvent } from "@/interfaces/courses-schedule"
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Tooltip, Checkbox, CheckboxGroup } from "@easy-tec/ui"
import { ScheduleView } from "./ScheduleView"
import { IoIosDownload } from "react-icons/io"
import { IoMoon, IoPencil, IoSunny, IoSettings } from "react-icons/io5"
import { LuRotateCcw } from "react-icons/lu"
import { GrSync } from "react-icons/gr"

export const ManualScheduleView = () => {
  const { selectedSubjects, clearSubjects } = useSchedule()
  const scheduleRef = useRef<HTMLDivElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isClearSchedulesModalOpen, setIsClearSchedulesModalOpen] = useState(false)
  const [isDaysConfigModalOpen, setIsDaysConfigModalOpen] = useState(false)
  const [scheduleTheme, setScheduleTheme] = useState<"light" | "dark" | undefined>(undefined)

  // Estado para los días seleccionados
  const allDays = useMemo(() => [
    { key: "Lun", label: "Lunes" },
    { key: "Mar", label: "Martes" },
    { key: "Mie", label: "Miércoles" },
    { key: "Jue", label: "Jueves" },
    { key: "Vie", label: "Viernes" },
    { key: "Sab", label: "Sábado" }
  ], [])

  const [selectedDays, setSelectedDays] = useState<string[]>(
    !!localStorage.getItem('selectedDays')
      ? JSON.parse(localStorage.getItem('selectedDays')!)
      : allDays.map(day => day.key)
  )

  const handleSelectedDaysChange = (days: string[]) => {
    if (days.length === 0) return

    setSelectedDays(days)
    localStorage.setItem("selectedDays", JSON.stringify(days))
  }

  const days = useMemo(() => {
    return allDays
      .filter(day => selectedDays.includes(day.key))
      .map(day => day.key)
  }, [selectedDays, allDays])

  const events = useMemo(() => {
    const newEvents: ScheduleEvent[] = []

    selectedSubjects.forEach((subject) => {
      subject.schedules.forEach((schedule) => {
        if (!days.includes(schedule.day)) return

        newEvents.push({
          id: subject.id,
          title: subject.subject,
          location: subject.classroom,
          day: schedule.day,
          start: schedule.start,
          end: schedule.end,
          group: subject.group,
          color: subject.color
        })
      })
    })

    return newEvents
  }, [selectedSubjects, days])

  const handleDownloadImage = async () => {
    if (scheduleRef.current) {
      await toPng(scheduleRef.current)
        .then((dataUrl) => {
          const link = document.createElement("a")
          link.download = "horario.png"
          link.href = dataUrl
          link.click()
        })
        .catch((error) => {
          console.error("Error al generar la imagen:", error)
        })
    }
  }

  const handleEditSchedule = () => {
    setIsModalOpen(true)
  }

  const toggleScheduleTheme = () => setScheduleTheme(prev => prev === "light" ? "dark" : prev === "dark" ? undefined : "light")

  const showClearSubjectsModal = () => setIsClearSchedulesModalOpen(true)

  const showDaysConfigModal = () => setIsDaysConfigModalOpen(true)

  // const handleDayToggle = (dayKey: string) => {
  //   setSelectedDays(prev => {
  //     if (prev.includes(dayKey)) {
  //       // Si el día está seleccionado, lo removemos
  //       return prev.filter(day => day !== dayKey)
  //     } else {
  //       // Si el día no está seleccionado, lo añadimos
  //       return [...prev, dayKey]
  //     }
  //   })
  // }

  const selectAllDays = () => {
    setSelectedDays(allDays.map(day => day.key))
  }

  // const deselectAllDays = () => {
  //   setSelectedDays([])
  // }

  const selectWeekDaysOnly = () => {
    setSelectedDays(["Lun", "Mar", "Mie", "Jue", "Vie"])
  }

  return (
    <div className="w-full">
      <div className="text-right mb-4 gap-4 flex justify-end">

        <Tooltip content="Días a mostrar" placement="bottom">
          <Button
            onPress={showDaysConfigModal}
            color="default"
            size="md"
            startContent={<IoSettings size={20} />}
          >Dias</Button>
        </Tooltip>

        <Tooltip content="Tema" placement="bottom">
          <Button
            onPress={toggleScheduleTheme}
            color="default"
            size="md"
            startContent={
              scheduleTheme == "light"
                ? <IoSunny size={20} />
                : scheduleTheme == "dark"
                  ? <IoMoon size={20} />
                  : <GrSync size={20} />
            }
            isIconOnly
          />
        </Tooltip>

        <Tooltip content="Editar" placement="bottom">
          <Button
            onPress={handleEditSchedule}
            color="success"
            size="md"
            startContent={<IoPencil size={20} />}
            isIconOnly
          />
        </Tooltip>

        <Tooltip content="Descargar" placement="bottom">
          <Button
            onPress={handleDownloadImage}
            color="primary"
            size="md"
            startContent={<IoIosDownload size={20} />}
            isIconOnly
          />
        </Tooltip>

        <Tooltip content="Limpiar" placement="bottom">
          <Button
            onPress={showClearSubjectsModal}
            color="danger"
            size="md"
            startContent={<LuRotateCcw size={20} />}
            isIconOnly
          />
        </Tooltip>
      </div>

      <div className="max-w-full overflow-auto">
        <ScheduleView
          theme={scheduleTheme}
          ref={scheduleRef}
          events={events}
          eventsDeleteable={false}
          visibleDays={days}
        />
      </div>

      {/* Modal de edición */}
      <Modal className={scheduleTheme} isOpen={isModalOpen} size="5xl" onClose={() => setIsModalOpen(false)} scrollBehavior="inside" isDismissable={false}>
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody>
            <ScheduleView
              theme={scheduleTheme}
              events={events}
              eventsEditable
              eventsDeleteable={false}
              visibleDays={days}
            />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>

      {/* Modal de configuración de días */}
      <Modal isOpen={isDaysConfigModalOpen} size="md" onClose={() => setIsDaysConfigModalOpen(false)}>
        <ModalContent>
          <ModalHeader>Configurar días a mostrar</ModalHeader>
          <ModalBody>
            <div className="space-y-4">
              <div className="flex gap-2 mb-4">
                <Button
                  onPress={selectAllDays}
                  color="primary"
                  size="sm"
                  variant="flat"
                >
                  Todos
                </Button>
                <Button
                  onPress={selectWeekDaysOnly}
                  color="secondary"
                  size="sm"
                  variant="flat"
                >
                  Solo semana
                </Button>
                {/* <Button
                  onPress={deselectAllDays}
                  color="default"
                  size="sm"
                  variant="flat"
                >
                  Ninguno
                </Button> */}
              </div>

              <div className="space-y-3">
                <CheckboxGroup value={selectedDays} onValueChange={handleSelectedDaysChange}>
                  {allDays.map((day) => (
                    <Checkbox
                      key={day.key}
                      value={day.key}
                    // isSelected={selectedDays.includes(day.key)}
                    // onValueChange={() => handleDayToggle(day.key)}
                    >
                      {day.label}
                    </Checkbox>
                  ))}
                </CheckboxGroup>
              </div>

              <div className="text-small text-default-500 mt-4">
                Días seleccionados: {selectedDays.length === 0 ? "Ninguno" : selectedDays.length}
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              onPress={() => setIsDaysConfigModalOpen(false)}
              color="primary"
              size="md"
            >
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Modal de confirmación para limpiar */}
      <Modal isOpen={isClearSchedulesModalOpen} size="sm">
        <ModalContent>
          <ModalHeader>Limpiar cursos</ModalHeader>
          <ModalBody>
            ¿Seguro que deseas eliminar todos los cursos seleccionados?
          </ModalBody>
          <ModalFooter>
            <Button
              onPress={() => {
                clearSubjects()
                setIsClearSchedulesModalOpen(false)
              }}
              color="danger"
              size="md"
              className="mr-2"
            >
              Aceptar
            </Button>
            <Button onPress={() => setIsClearSchedulesModalOpen(false)} color="default" size="md">
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}