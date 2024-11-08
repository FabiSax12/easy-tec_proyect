import { Course } from "@/types/api"
import { Chip } from "@nextui-org/react"
import { ChipProps } from "@nextui-org/react"

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
