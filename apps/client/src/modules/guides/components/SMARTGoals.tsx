import { LuTarget, LuTrendingUp, LuCheckSquare, LuRefreshCw, LuClock } from "react-icons/lu"
import { GuideTemplate } from "./GuideTemplate"

export const SMARTGoals = () => <GuideTemplate
  title="¿Qué son los Objetivos SMART?"
  subtitle="Una técnica para establecer objetivos claros y alcanzables en el estudio y otros ámbitos."
  description="La técnica de los Objetivos SMART es un método para establecer metas de manera efectiva. SMART es un acrónimo en inglés que representa las características que debe tener un buen objetivo: Specific (Específico), Measurable (Medible), Achievable (Alcanzable), Relevant (Relevante) y Time-bound (Temporal). Esta técnica ayuda a crear objetivos claros, realistas y motivadores, aumentando las probabilidades de éxito en el estudio y en cualquier otro ámbito de la vida."
  steps={[
    {
      icon: <LuTarget className="mr-2 h-5 w-5 text-blue-500" />,
      description: <span><strong>Specific (Específico):</strong> El objetivo debe ser claro y concreto. Debe responder a las preguntas: ¿Qué quiero lograr exactamente? ¿Por qué es importante? ¿Quién está involucrado? ¿Dónde se llevará a cabo?</span>
    },
    {
      icon: <LuTrendingUp className="mr-2 h-5 w-5 text-green-500" />,
      description: <span><strong>Measurable (Medible):</strong> Debe ser posible cuantificar o al menos sugerir un indicador de progreso. ¿Cómo sabré cuando se ha logrado? ¿Cuánto? ¿Cuántos?</span>
    },
    {
      icon: <LuCheckSquare className="mr-2 h-5 w-5 text-purple-500" />,
      description: <span><strong>Achievable (Alcanzable):</strong> El objetivo debe ser realista y alcanzable. Debe desafiar, pero ser posible de lograr con los recursos y tiempo disponibles.</span>
    },
    {
      icon: <LuRefreshCw className="mr-2 h-5 w-5 text-red-500" />,
      description: <span><strong>Relevant (Relevante):</strong> Debe ser importante y alinearse con otros objetivos o metas más amplias. ¿Es este el momento adecuado? ¿Vale la pena?</span>
    },
    {
      icon: <LuClock className="mr-2 h-5 w-5 text-yellow-500" />,
      description: <span><strong>Time-bound (Temporal):</strong> Debe tener un plazo o fecha límite clara. ¿Cuándo se logrará este objetivo? ¿Qué puedo hacer hoy? ¿Qué puedo hacer en seis semanas?</span>
    }
  ]}
  sections={[
    {
      title: "Beneficios de los Objetivos SMART",
      listItems: [
        "Proporciona claridad y enfoque en lo que se quiere lograr",
        "Aumenta la motivación al establecer metas alcanzables",
        "Facilita la planificación y la gestión del tiempo",
        "Permite medir el progreso y ajustar estrategias si es necesario",
        "Mejora la probabilidad de éxito en el logro de objetivos",
        "Ayuda a priorizar tareas y recursos",
        "Fomenta la responsabilidad y el compromiso personal"
      ]
    },
    {
      title: "Aplicación de los Objetivos SMART en el Estudio",
      listItems: [
        "Planificación de sesiones de estudio",
        "Establecimiento de metas de rendimiento académico",
        "Preparación para exámenes y evaluaciones",
        "Desarrollo de habilidades específicas (ej. mejorar la velocidad de lectura)",
        "Gestión de proyectos y trabajos de investigación",
        "Aprendizaje de nuevas materias o habilidades"
      ]
    },
    {
      title: "Ejemplo de un Objetivo SMART para Estudio",
      subContent: <>
        <p>Veamos cómo transformar un objetivo general en un objetivo SMART:</p>
        <p className="mt-2"><strong>Objetivo general:</strong> "Mejorar en matemáticas"</p>
        <p className="mt-2"><strong>Objetivo SMART:</strong> "Aumentar mi calificación en matemáticas de un 6 a un 8 en el próximo examen trimestral, que será en 10 semanas, dedicando 1 hora diaria a resolver problemas de álgebra y geometría, y solicitando ayuda a mi profesor dos veces por semana para aclarar dudas."</p>
      </>,
      listItems: [
        <span><strong>Específico:</strong> Mejorar la calificación en matemáticas</span>,
        <span><strong>Medible:</strong> De 6 a 8</span>,
        <span><strong>Alcanzable:</strong> Con estudio diario y ayuda del profesor</span>,
        <span><strong>Relevante:</strong> Importante para el rendimiento académico general</span>,
        <span><strong>Temporal:</strong> En 10 semanas, para el próximo examen trimestral</span>
      ]
    }
  ]}
/>