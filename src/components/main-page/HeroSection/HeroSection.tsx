const HeroSection = (): JSX.Element => {
  return (
    <div className="flex justify-start" style={{ minHeight: '80.6vh' }}>
      <div className="flex items-center">
        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:text-left ">
          <h1>
            <span className="block text-sm  tracking-wide text-x2-grey font-medium sm:text-base lg:text-sm xl:text-base">
              Hi there, I am
            </span>
            <span className="mt-3 sm:mt-3 md:mt-5 block tracking-tight font-extrabold text-4xl sm:text-5xl md:text-6xl  lg:text-7xl">
              <span className="block text-vampire-black">Abriele Qudsi</span>
              <span className="block text-x2-grey mt-3 ">
                Software Engineer
              </span>
            </span>
          </h1>
          <p className="mt-3 sm:mt-5 md:mt-8 text-x2-grey text-sm sm:text-base md:text-base lg:text-lg">
            I am Abriele Qudsi (艾泊屿) a Tech and Cloud Enthusiast currently a
            third-year student at{' '}
            <a
              href="https://www.ucl.ac.uk/"
              className="text-chinese-black font-semibold animated hover:underline hover:font-bold"
            >
              UCL
            </a>{' '}
            studying Computer Science. I was a Software Engineer at{' '}
            <a
              href="https://www.finimize.com/"
              className="text-chinese-black font-semibold animated hover:underline hover:font-bold"
            >
              Finimize
            </a>{' '}
            anda Software Engineer Intern at{' '}
            <a
              href="https://azure.microsoft.com/en-us/industries/telecommunications/#overview"
              className="text-chinese-black font-semibold animated hover:underline hover:font-bold"
            >
              Microsoft
            </a>{' '}
            (Azure for Operators) during the summer.
          </p>
          <div className="mt-5 md:mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
            <a
              href="#contact"
              className="mt-0 px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-vampire-black shadow-sm hover:ring-vampire-black hover:outline-none hover:ring-2 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vampire-black sm:mt-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto sm:text-base animated"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
