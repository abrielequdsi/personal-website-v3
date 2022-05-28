import { Navbar } from '@components/common'

const HeroSection = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div
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
      </div>

      <div className="relative pt-6 pb-16 sm:pt-8 md:pt-8 sm:pb-24 lg:pb-32">
        <Navbar />

        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 md:px-14 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-sm  tracking-wide text-indigo-600 font-medium sm:text-base lg:text-sm xl:text-base">
                  Hi there, I am
                </span>
                <span className="mt-3 sm:mt-5 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900">Abriele Qudsi</span>
                  <span className="block text-indigo-600">
                    Software Engineer
                  </span>
                </span>
              </h1>
              <p className="mt-3 text-sm text-gray-500 sm:mt-5 sm:text-base lg:text-base xl:text-lg">
                I am a Tech & Cloud Enthusiast that currently a first year
                student at <span className="text-indigo-600">UCL</span>. In this
                summer I will work as a platform engineer intern in{' '}
                <span className="text-indigo-600">Beacon Platform</span>.
              </p>
              <div className="mt-6 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <button className="mt-0 px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto sm:text-base">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default HeroSection
