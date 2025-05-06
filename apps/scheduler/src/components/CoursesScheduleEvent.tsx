import { useSchedule } from "@/hooks/useSchedules"
import { ScheduleEvent } from "@/interfaces/courses-schedule"
import { Button, Tooltip } from "@easy-tec/ui"
import { useEffect, useState } from "react"
import { IoLocation, IoPencil, IoPeople, IoTrashBin } from "react-icons/io5"
import { HexColorPicker } from "react-colorful"
import { createPortal } from "react-dom"

interface Props {
  event: ScheduleEvent;
  style: React.CSSProperties;
  isDeleteable: boolean;
  isEditable: boolean;
}

export const CoursesScheduleEvent = ({ event, style, isDeleteable, isEditable }: Props) => {
  const { removeSubject, setSubjectColor } = useSchedule()
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false)
  const [color, setColor] = useState<string>(event.color || "#006fee")

  useEffect(() => {
    setColor(event.color || "#006fee")
  }, [event.color])

  const handleSaveColor = () => {
    setIsColorPickerOpen(false)
    setSubjectColor(event.id, color)
  }

  return (
    <div
      className={"absolute text-primary-foreground text-xs p-2 rounded-md shadow-md transition-transform group bg-primary z-10"}
      style={{
        ...style,
        backgroundColor: color
      }}
    >
      <p className="font-semibold line-clamp-3">{event.title}</p>

      <div className="flex flex-row gap-2 flex-wrap">
        {event.location && (
          <p className="text-[10px] text-primary-foreground/80 truncate mt-1.5 flex items-center gap-1">
            <IoLocation size={15} />
            {event.location}
          </p>
        )}
        <p className="text-[10px] text-primary-foreground/80 truncate mt-1.5 flex items-center gap-1">
          <IoPeople size={15} />
          {event.group}
        </p>
      </div>

      {isDeleteable && <Tooltip content="Eliminar" placement="bottom">
        <span
          className="hidden group-hover:flex absolute bottom-0 left-0 right-0 bg-danger-400 rounded-t-full py-1 justify-center items-center cursor-pointer"
          onClick={() => removeSubject(event.id)}
        >
          <IoTrashBin size={15} />
        </span>
      </Tooltip>}

      {isEditable && <Tooltip content="Editar" placement="bottom">
        <span
          className="hidden group-hover:flex absolute bottom-0 left-0 right-0 rounded-t-full py-1 justify-center items-center cursor-pointer bg-white/80"
          onClick={() => setIsColorPickerOpen(true)}
        >
          <IoPencil size={15} color={color} />
        </span>
      </Tooltip>}

      {isColorPickerOpen &&
        createPortal(
          <div
            className="fixed inset-0 flex items-center justify-center z-[99999] bg-black/30"
            onClick={() => setIsColorPickerOpen(false)}
          >
            <div
              className="bg-white p-4 rounded-md shadow-lg z-[999999] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <HexColorPicker color={color} onChange={setColor} />
              <Button onPress={handleSaveColor} size="sm" color="primary" className="mt-2 w-full">
                Guardar
              </Button>
            </div>
          </div>,
          document.body
        )}


    </div>
  )
}