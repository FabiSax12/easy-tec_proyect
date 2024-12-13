import { LuBrain, LuCalendar, LuClock, LuLineChart } from "react-icons/lu"
import { GuideTemplate } from "./GuideTemplate"

export const SpacedRepetitionGuidePage = () => <GuideTemplate
  title="¿Qué es Spaced Repetition?"
  subtitle="Una técnica de aprendizaje que optimiza la retención de información a largo plazo."
  description="
    Spaced Repetition es una técnica de aprendizaje que implica revisar la información en intervalos crecientes.
    Este método se basa en la curva del olvido y aprovecha el espaciamiento óptimo entre repasos para mejorar
    la retención a largo plazo. A medida que se revisa el material y se recuerda con éxito, los intervalos entre
    repasos se hacen más largos.
  "
  steps={[
    {
      icon: <LuBrain className="mr-2 h-5 w-5 text-blue-500" />,
      description: "Divide el material en pequeñas unidades de información.",
    },
    {
      icon: <LuCalendar className="mr-2 h-5 w-5 text-green-500" />,
      description: "Crea un calendario de repaso con intervalos crecientes (por ejemplo, 1 día, 3 días, 1 semana, 2 semanas, 1 mes).",
    },
    {
      icon: <LuClock className="mr-2 h-5 w-5 text-purple-500" />,
      description: "Revisa el material según el calendario establecido.",
    },
    {
      icon: <LuLineChart className="mr-2 h-5 w-5 text-red-500" />,
      description: "Ajusta los intervalos según tu rendimiento: acórtalos si te cuesta recordar, alárgalos si lo recuerdas fácilmente.",
    },
  ]}
  sections={[
    {
      title: "Herramientas para Spaced Repetition",
      listItems: [
        "Anki: Software de flashcards con algoritmo de spaced repetition incorporado.",
        "Quizlet: Plataforma de estudio con opción de repaso espaciado.",
        "SuperMemo: Uno de los primeros programas en implementar spaced repetition.",
        "Memrise: Plataforma de aprendizaje de idiomas que utiliza spaced repetition.",
        "Flashcard apps: Muchas apps de flashcards móviles incorporan algoritmos de spaced repetition.",
      ]
    },
    {
      title: "Beneficios",
      listItems: [
        "Mejora significativamente la retención a largo plazo",
        "Optimiza el tiempo de estudio al centrarse en lo que estás a punto de olvidar",
        "Reduce la necesidad de 'cramming' o estudio intensivo de última hora",
        "Ayuda a mantener el conocimiento actualizado a lo largo del tiempo",
        "Puede aplicarse a una amplia variedad de materias y tipos de información",
        "Fomenta un aprendizaje más profundo y duradero",
        "Aumenta la eficiencia del estudio al aprovechar cómo funciona la memoria",
      ]
    }
  ]}
/>
