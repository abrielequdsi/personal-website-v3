import React from 'react'
import Link from 'next/link'
import type { NextPage } from 'next'

const Custom404: NextPage = () => {
  return (
    <div
      className="max-w-2xl mx-8 sm:mx-auto py-20 flex flex-col items-center justify-center fit"
      style={{ minHeight: 'calc(100vh - 88px)' }}
    >
      <div className="min-h-full pt-16 pb-12 flex flex-col bg-white">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 flex justify-center">
            <Link href="/" className="inline-flex ">
              <img
                className="h-14 w-auto cursor-pointer"
                src="main_logo.svg"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="pb-16 pt-12">
            <div className="text-center">
              <p className="text-sm font-semibold text-x2-grey uppercase tracking-wide">
                404 error
              </p>
              <h1 className="mt-2 text-4xl font-extrabold text-vampire-black tracking-tight sm:text-5xl">
                Page not found.
              </h1>
              <p className="mt-2 text-base text-gray-500">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="mt-6">
                <Link
                  href="/"
                  //   className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                >
                  <div className="text-chinese-black font-semibold animated hover:underline hover:font-bold cursor-pointer">
                    Go back home<span aria-hidden="true"> &rarr;</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Custom404
