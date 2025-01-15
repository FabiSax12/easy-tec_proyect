export function getPeriodsQuery(...fields: string[]) {
  return `
    query {
      periods {
        ${fields.join("\n")}
      }
    }
  `
}

export function getPeriodQuery(id: number, ...fields: string[]) {
  return `
    query {
      period(id: ${id}) {
        ${fields.join("\n")}
      }
    }
  `
}