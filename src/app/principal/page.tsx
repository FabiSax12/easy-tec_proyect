import SectionCard from "@/components/SectionCard"
import Semestres from "@/components/Semestres"
import CoursesMainTable from "@/ui/nextui/Table/CoursesMainTable"

export default function Home() {
  return (
    <main className="home-main_grid gap-10">
      <SectionCard title="Semestres" className="h-min">
        <Semestres/>
      </SectionCard>
      <SectionCard title="Cursos">
        <CoursesMainTable />
      </SectionCard>
    </main>
  )
}