import { Period } from "../types/entities/Period"

export function periodLongToShort(period: string) {
  return period[0] + "-" + period.split(" ")[1]
}

export function periodShortToLong(period: string) {
  period = period.toLowerCase()
  const periodNumber = period.split("-")[1]

  if (period.startsWith("s")) return "Semestre " + periodNumber
  if (period.startsWith("t")) return "Trimestre " + periodNumber
  if (period.startsWith("b")) return "Bimestre " + periodNumber
  if (period.startsWith("v")) return "Verano" + periodNumber
}

export function periodToString(period: Period) {
  return period.type + " " + period.number + " " + period.year
}

export function periodStringToCode(period: string) {
  const [type, number, year] = period.split(" ")
  return type[0].toLowerCase() + "-" + number + "_" + year
}