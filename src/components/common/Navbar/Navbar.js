import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const navigation = [
  { name: 'About', href: '/#about' },
  { name: 'Experiences', href: '/#experience' },
  { name: 'Projects', href: '/#project' },
  { name: 'Contact', href: '/#contact' },
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
            <Link href="/#">
              <a>
                <img
                  className="h-10 w-auto sm:h-11 hover:opacity-80"
                  src="main_logo.svg"
                  alt="Main Logo"
                />
              </a>
            </Link>
            <div className="-mr-2 flex items-center md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-chinese-black hover:text-vampire-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-vampire-black">
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
                className="font-medium text-x2-grey hover:text-chinese-black animated focus:text-chinese-black"
              >
                <span className="text-chinese-black">0{index + 1}. </span>
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
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
                <img className="h-8 w-auto" src="main_logo.svg" alt="" />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-vampire-dark hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-vampire-black">
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
