import { CoursesMainTable, SectionCard, Semestres } from "@/components"

export default function Home() {
  return (
    <main className="home-main_grid gap-10">
      <SectionCard title="Semestres" className="h-min">
        <Semestres />
      </SectionCard>
      <SectionCard title="Cursos">
        <CoursesMainTable />
      </SectionCard>
    </main>
  )
}