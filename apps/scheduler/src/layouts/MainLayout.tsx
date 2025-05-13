import { SchedulesProvider } from "@/context/schedule";
import { Alert, Button, HeroUIProvider, Tab, Tabs, useTheme } from "@easy-tec/ui";
import { IoSunny, IoMoon } from "react-icons/io5";
import { NavigateOptions, Outlet, To, useHref, useLocation, useNavigate } from "react-router";

export function MainLayout() {
  const navigateHook = useNavigate();
  const hrefHook = useHref;
  const location = useLocation()

  const { theme, setTheme } = useTheme()

  // const [theme, setTheme] = useState<"light" | "dark">(localStorage.getItem("theme") === "dark" ? "dark" : "light")

  const handleHideAlert = () => {
    localStorage.setItem("hideAlert", "true")
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <HeroUIProvider
      navigate={(to: To, options?: NavigateOptions) => navigateHook(to, options)}
      useHref={(to: To) => hrefHook(to)}
      className={`bg-content3 p-1 sm:p-6`}
    >
      <SchedulesProvider>
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
        <div className="h-full flex flex-col">
          {/* Heading */}
          <div className="flex justify-between items-center mb-4">
            <Tabs size="lg" classNames={{ panel: "hidden" }} selectedKey={location.pathname}>
              <Tab key="/manual" href="/manual">Manual</Tab>
              <Tab key="/auto" href="/auto">Automático</Tab>
            </Tabs>
            <Button
              onPress={toggleTheme}
              className="bg-content2"
              size="md"
              startContent={theme == "light" ? <IoSunny size={20} /> : <IoMoon size={20} />}
              isIconOnly
            />
          </div>
          {/* Content */}
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </SchedulesProvider>
    </HeroUIProvider>
  );
}
