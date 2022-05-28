import React from 'react'
import { MailIcon } from '@heroicons/react/solid'

const ContactSection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-28 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <div className="max-w-4xl mx-auto ">
          <div className="text-left sm:text-center text-indigo-600 font-medium">
            04. Contact
          </div>
          <div className="grid grid-cols-3 items-center mt-2">
            <div className="hidden sm:block sm:pr-5">
              <hr />
            </div>
            <div className="col-span-2 sm:col-span-1 text-left sm:text-center">
              <h2 className="text-3xl  lg:text-4xl font-extrabold  text-gray-900">
                Get In Touch
              </h2>
            </div>
            <div className="hidden sm:block sm:pl-5">
              <hr />
            </div>
          </div>
          {/* mt 6 */}
          <div>
            {' '}
            <p className="mt-4 md:mt-6 px-0 md:px-16 text-md md:text-lg text-gray-500 text-start sm:text-center">
              Although I am not actively looking for job opportunities, my inbox
              is still open for you. Feel free to ask me anything!
            </p>
          </div>

          <div className="mt-8 sm:max-w-lg sm:mx-auto text-left sm:text-center">
            <button className="mt-0 px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:flex-shrink-0 inline-flex sm:items-center sm:w-auto sm:text-base">
              <MailIcon className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
              Email Me
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
