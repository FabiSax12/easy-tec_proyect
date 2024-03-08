import Calendar from "@/components/Calendar";
import Courses from "@/components/Courses";
import Semestres from "@/components/Semestres";

export default function Home() {
  return (
    <main className="grid grid-cols-5">
      <Semestres className="col-start-1 col-span-2 justify-self-center bg-white px-6 py-2 rounded-lg"/>
      <Courses className="col-start-3 col-span-3 bg-white px-6 py-2 rounded-lg"/>
      {/* <Calendar /> */}
    </main>
  );
}