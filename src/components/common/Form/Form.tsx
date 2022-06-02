import React, { useState } from 'react'
import { Alert } from '@components/ui'

const Form = (): JSX.Element => {
  const [alert, setAlert] = useState('')
  const [loading, setLoading] = useState(false)
  // Input states
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  // Form submit handler
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/submit-form', {
      method: 'POST',
      body: JSON.stringify({ name, email, subject, message }),
    })
    setLoading(false)
    // Success if status code is 201
    if (res.status === 201) {
      setAlert('success')
    } else {
      setAlert('fail')
    }
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  return (
    <div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border">
          <div className="lg:col-span-2">
            <form
              className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              onSubmit={submitForm}
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
                    name="full-name"
                    id="full-name"
                    autoComplete="full-name"
                    className="py-3 px-4 block w-full shadow-sm text-sm lg:text-base text-gray-900 focus:outline-none focus:ring-1 focus:ring-vampire-black focus:border-vampire-black border-gray-300 rounded-md border"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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
                    id="subject"
                    name="subject"
                    type="text"
                    className="py-3 px-4 block w-full shadow-sm text-sm lg:text-base text-gray-900 focus:outline-none focus:ring-1 focus:ring-vampire-black focus:border-vampire-black border-gray-300 rounded-md border"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2 sm:flex sm:justify-end">
                <button
                  type="submit"
                  className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent  font-medium rounded-md text-white bg-vampire-black shadow-sm hover:ring-vampire-black hover:outline-none hover:ring-2 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vampire-black sm:mt-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto text-base animated"
                >
                  {loading ? (
                    <>
                      <svg
                        role="status"
                        className="inline w-11 h-6 mx-3 text-gray-200 animate-spin dark:text-gray-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="#AAAAAA"
                        />
                      </svg>
                    </>
                  ) : (
                    <>Let&apos;s talk</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        <Alert status={alert} setAlert={setAlert} />
      </div>
    </div>
  )
}

export default Form
