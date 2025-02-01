import { GuideTemplate } from "./GuideTemplate"
import { LuClock, LuCheckCircle, LuCoffee, LuBrain } from "react-icons/lu"

export const PomodoroGuidePage = () => <GuideTemplate
  title="¿Qué es la Técnica Pomodoro?"
  subtitle="Un método de gestión del tiempo que mejora la productividad y la concentración."
  description="
    La Técnica Pomodoro es un método de gestión del tiempo desarrollado por Francesco Cirillo a finales de los años 80.
    Se basa en usar un temporizador para dividir el trabajo en intervalos, tradicionalmente de 25 minutos de duración,
    separados por breves descansos.
  "
  steps={[
    {
      icon: <LuClock className="mr-2 h-5 w-5 text-blue-500" />,
      description: "Elige una tarea para realizar."
    },
    {
      icon: <LuClock className="mr-2 h-5 w-5 text-blue-500" />,
      description: "Configura el temporizador Pomodoro (tradicionalmente a 25 minutos)."
    },
    {
      icon: <LuBrain className="mr-2 h-5 w-5 text-purple-500" />,
      description: "Trabaja en la tarea hasta que suene el temporizador."
    },
    {
      icon: <LuCheckCircle className="mr-2 h-5 w-5 text-green-500" />,
      description: "Cuando suene el temporizador, pon una marca de verificación en una hoja de papel."
    },
    {
      icon: <LuCoffee className="mr-2 h-5 w-5 text-brown-500" />,
      description: "Si tienes menos de 4 marcas, toma un descanso corto (3-5 minutos), luego vuelve al paso 2."
    },
    {
      icon: <LuCoffee className="mr-2 h-5 w-5 text-brown-500" />,
      description: "Después de 4 pomodoros, toma un descanso más largo (15-30 minutos), reinicia el conteo de marcas y vuelve al paso 1."
    },
  ]}
  sections={[
    {
      title: "Beneficios",
      listItems: [
        "Mejora la concentración y el enfoque",
        "Aumenta la conciencia de tus decisiones",
        "Mejora el proceso de planificación del trabajo y de estimación del esfuerzo de las tareas",
        "Ayuda a evitar el agotamiento",
        "Crea un mejor equilibrio entre trabajo y vida personal",
        "Reduce la frecuencia de las interrupciones",
        "Aumenta la determinación para lograr los objetivos"
      ]
    }
  ]}
/>
