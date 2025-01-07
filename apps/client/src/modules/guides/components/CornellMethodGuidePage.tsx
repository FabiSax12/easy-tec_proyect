import { LuBookOpen, LuColumns, LuMessageCircle, LuPenTool, LuSearch } from "react-icons/lu"
import { GuideTemplate } from "./GuideTemplate"

export const CornellMethodGuidePage = () => <GuideTemplate
  title="¿Qué es el Método Cornell?"
  subtitle="Un sistema eficaz para tomar notas y organizar información durante clases o lecturas."
  description="El Método Cornell es un sistema de toma de notas desarrollado por Walter Pauk en la Universidad de Cornell. Este método ayuda a organizar las notas de manera efectiva, facilitando la revisión y el estudio posterior. Se basa en dividir la página en secciones específicas para diferentes tipos de información."
  steps={[
    {
      icon: <LuColumns className="mr-2 h-5 w-5 text-blue-500" />,
      description: "Divide tu página en tres secciones: una columna estrecha a la izquierda (señales), una columna ancha a la derecha (notas) y un espacio en la parte inferior (resumen)."
    },
    {
      icon: <LuPenTool className="mr-2 h-5 w-5 text-green-500" />,
      description: "Durante la clase o lectura, toma notas en la columna ancha de la derecha."
    },
    {
      icon: <LuSearch className="mr-2 h-5 w-5 text-purple-500" />,
      description: "Después de la clase, revisa tus notas y escribe palabras clave o preguntas en la columna de la izquierda que se relacionen con las notas principales."
    },
    {
      icon: <LuMessageCircle className="mr-2 h-5 w-5 text-red-500" />,
      description: "En el espacio de resumen en la parte inferior, escribe un breve resumen de los puntos principales de la página."
    },
    {
      icon: <LuBookOpen className="mr-2 h-5 w-5 text-yellow-500" />,
      description: "Utiliza estas notas para revisar y estudiar, cubriendo la columna de notas y tratando de recordar la información basándote en las señales de la columna izquierda."
    }
  ]}
  sections={[
    {
      title: "Beneficios del Método Cornell",
      listItems: [
        "Organiza la información de manera clara y estructurada",
        "Facilita la revisión y el repaso de los temas",
        "Promueve la reflexión activa sobre el material",
        "Ayuda a identificar conceptos clave y relaciones",
        "Mejora la retención y comprensión del material",
        "Fomenta el pensamiento crítico y la síntesis de información",
        "Proporciona un método consistente para todas las materias"
      ]
    },
    {
      title: "Consejos para usar el Método Cornell",
      listItems: [
        "Usa abreviaturas y símbolos para tomar notas más rápidamente",
        "Deja espacio entre los puntos principales para agregar detalles más tarde",
        "Revisa y completa tus notas lo antes posible después de la clase",
        "Usa colores o subrayados para resaltar información importante",
        "Practica regularmente para mejorar tu habilidad con este método",
        "Adapta el formato según tus necesidades y preferencias personales",
        "Utiliza las señales de la columna izquierda para crear preguntas de estudio"
      ]
    },
    {
      title: "Aplicaciones del Método Cornell",
      listItems: [
        "Tomar notas durante clases y conferencias",
        "Resumir capítulos de libros o artículos académicos",
        "Preparar presentaciones o discursos",
        "Organizar ideas para ensayos o trabajos de investigación",
        "Tomar notas durante reuniones de trabajo",
        "Estudiar para exámenes y evaluaciones"
      ]
    }
  ]}
/>