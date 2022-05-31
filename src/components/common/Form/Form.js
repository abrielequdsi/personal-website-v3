import React from 'react'

const Form = () => {
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border">
        <div className="lg:col-span-2">
          <form
            action="#"
            method="POST"
            className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm text-sm lg:text-base text-gray-900 focus:outline-none focus:ring-1 focus:ring-vampire-black focus:border-vampire-black border-gray-300 rounded-md border"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full text-sm lg:text-base shadow-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-vampire-black focus:border-vampire-black border-gray-300 rounded-md border"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-900"
              >
                Subject
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="py-3 px-4 block w-full shadow-sm text-sm lg:text-base text-gray-900 focus:outline-none focus:ring-1 focus:ring-vampire-black focus:border-vampire-black border-gray-300 rounded-md border"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex justify-between">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900"
                >
                  Message
                </label>
                <span id="message-max" className="text-sm text-x2-grey">
                  Max. 500 characters
                </span>
              </div>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm text-sm lg:text-base text-gray-900 focus:outline-none focus:ring-1 focus:ring-vampire-black focus:border-vampire-black border border-gray-300 rounded-md"
                  aria-describedby="message-max"
                  defaultValue={''}
                />
              </div>
            </div>
            <div className="sm:col-span-2 sm:flex sm:justify-end">
              <button
                type="submit"
                className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent  font-medium rounded-md text-white bg-vampire-black shadow-sm hover:ring-vampire-black hover:outline-none hover:ring-2 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vampire-black sm:mt-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto text-base animated"
              >
                Let&apos;s talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
