import { Navigate, Route, Routes, useHref, useNavigate } from "react-router"
import { Alert, HeroUIProvider } from "@heroui/react"
import { SchedulesPage } from "@/pages/SchedulesPage"
import { AutoSchedulesPage } from "@/pages/AutoSchedulesPage"
import { CustomNavLink } from "@/components/ui/CustomNavLink.tsx"

function App() {
  const navigate = useNavigate()

  const handleHideAlert = () => {
    localStorage.setItem("hideAlert", "true")
  }

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <>
        <Alert
          isClosable
          isDefaultVisible={localStorage.getItem("hideAlert") !== "true"}
          onClose={handleHideAlert}
          color='warning'
          variant='flat'
          title="Disclaimer"
          className='mb-2'
        >
          <p>Esta página no es oficial del Tecnológico de Costa Rica (TEC), es mantenida de manera independiente por un estudiante.</p>
          <p>Se recomienda validar siempre los horarios mostrados aquí con el gestor de horarios oficial. Esta herramienta está diseñada únicamente para facilitar la construcción de su horario.</p>
          <p>Si encuentra algún error, por favor, comuníquelo a la siguiente dirección de correo electrónico: <a href="mailto:f.vargas.1@estudiantec.cr">f.vargas.1@estudiantec.cr</a>. Gracias :)</p>
        </Alert>

        <div className="mb-4 flex gap-2">
          <CustomNavLink to={"/manual"}>Manual</CustomNavLink>
          <CustomNavLink to={"/auto"}>Automático</CustomNavLink>
        </div>

        <Routes>
          <Route path='/' element={<Navigate to={"/manual"} />} />
          <Route path='/manual' element={<SchedulesPage />} />
          <Route path='/auto' element={<AutoSchedulesPage />} />
        </Routes>
      </>
    </HeroUIProvider>
  )
}

export default App
