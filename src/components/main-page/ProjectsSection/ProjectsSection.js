import React from 'react'
import { SectionTitle } from '@components/ui'
import Image from 'next/image'
import { ArchiveIcon } from '@heroicons/react/solid'

const projects = [
  {
    imageSrc: '/project1.png',
    title: 'Project 1',
    link: 'https://github.com/',
    desc: 'An anonymous work marketplace with A.I based job matching. Available on Mobile and website.',
    tags: [
      'Go',
      'Kubernetes',
      'Next.js',
      'React-Native',
      'ElasticSearch',
      'PostgreSQL',
    ],
  },
  {
    imageSrc: '/project2.png',
    title: 'Project 2',
    link: 'https://github.com/',
    desc: 'A real-time collaborative song-request queue for Spotify. Built with Elixir, Spotify API and Phoenix liveview.',
    tags: [
      'Go',
      'Kubernetes',
      'Next.js',
      'React-Native',
      'ElasticSearch',
      'PostgreSQL',
    ],
  },
  {
    imageSrc: '/project1.png',
    title: 'Project 3',
    link: 'https://github.com/',
    desc: 'A real-time collaborative song-request queue for Spotify. Built with Elixir, Spotify API and Phoenix liveview.',
    tags: [
      'Go',
      'Kubernetes',
      'Next.js',
      'React-Native',
      'ElasticSearch',
      'PostgreSQL',
    ],
  },
  {
    imageSrc: '/project1.png',
    title: 'Project 1',
    link: 'https://github.com/',
    desc: 'An anonymous work marketplace with A.I based job matching. Available on Mobile and website.',
    tags: [
      'Go',
      'Kubernetes',
      'Next.js',
      'React-Native',
      'ElasticSearch',
      'PostgreSQL',
    ],
  },
  {
    imageSrc: '/project2.png',
    title: 'Project 2',
    link: 'https://github.com/',
    desc: 'A real-time collaborative song-request queue for Spotify. Built with Elixir, Spotify API and Phoenix liveview.',
    tags: [
      'Go',
      'Kubernetes',
      'Next.js',
      'React-Native',
      'ElasticSearch',
      'PostgreSQL',
    ],
  },
  {
    imageSrc: '/project1.png',
    title: 'Project 3',
    link: 'https://github.com/',
    desc: 'A real-time collaborative song-request queue for Spotify. Built with Elixir, Spotify API and Phoenix liveview.',
    tags: [
      'Go',
      'Kubernetes',
      'Next.js',
      'React-Native',
      'ElasticSearch',
      'PostgreSQL',
    ],
  },
  {
    imageSrc: '/project1.png',
    title: 'Project 1',
    link: 'https://github.com/',
    desc: 'An anonymous work marketplace with A.I based job matching. Available on Mobile and website.',
    tags: [
      'Go',
      'Kubernetes',
      'Next.js',
      'React-Native',
      'ElasticSearch',
      'PostgreSQL',
    ],
  },

  // More products...
]
const ProjectsSection = () => {
  return (
    <div className="py-16 sm:py-24" id="project">
      <SectionTitle number={3} title={'Projects'} />

      <div className="mb-10">
        <p className="mt-4 text-base sm:text-lg  text-x2-grey">
          I am always working on new projects. You can find them on my{' '}
          <a
            href="https://github.com/abrielequdsi"
            className="text-chinese-black font-semibold hover:underline animated"
          >
            Github
          </a>
          .
        </p>
      </div>
      <div className="mt-6 mb-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
        {projects.slice(0, 3).map((project) => (
          <div key={project.title} className="group text-sm">
            <div
              className={
                'w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 animated'
              }
            >
              <a href="">
                <Image
                  src={project.imageSrc}
                  className="w-full h-full object-center object-cover "
                  alt={project.title}
                  width={576}
                  height={300}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="my-4 flex justify-between items-center">
              <h3 className="block text-xl lg:text-2xl font-bold text-gray-900">
                {project.title}
              </h3>
              <div>
                <button
                  type="button"
                  href="#"
                  // className="inline-flex items-center px-4 py-2  text-sm font-medium rounded-md text-chinese-black bg-light-grey hover:bg-light-grey  hover:ring-light-grey hover:outline-none hover:ring-2 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vampire-black animated"
                  className="inline-flex items-center px-4 py-2  text-sm font-semibold rounded-md text-vampire-black bg-light-grey hover:bg-vampire-black hover:text-anti-flash-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vampire-black animated"
                >
                  View Project
                </button>
              </div>
            </div>
            <p className="text-x2-grey text-base">{project.desc}</p>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="mt-2 text-x2-grey  pr-2.5 py-0.5  inline-flex items-center text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* <div className="relative flex pt-5 items-center mt-1">
        <div className="">
          <h2 className="flex-shrink mr-4 text-2xl sm:text-3xl font-extrabold  text-chinese-black ">
            <span className=" text-x2-grey font-semibold text-xl sm:text-2xl pb-1">
              0{number}.
            </span>{' '}
            {title}
          </h2>
        </div>
        <div className="flex-grow border-t max-w-md border-x1-grey" />
      </div> */}

      <h2 className="text-3xl font-extrabold  text-chinese-black text-center mb-10 pt-16 sm:pt-24">
        Other Noteworthy Projects
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-x-3 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        {projects.slice(3).map((project, index) => (
          <div
            key={index}
            className="group relative bg-white border border-light-grey rounded-md flex flex-col overflow-hidden animated"
          >
            <div className="px-4 pt-4 flex justify-between ">
              <Image
                src="/folder.svg"
                alt="Logo"
                width={40}
                height={40}
              ></Image>
            </div>
            <div className="flex-1 p-4 pt-1 space-y-2 flex flex-col justify-between">
              <h3 className="text-xl font-semibold text-chinese-black group-hover:underline animated">
                <a href={project.link}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {project.title}
                </a>
              </h3>
              <p className="text-sm text-x2-grey">{project.desc}</p>
              <div className="justify-end">
                {project.tags.map((tag) => (
                  //   inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                  <span
                    key={tag}
                    className="mt-2 text-x2-grey  pr-2.5 py-0.5  inline-flex items-center text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 sm:max-w-lg sm:mx-auto text-left sm:text-center">
        <a
          href="/projects"
          className="mt-0 px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-vampire-black shadow-sm hover:ring-vampire-black hover:outline-none hover:ring-2 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vampire-black sm:mt-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto sm:text-base animated"
        >
          <ArchiveIcon className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
          View Archives
        </a>
      </div>
    </div>
  )
}

export default ProjectsSection
