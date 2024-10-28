import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useAuth } from "@/hooks/useAuth"
import { UserInfo, Logo } from "./"
import { HiBars3 } from "react-icons/hi2"

// const products = [
//   { name: "Analytics", description: "Get a better understanding of your traffic", href: "/principal/dashboard", icon: FaChartPie },
//   { name: "Engagement", description: "Speak directly to your customers", href: "horario", icon: HiCursorArrowRays }
// ]
// const callsToAction: { name: string, href: string, icon: ElementType }[] = [
//   // { name: "Add semester", href: "#", icon: FaPlayCircle },
//   // { name: "Add ", href: "#", icon: FaPhone },
// ]

// const HeaderLink = ({ to, children }: { to: string, children: ReactNode }) => (
//   <NavLink
//     to={to}
//     className={({ isActive }) => `
//       text-sm leading-6 text-gray-900 items-center py-2 px-3 font-medium rounded-md cursor-pointer transition-colors
//       ${isActive ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}
//     `}
//   >
//     {children}
//   </NavLink>
// )

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { status } = useAuth()

  return (
    <header className="bg-white border-b-1 border-b-default">
      <nav aria-label="Global" className="mx-auto flex items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <NavLink to="/principal/dashboard">
            <span className="sr-only">Easy TEC</span>
            <Logo expanded />
          </NavLink>
        </div>


        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Abrir menu principal</span>
            <HiBars3 aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/*
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton
              className="
                flex items-center gap-x-1 py-2 px-3 rounded-md cursor-pointer
                transition-colors text-sm font-semibold leading-6 text-gray-900 hover:bg-indigo-50
              "
            >
              Dashboard
              <HiChevronDown aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="
                absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden
                rounded-3xl bg-white shadow-lg border-1 border-default border-opacity-40
                transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200
                data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in
              "
            >
              <div className="p-4 flex flex-col gap-1">
                {products.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) => `
                      group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-5
                      ${isActive ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}
                    `}
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="flex-auto">
                      <h4 className="block font-semibold text-gray-900">{item.name}</h4>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </NavLink>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <HeaderLink to="calendar">Calendario</HeaderLink>
          <HeaderLink to="horario">Horario</HeaderLink>
        </PopoverGroup>
 */}

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {
            status === "unauthenticated" ? (
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            ) : <UserInfo />
          }
        </div>
      </nav>



      {/* <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Easy TEC</span>
              <Logo expanded={mobileMenuOpen} />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <FaXmark aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                    <HiChevronDown aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <HeaderLink to="calendar">Calendario</HeaderLink>
                <HeaderLink to="horario">Horario</HeaderLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog> */}
    </header >
  )
}
