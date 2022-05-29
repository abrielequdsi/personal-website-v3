import { Navbar } from '@components/common'

const HeroSection = () => {
  return (
    <div
      // className="mt-16  sm:mt-24 lg:mt-32 py-20 sm:py-28 lg:py-36"
      className="flex justify-start"
      style={{ minHeight: '80.6vh' }}
    >
      {/* <div className="mt-16 sm:mt-24 lg:mt-32 py-20 sm:py-28 lg:py-36"> */}
      <div className="flex items-center">
        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:text-left ">
          {/* <div className="mt-16 mx-auto max-w-7xl px-4 sm:px-6 md:px-14 sm:mt-24 lg:mt-32 py-20 sm:py-28 lg:py-36">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"> */}
          <h1>
            <span className="block text-sm  tracking-wide text-indigo-600 font-medium sm:text-base lg:text-sm xl:text-base">
              Hi there, I am
            </span>
            <span className="mt-3 sm:mt-3 md:mt-5 block tracking-tight font-extrabold text-4xl sm:text-5xl md:text-6xl  lg:text-7xl">
              {/* <span className="mt-3 sm:mt-5 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl"> */}
              <span className="block text-gray-900">Abriele Qudsi</span>
              <span className="block text-indigo-600 mt-3">
                Software Engineer
              </span>
            </span>
          </h1>
          <p className="mt-3 sm:mt-5 md:mt-8 text-gray-500 text-sm sm:text-base md:text-base lg:text-lg">
            I am a Tech and Cloud Enthusiast that currently a first year student
            at{' '}
            <a
              href="#"
              className="text-indigo-600 hover:underline hover:text-indigo-700"
            >
              UCL
            </a>{' '}
            studying Computer Science .This summer I will work as a Platform
            Engineer Intern at{' '}
            <a
              href="#"
              className="text-indigo-600  hover:underline hover:text-indigo-700"
            >
              Beacon Platform
            </a>
            .
          </p>
          <div className="mt-5 md:mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
            <button className="mt-0 px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto sm:text-base">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
