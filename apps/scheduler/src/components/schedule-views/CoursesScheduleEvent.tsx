import { useSchedule } from "@/hooks/useSchedules";
import { ScheduleEvent } from "@/interfaces/courses-schedule";
import { Button, Tooltip } from "@easy-tec/ui";
import { useEffect, useState } from "react";
import { IoLocation, IoPencil, IoPeople, IoTrashBin } from "react-icons/io5";
import { HexColorPicker } from "react-colorful";
import { createPortal } from "react-dom";
import { FaUser, FaSchoolFlag } from "react-icons/fa6";

interface Props {
  event: ScheduleEvent;
  style: React.CSSProperties;
  isDeleteable: boolean;
  isEditable: boolean;
  showTeachers?: boolean;
}

export const CoursesScheduleEvent = ({
  event,
  style,
  isDeleteable,
  isEditable,
  showTeachers = true,
}: Props) => {
  const { removeSubject, setSubjectColor } = useSchedule();
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [color, setColor] = useState<string | undefined>(event.color);
  const [originalColor, setOriginalColor] = useState<string | undefined>(event.color);

  useEffect(() => {
    setColor(event.color);
    setOriginalColor(event.color);
  }, [event.color]);

  const handleOpenColorPicker = () => {
    setOriginalColor(event.color); // Guardar el color original
    setIsColorPickerOpen(true);
  };

  const handleSaveColor = () => {
    setIsColorPickerOpen(false);
    setSubjectColor(event.id, color || "#006fee");
  };

  const handleCancelColor = () => {
    setColor(originalColor); // Restaurar el color original
    setIsColorPickerOpen(false);
  };

  return (
    <div
      className={
        "absolute text-primary-foreground text-xs p-2 rounded-md shadow-md transition-transform group z-10"
      }
      style={{
        ...style,
        backgroundColor: color ? color : style.backgroundColor,
      }}
    >
      <div className="font-semibold line-clamp-3">{event.title}</div>

      {/* INFO - Added max-h and overflow-y-auto for scrolling */}
      <div className="flex flex-col gap-2 max-h-full overflow-y-hidden pr-2">
        <div className="flex justify-between">
          <div className="text-[10px] text-primary-foreground/80 truncate mt-1.5 flex items-center gap-1">
            <IoPeople size={15} />
            {event.group}
          </div>
          {event.typeOfGroup && (
            <p className="text-[10px] text-primary-foreground/80 mt-1.5 max-w-full flex items-end gap-1">
              <FaSchoolFlag size={15} />
              <span>{event.typeOfGroup}</span>
            </p>
          )}
        </div>

        {showTeachers && event.teachers && event.teachers.length > 0 && (
          <div className="text-[10px] text-primary-foreground/80 flex items-center gap-1">
            <FaUser size={13} />
            {event.teachers?.map((teacher, index) => (
              <span key={index} className="inline-block">
                {teacher}
              </span>
            ))}
          </div>
        )}
        {event.location && (
          <p className="text-[10px] text-primary-foreground/80 max-w-full flex items-center gap-1">
            <IoLocation size={15} className="min-w-[15px]" />
            <span>{event.location}</span>
          </p>
        )}
      </div>

      {isDeleteable && (
        <Tooltip content="Eliminar" placement="bottom">
          <span
            className="hidden group-hover:flex absolute bottom-0 left-0 right-0 bg-danger-400 rounded-t-full py-1 justify-center items-center cursor-pointer"
            onClick={() => removeSubject(event.id)}
          >
            <IoTrashBin size={15} />
          </span>
        </Tooltip>
      )}

      {isEditable && (
        <Tooltip content="Editar" placement="bottom">
          <span
            className="hidden group-hover:flex absolute bottom-0 left-0 right-0 rounded-t-full py-1 justify-center items-center cursor-pointer bg-white/80"
            onClick={handleOpenColorPicker}
          >
            <IoPencil size={15} color={color} />
          </span>
        </Tooltip>
      )}

      {isColorPickerOpen &&
        createPortal(
          <div className="fixed inset-0 flex items-center justify-center z-[99999] bg-black/30">
            <div
              className="bg-white p-4 rounded-md shadow-lg z-[999999] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Seleccionar color
                </h3>
                <HexColorPicker color={color} onChange={setColor} />
              </div>

              <div className="flex gap-2">
                <Button
                  onPress={handleSaveColor}
                  size="sm"
                  color="primary"
                  className="flex-1"
                >
                  Guardar
                </Button>
                <Button
                  onPress={handleCancelColor}
                  size="sm"
                  color="default"
                  variant="flat"
                  className="flex-1"
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};