import React from 'react'
import { MailIcon } from '@heroicons/react/solid'

const ContactSection = () => {
  return (
    <div className="py-28 sm:py-32" id="contact">
      <div className="px-0 sm:px-8 md:px-16 lg:px-24 xl:px-36">
        <div className="text-left sm:text-center text-x2-grey font-medium">
          04. Contact
        </div>
        <div className="relative flex mt-2 mb-0 sm:mb-5 items-center">
          <div className="flex-grow border-t border-light-grey hidden sm:block "></div>
          <h1 className="flex-shrink mx-0 sm:mx-4 text-3xl  lg:text-4xl font-extrabold  text-chinese-black">
            Get In Touch
          </h1>
          <div className="flex-grow border-t border-light-grey hidden sm:block "></div>
        </div>
        <div>
          {' '}
          <p className="mt-4 md:mt-6 px-0 md:px-16 text-md lg:text-lg text-x2-grey text-start sm:text-center">
            Although I am not actively looking for job opportunities, my inbox
            is still open for you. Feel free to ask me anything!
          </p>
        </div>

        <div className="mt-8 sm:max-w-lg sm:mx-auto text-left sm:text-center">
          <button className="mt-0 px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-vampire-black shadow-sm hover:ring-vampire-black hover:outline-none hover:ring-2 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vampire-black sm:mt-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto sm:text-base animated">
            <MailIcon className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
            Email Me
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
