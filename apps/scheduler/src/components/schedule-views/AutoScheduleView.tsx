import { useRef } from "react"
import { Button, ButtonGroup, Tooltip } from "@easy-tec/ui"
import { ScheduleEvent } from "@/interfaces/courses-schedule.ts"
import { SimpleCourseRow } from "@/interfaces/courses-schedule.ts"
import { IoIosDownload } from "react-icons/io"
import { IoArrowBack, IoArrowForward } from "react-icons/io5"
import { ScheduleView } from "./ScheduleView"
import { toPng } from "html-to-image"

interface AutoScheduleViewProps {
  scheduleCombinations: SimpleCourseRow[][];
  currentCombination: number;
  onPrev: () => void;
  onNext: () => void;
  isGenerating?: boolean;
}

export const AutoScheduleView: React.FC<AutoScheduleViewProps> = ({
  scheduleCombinations,
  currentCombination,
  onPrev,
  onNext,
  isGenerating = false,
}) => {

  const scheduleRef = useRef<HTMLDivElement>(null)

  const events: ScheduleEvent[] = scheduleCombinations[currentCombination]?.map((course) => {
    const eventsPerCourse: ScheduleEvent[] = []
    course.schedules.forEach((schedule) => {
      eventsPerCourse.push({
        id: course.code,
        title: course.subject,
        day: schedule.day.slice(0, 3),
        start: schedule.start,
        end: schedule.end,
        group: course.group,
        campus: course?.campus,
        teachers: course.teachers,
        location: course.campus,
        typeOfGroup: course.typeOfGroup,
      })
    })
    return eventsPerCourse
  }).flat() || []

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

  // const handleSaveSchedule = () => {
  //   const selectedCombination = scheduleCombinations[currentCombination]

  //   setSelectedSubjects(selectedCombination.map(course => ({
  //     id: course.id,
  //     code: course.code,
  //     subject: course.subject,
  //     group: course.group,
  //     schedules: course.schedules,
  //     credits: course.credits,
  //     teachers: course.teachers,
  //     typeOfGroup: course.typeOfGroup,
  //     classroom: course.campus,
  //     totalSpaces: null,
  //     typeOfSubject: null,
  //     reserved: null,
  //   })))
  //   // setSelectedSubjects(scheduleCombinations[currentCombination])
  // }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex justify-between items-center w-full mb-4">
        <ButtonGroup>
          <Button isDisabled={currentCombination === 0} onPress={onPrev} startContent={<IoArrowBack />} isIconOnly />
          <Button isDisabled={currentCombination === scheduleCombinations.length - 1} onPress={onNext} startContent={<IoArrowForward />} isIconOnly />
        </ButtonGroup>

        <p>
          {isGenerating
            ? "Generando horarios..."
            : scheduleCombinations.length > 0
              ? `Combinación ${currentCombination + 1} de ${scheduleCombinations.length}`
              : "No hay horarios disponibles"
          }
        </p>
        <div className="text-right mb-4 gap-4 flex justify-end">
          <Tooltip content="Descargar" placement="bottom">
            <Button
              isIconOnly
              startContent={<IoIosDownload size={20} />}
              color="primary"
              size="md"
              onPress={handleDownloadImage}
            />
          </Tooltip>
          {/* <Tooltip content="Seleccionar" placement="bottom">
            <Button
              isIconOnly
              startContent={<LuCheckCheck size={20} />}
              color="success"
              size="md"
              onPress={handleSaveSchedule}
            />
          </Tooltip> */}
        </div>
      </div>
      <div className="max-w-full overflow-auto">
        <ScheduleView events={events} ref={scheduleRef} eventsDeleteable={false} />
      </div>
    </div>
  )
}
