import React, { useState, useEffect } from 'react'
import { XIcon } from '@heroicons/react/solid'

const Alert = ({ status, clearAlert }) => {
  //   const [showAlert, setShowAlert] = useState(true)

  const toggleAlert = () => {
    // setShowAlert(false)
    clearAlert()
    // setShowAlert(true)
    // setShowAlert()
  }

  return (
    <>
      {(() => {
        if (status !== '') {
          if (status == 'success') {
            return (
              <div className="rounded-md bg-green-100 p-4 mt-6">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">
                      Thank you for contacting!
                    </p>
                  </div>
                  <div className="ml-auto pl-3">
                    <div className="-mx-1.5 -my-1.5">
                      <button
                        type="button"
                        className="inline-flex bg-green-100 rounded-md p-1.5 text-green-500 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
                        onClick={toggleAlert}
                      >
                        <span className="sr-only">Dismiss</span>
                        <XIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <div className="rounded-md bg-red-100 p-4 mt-6">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm font-medium text-red-800">
                      Message Failed to Send
                    </p>
                  </div>
                  <div className="ml-auto pl-3">
                    <div className="-mx-1.5 -my-1.5">
                      <button
                        type="button"
                        className="inline-flex bg-red-100 rounded-md p-1.5 text-red-500 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600"
                        onClick={toggleAlert}
                      >
                        <span className="sr-only">Dismiss</span>
                        <XIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        }
      })()}
    </>
  )
}

export default Alert
