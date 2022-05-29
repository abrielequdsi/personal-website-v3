import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'About', href: '#' },
  { name: 'Experience', href: '#' },
  { name: 'Works', href: '#' },
  { name: 'Contact', href: '#' },
]

const Navbar = () => {
  return (
    <Popover>
      <nav
        className="relative max-w-8xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-9 lg:px-11 xl:px-13 "
        aria-label="Global"
      >
        <div className="flex items-center justify-between flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#">
              <img
                className="h-10 w-auto sm:h-11"
                src="Logo_2.svg"
                alt="Main Logo"
              />
            </a>
            <div className="-mr-2 flex items-center md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:space-x-10">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-gray-500 hover:text-indigo-600"
              >
                <span className="text-indigo-600">0{index + 1}. </span>
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
        {/* <div className="hidden md:block text-right">
      <span className="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
        >
          Log in
        </a>
      </span>
    </div> */}
      </nav>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img className="h-8 w-auto" src="Logo_3.svg" alt="" />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <span className="block text-transparent w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
              Log in
            </span>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Navbar
