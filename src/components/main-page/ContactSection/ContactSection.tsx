import React from 'react'
import { Form } from '@components/common'

const ContactSection = (): JSX.Element=> {

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
        <Form />
      </div>
    </div>
  )
}

export default ContactSection
