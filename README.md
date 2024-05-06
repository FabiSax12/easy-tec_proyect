# Easy TEC

Easy TEC es un proyecto diseñado para proporcionar a los estudiantes del TEC una solución integral de planificación y organización. Surge de la necesidad de centralizar la información dispersa en diversas herramientas y aplicaciones utilizadas por los estudiantes para gestionar sus horarios, tareas y compromisos académicos.

Durante mi primer semestre en el TEC, me enfrenté a la dificultad de encontrar una sola herramienta que cubriera todas mis necesidades de organización. Esto me llevó a utilizar una variedad de aplicaciones y métodos, incluyendo calendarios digitales, aplicaciones de recordatorios, plataformas universitarias y más. Sin embargo, ninguna de estas opciones satisfacía completamente mis requerimientos.

Como estudiante de computación, decidí aprovechar mis habilidades para abordar este desafío. El 1 de Marzo de 2024, me propuse el reto de desarrollar Easy TEC, una aplicación web que integra todas las funcionalidades necesarias para una gestión eficiente del tiempo y los recursos académicos.

Mi objetivo con Easy TEC es proporcionar a todos los estudiantes del TEC una herramienta completa que les permita mejorar su organización estudiantil y alcanzar su máximo potencial académico.

---

¡Bienvenido a Easy TEC! Con esta aplicación, podrás simplificar tu vida estudiantil y maximizar tu rendimiento académico.

## Para Desarrolladores

Si estás interesado en contribuir al desarrollo de Easy TEC, sigue los pasos:

### Configuración del Entorno de Desarrollo

1. **Clona el Repositorio**

```bash
git clone https://github.com/FabiSax12/easy-tec.git
```

2. **Instala las Dependencias:**
Antes de continuar, asegúrate de tener Node.js y npm instalados en tu sistema. Si aún no los tienes, puedes descargarlos e instalarlos desde [Node.js](https://nodejs.org/).
Una vez que Node.js y npm estén instalados, ejecuta el siguiente comando en el directorio del proyecto para instalar las dependencias necesarias:

```bash
npm install
```

3. **Configura el Entorno:**
Copia el archivo `.env.example` y renómbralo a `.env`. Aquí puedes configurar variables de entorno como la clave secreta, la URL de la base de datos, etc.

4. **Levantar base de datos en un contenedor de docker:**
Para facilitar el desarrollo, utilizamos Docker para ejecutar la base de datos en un contenedor. Ejecuta el siguiente comando para construir y levantar el contenedor de la base de datos PostgreSQL:

```bash
docker-compose up --build
```

5. **Sincroniza la Base de Datos con el Esquema de Prisma:**
Una vez que la base de datos esté en funcionamiento, ejecuta el siguiente comando para sincronizar el esquema de la base de datos con Prisma:

```bash
npx prisma migrate dev
```

6. **Inicia el Servidor de Desarrollo:**
Una vez que todas las dependencias estén instaladas y el entorno esté configurado, puedes iniciar el servidor de desarrollo:

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación en [http://localhost:3000](http://localhost:3000)

### Contribuye

¡Ahora estás listo para contribuir al desarrollo de Easy TEC! Puedes comenzar a implementar nuevas funcionalidades, corregir errores o realizar mejoras. Asegúrate de enviar tus cambios a través de las Pull Request.

¡Gracias por contribuir al proyecto!
