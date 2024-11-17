export function periodLongToShort(period: string) {
  return period[0] + "-" + period.split(" ")[1]
}

export function periodShortToLong(period: string) {
  period = period.toLowerCase()
  if (period.startsWith("s")) return "Semestre " + period.split("-")[1]
}