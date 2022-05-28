import React from 'react'
import { Navbar, Footer } from '@components/common'

const Layout = ({ children }) => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* <div
      className="hidden lg:block lg:absolute lg:inset-0"
      aria-hidden="true"
    >
      <svg
        className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
        width={640}
        height={784}
        fill="none"
        viewBox="0 0 640 784"
      >
        <defs>
          <pattern
            id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
            x={118}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          y={72}
          width={640}
          height={640}
          className="text-gray-50"
          fill="currentColor"
        />
        <rect
          x={118}
          width={404}
          height={784}
          fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
        />
      </svg>
    </div> */}

      <div className="relative pt-6 sm:pt-8 md:pt-8 ">
        <Navbar />
        <main className="mx-auto max-w-7xl px-6 xs:px-10 sm:px-10 md:px-32 ">
          {/* px-4 max-w-7xl mx-auto sm:px-6 md:px-14 */}
          {/* px-4 max-w-2xl mx-auto sm:px-6 lg:px-8 lg:max-w-7xl */}
          {/* px-4 max-w-7xl mx-auto sm:px-6 lg:px-8 */}
          {/* max-w-4xl */}
          {/* px-4 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 */}
          {/* px-4 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 */}
          {/* max-w-4xl */}

          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
