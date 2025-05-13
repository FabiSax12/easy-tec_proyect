import { Course } from "@/shared/types/entities/Course"
import { Chip } from "@easy-tec/ui"
import { ChipProps } from "@easy-tec/ui"

type StateColorMap = Record<Course["state"], ChipProps["color"]>

const STATUS_COLOR_MAP: StateColorMap = {
  aprobado: "success",
  pendiente: "default",
  cursando: "primary",
  "": "default"
}

export const StatusChip = ({ status }: { status: keyof StateColorMap }) => (
  <Chip
    className="capitalize"
    color={STATUS_COLOR_MAP[status]}
    size="sm"
    variant="flat"
  >
    {status}
  </Chip>
)
