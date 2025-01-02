import { LuInbox, LuList, LuCalendar, LuCheckSquare, LuArchive } from "react-icons/lu"
import { GuideTemplate } from "./GuideTemplate"

export const GTDWorkFlow = () => <GuideTemplate
  title="¿Qué es la Técnica GTD (Getting Things Done)?"
  subtitle="Un método de gestión de tareas y productividad personal desarrollado por David Allen."
  description="GTD (Getting Things Done) es un método de gestión de tareas y productividad personal desarrollado por David Allen. Se basa en el principio de mover las tareas y proyectos fuera de la mente registrándolas externamente. Esto permite enfocarse en la ejecución de las tareas en lugar de recordarlas. GTD tiene como objetivo aumentar la productividad mientras se reduce el estrés y la sobrecarga mental."
  steps={[
    {
      icon: <LuInbox className="mr-2 h-5 w-5 text-blue-500" />,
      description: <span><strong>Capturar:</strong> Recoger todo lo que llama tu atención y podría requerir acción.</span>
    },
    {
      icon: <LuList className="mr-2 h-5 w-5 text-green-500" />,
      description: <span><strong>Clarificar:</strong> Procesar lo que significa cada elemento y decidir qué hacer con él.</span>
    },
    {
      icon: <LuCalendar className="mr-2 h-5 w-5 text-purple-500" />,
      description: <span><strong>Organizar:</strong> Poner los elementos en las categorías adecuadas.</span>
    },
    {
      icon: <LuCheckSquare className="mr-2 h-5 w-5 text-red-500" />,
      description: <span><strong>Reflexionar:</strong> Revisar frecuentemente tus listas para mantenerte actualizado.</span>
    },
    {
      icon: <LuArchive className="mr-2 h-5 w-5 text-yellow-500" />,
      description: <span><strong>Comprometerse:</strong> Usar tu sistema para tomar decisiones activas sobre tus tareas.</span>
    }
  ]}
  sections={[
    {
      title: "Beneficios del Método GTD",
      listItems: [
        "Reduce el estrés y la sobrecarga mental",
        "Aumenta la productividad y la eficiencia",
        "Mejora la capacidad de enfoque",
        "Proporciona una visión clara de los proyectos y tareas pendientes",
        "Ayuda a priorizar efectivamente",
        "Fomenta la toma de decisiones proactiva",
        "Mejora el equilibrio entre la vida personal y profesional"
      ]
    },
    {
      title: "Aplicación del Método GTD en el Estudio",
      listItems: [
        "Organizar tareas y proyectos académicos",
        "Gestionar fechas de entrega y exámenes",
        "Priorizar lecturas y trabajos de investigación",
        "Balancear actividades extracurriculares con estudios",
        "Reducir la procrastinación",
        "Mejorar la planificación a largo plazo de la carrera académica"
      ]
    },
    {
      title: "Ejemplo Práctico de GTD para Estudiantes",
      listItems: [
        <span><strong>Capturar:</strong> Anota todas tus tareas, fechas de exámenes, ideas para proyectos, etc.</span>,
        <span><strong>Clarificar:</strong> Decide qué acción requiere cada elemento (ej. "Estudiar para el examen de matemáticas" o "Investigar para el ensayo de historia")</span>,
        <span><strong>Organizar:</strong> Clasifica las tareas por asignatura, fecha de entrega, o contexto (ej. "En casa", "En la biblioteca")</span>,
        <span><strong>Reflexionar:</strong> Revisa tus listas diaria y semanalmente para asegurarte de que estás al día</span>,
        <span><strong>Comprometerse:</strong> Elige qué tarea hacer basándote en tu tiempo, energía y prioridades</span>,
      ]
    }
  ]}
/>
