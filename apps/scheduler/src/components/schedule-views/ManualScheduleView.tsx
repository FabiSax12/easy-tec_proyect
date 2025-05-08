import { useMemo, useRef, useState } from "react"
import { toPng } from "html-to-image"
import { useSchedule } from "@/hooks/useSchedules"
import { ScheduleEvent } from "@/interfaces/courses-schedule"
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Tooltip } from "@easy-tec/ui"
import { ScheduleView } from "./ScheduleView"
import { IoIosDownload } from "react-icons/io"
import { IoPencil } from "react-icons/io5"
import { LuRotateCcw } from "react-icons/lu"

export const ManualScheduleView = () => {
  const { selectedSubjects, clearSubjects } = useSchedule()
  const scheduleRef = useRef<HTMLDivElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const days = useMemo(() => ["Lun", "Mar", "Mie", "Jue", "Vie"], [])

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

  return (
    <div className="w-full">
      <div className="text-right mb-4 gap-4 flex justify-end">

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
            onPress={clearSubjects}
            color="danger"
            size="md"
            startContent={<LuRotateCcw size={20} />}
            isIconOnly
          />
        </Tooltip>
      </div>

      <div className="max-w-full overflow-auto">
        <ScheduleView ref={scheduleRef} events={events} eventsDeleteable={false} />
      </div>

      <Modal isOpen={isModalOpen} size="5xl" onClose={() => setIsModalOpen(false)} scrollBehavior="inside" isDismissable={false}>
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody>
            <ScheduleView events={events} eventsEditable eventsDeleteable={false} />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}
