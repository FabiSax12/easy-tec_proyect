import Calendar from "@/components/Calendar";
import Courses from "@/components/Courses";
import SectionCard from "@/components/SectionCard";
import Semestres from "@/components/Semestres";

export default function Home() {
  return (
    <main className="grid grid-cols-5">
      <SectionCard className="col-start-1 col-span-2 justify-self-center">
        <Semestres/>
      </SectionCard>
      <SectionCard className="col-start-3 col-span-3 ">
        <Courses />
      </SectionCard>
      {/* <Calendar /> */}
    </main>
  );
}