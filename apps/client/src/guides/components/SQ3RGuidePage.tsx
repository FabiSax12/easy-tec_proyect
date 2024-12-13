import { LuSearch, LuHelpCircle, LuBookOpen, LuPencil, LuRefreshCcw } from "react-icons/lu"
import { GuideTemplate } from "./GuideTemplate"

export const SQ3RGuidePage = () => <GuideTemplate
  title="¿Qué es la Técnica de Estudio SQ3R?"
  subtitle="Una técnica de estudio que implica cuatro pasos: Survey, Question, Read, Recite y Review."
  description="La técnica SQ3R, desarrollada por Francis Pleasant Robinson en 1946, es un método de lectura activa que ayuda a mejorar la comprensión y retención del material de estudio. SQ3R es un acrónimo que representa los cinco pasos del proceso: Survey (Examinar), Question (Preguntar), Read (Leer), Recite (Recitar) y Review (Repasar)."
  steps={[
    {
      icon: <LuSearch className="mr-2 h-5 w-5 text-blue-500" />,
      description: <span><strong>Survey (Examinar):</strong> Revisa rápidamente el material, leyendo títulos, subtítulos, resúmenes y conclusiones para obtener una visión general.</span>
    },
    {
      icon: <LuHelpCircle className="mr-2 h-5 w-5 text-green-500" />,
      description: <span><strong>Question (Preguntar):</strong> Formula preguntas sobre el contenido basándote en los títulos y subtítulos. Esto te ayuda a enfocar tu lectura.</span>
    },
    {
      icon: <LuBookOpen className="mr-2 h-5 w-5 text-purple-500" />,
      description: <span><strong>Read (Leer):</strong> Lee activamente el material, buscando respuestas a las preguntas que formulaste en el paso anterior.</span>
    },
    {
      icon: <LuPencil className="mr-2 h-5 w-5 text-red-500" />,
      description: <span><strong>Recite (Recitar):</strong> Después de cada sección, intenta recitar o escribir los puntos principales con tus propias palabras, sin mirar el texto.</span>
    },
    {
      icon: <LuRefreshCcw className="mr-2 h-5 w-5 text-yellow-500" />,
      description: <span><strong>Review (Repasar):</strong> Una vez terminada la lectura, revisa todo el material, centrándote en tus notas y en los puntos principales.</span>
    }
  ]}
  sections={[
    {
      title: "Beneficios de la Técnica SQ3R",
      listItems: [
        "Mejora la comprensión del material de estudio",
        "Aumenta la retención de información a largo plazo",
        "Fomenta una lectura activa y crítica",
        "Ayuda a identificar los puntos clave del texto",
        "Facilita la organización mental del material",
        "Prepara mejor para exámenes y evaluaciones",
        "Aumenta la eficiencia del tiempo de estudio"
      ]
    },
    {
      title: "Aplicaciones de la Técnica SQ3R",
      listItems: [
        "Lectura de libros de texto académicos",
        "Estudio de artículos científicos o académicos",
        "Preparación para exámenes y evaluaciones",
        "Investigación para trabajos y proyectos",
        "Lectura de material técnico o profesional",
        "Aprendizaje autodidacta de nuevos temas"
      ]
    },
    {
      title: "Consejos para usar la Técnica SQ3R",
      listItems: [
        "Practica regularmente para mejorar tu habilidad con esta técnica",
        "Ajusta el tiempo dedicado a cada paso según la complejidad del material",
        "Usa papel y lápiz para tomar notas durante el proceso",
        "Combina SQ3R con otras técnicas de estudio como el Método Cornell o los mapas mentales",
        "Sé paciente, al principio puede parecer que toma más tiempo, pero a la larga aumenta la eficiencia",
        "Adapta la técnica a tu estilo de aprendizaje personal"
      ]
    }
  ]}
/>

{/*
<li className="flex items-start">
  <Pencil className="mr-2 h-5 w-5 text-red-500" />
  <span><strong>Recite (Recitar):</strong> Después de cada sección, intenta recitar o escribir los puntos principales con tus propias palabras, sin mirar el texto.</span>
</li>
<li className="flex items-start">
  <RefreshCcw className="mr-2 h-5 w-5 text-yellow-500" />
  <span><strong>Review (Repasar):</strong> Una vez terminada la lectura, revisa todo el material, centrándote en tus notas y en los puntos principales.</span>
</li> */}