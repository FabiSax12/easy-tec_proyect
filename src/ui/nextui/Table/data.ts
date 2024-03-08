const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "NOMBRE", uid: "name", sortable: true},
  {name: "CRÉDITOS", uid: "credits", sortable: true},
  {name: "SEMESTRE", uid: "semester", sortable: true},
  {name: "ESTADO", uid: "state", sortable: true},
  {name: "ACCIONES", uid: "actions"}
  // {name: "INSTRUCTOR", uid: "instructor",sortable: true},
]


const statusOptions = [
    {name: "Pendiente", uid: "pendiente"},
    {name: "Cursando", uid: "cursando"},
    {name: "Aprobado", uid: "aprobado"}
]

const courses = [
  {
    "id": 1,
    "name": "Introducción a la Ciencia de la Computación",
    "teacher": "Dr. Juan Pérez",
    "credits": 3,
    "semester": 2,
    "state": "pendiente",
    "avatar": "https://www.ejemplo.com/avatar_curso1.png"
  },
  {
    "id": 2,
    "name": "Estructuras de Datos y Algoritmos",
    "teacher": "Prof. Ana Gómez",
    "credits": 4,
    "semester": 1,
    "state": "cursando",
    "avatar": "https://www.ejemplo.com/avatar_curso2.png"
  },
  {
    "id": 3,
    "name": "Fundamentos de Aprendizaje Automático",
    "teacher": "Dr. Carlos Fernández",
    "credits": 5,
    "semester": 2,
    "state": "aprobado",
    "avatar": "https://www.ejemplo.com/avatar_curso3.png"
  },
  {
    "id": 4,
    "name": "Programación Avanzada",
    "teacher": "Prof. Laura Rodríguez",
    "credits": 4,
    "semester": 3,
    "state": "pendiente",
    "avatar": "https://www.ejemplo.com/avatar_curso4.png"
  },
  {
    "id": 5,
    "name": "Diseño de Software",
    "teacher": "Dr. Pablo Martínez",
    "credits": 4,
    "semester": 3,
    "state": "cursando",
    "avatar": "https://www.ejemplo.com/avatar_curso5.png"
  },
  {
    "id": 6,
    "name": "Bases de Datos Avanzadas",
    "teacher": "Prof. Sofía López",
    "credits": 5,
    "semester": 4,
    "state": "pendiente",
    "avatar": "https://www.ejemplo.com/avatar_curso6.png"
  },
  {
    "id": 7,
    "name": "Redes de Computadoras",
    "teacher": "Dr. Alejandro Sánchez",
    "credits": 4,
    "semester": 4,
    "state": "aprobado",
    "avatar": "https://www.ejemplo.com/avatar_curso7.png"
  },
  {
    "id": 8,
    "name": "Sistemas Operativos",
    "teacher": "Prof. Eduardo Fernández",
    "credits": 4,
    "semester": 5,
    "state": "cursando",
    "avatar": "https://www.ejemplo.com/avatar_curso8.png"
  },
  {
    "id": 9,
    "name": "Inteligencia Artificial",
    "teacher": "Dr. María González",
    "credits": 5,
    "semester": 5,
    "state": "pendiente",
    "avatar": "https://www.ejemplo.com/avatar_curso9.png"
  },
  {
    "id": 10,
    "name": "Seguridad Informática",
    "teacher": "Prof. José Martínez",
    "credits": 4,
    "semester": 6,
    "state": "cursando",
    "avatar": "https://www.ejemplo.com/avatar_curso10.png"
  },
  {
    "id": 11,
    "name": "Desarrollo Web Avanzado",
    "teacher": "Dr. Claudia Ramírez",
    "credits": 4,
    "semester": 6,
    "state": "aprobado",
    "avatar": "https://www.ejemplo.com/avatar_curso11.png"
  },
  {
    "id": 12,
    "name": "Computación Cuántica",
    "teacher": "Prof. Luis Morales",
    "credits": 5,
    "semester": 7,
    "state": "pendiente",
    "avatar": "https://www.ejemplo.com/avatar_curso12.png"
  },
  {
    "id": 13,
    "name": "Desarrollo de Videojuegos",
    "teacher": "Dr. Ricardo Fernández",
    "credits": 4,
    "semester": 7,
    "state": "cursando",
    "avatar": "https://www.ejemplo.com/avatar_curso13.png"
  },
  {
    "id": 14,
    "name": "Procesamiento de Imágenes",
    "teacher": "Prof. Marta Sánchez",
    "credits": 4,
    "semester": 8,
    "state": "pendiente",
    "avatar": "https://www.ejemplo.com/avatar_curso14.png"
  },
  {
    "id": 15,
    "name": "Blockchain y Criptomonedas",
    "teacher": "Dr. Roberto González",
    "credits": 5,
    "semester": 8,
    "state": "cursando",
    "avatar": "https://www.ejemplo.com/avatar_curso15.png"
  }
]


export {columns, courses, statusOptions};