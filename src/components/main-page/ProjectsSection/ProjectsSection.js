import React from 'react'
import { SectionTitle } from '@components/ui'
import Image from 'next/image'
import styles from './ProjectSection.module.css'

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

  // More products...
]
const ProjectsSection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
        {/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
      Customers also purchased
    </h2> */}

        <SectionTitle number={3} title={'Projects'} />

        <div className="flex items-center justify-between space-x-4">
          <p className="mt-4 text-lg text-gray-500">
            I am always working on new projects. You can find them on my{' '}
            <a
              href="https://github.com/abrielequdsi"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Github.
            </a>
          </p>
          <a
            href="#"
            className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            View all<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
        <div className="mt-6 mb-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {projects.slice(0, 3).map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group text-sm"
            >
              <div
                className={
                  'w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 ' +
                  styles.imageTransition
                }
              >
                <Image
                  src={project.imageSrc}
                  className="w-full h-full object-center object-cover"
                  alt={project.title}
                  width={576}
                  height={300}
                  layout="responsive"
                />
              </div>
              <div className="my-4 flex justify-between items-center">
                <h3 className="block text-xl lg:text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <div>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    // className="bg-gray-200 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-300"
                  >
                    View Project
                  </button>
                  {/* <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">View Project</button> */}
                  {/* <button
                    type="button"
                    className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                  >
                    View Project
                  </button> */}
                </div>
              </div>
              <p className="text-gray-500 text-base">{project.desc}</p>
              <>
                {project.tags.map((tag) => (
                  //   inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                  <span
                    key={tag}
                    className="mt-2 text-gray-500  pr-2.5 py-0.5  inline-flex items-center text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </>
            </a>
          ))}
        </div>

        <h2 className="text-3xl font-extrabold  text-gray-900 text-center mt-10 sm:mt-14 mb-10">
          Other Noteworthy Projects
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-3 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {projects.slice(3).map((project, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-md flex flex-col overflow-hidden"
            >
              <div className="px-4 pt-4 flex justify-between">
                <div>
                  <Image
                    src="/folder.svg"
                    alt="Logo"
                    width={40}
                    height={40}
                  ></Image>
                </div>
                {/* <div className="text-custom-red">
                  <Image
                    src="/external.svg"
                    alt="Logo"
                    width={23}
                    height={23}
                  ></Image>
                </div> */}
              </div>
              <div className="flex-1 p-4 pt-1 space-y-2 flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600">
                  <a href={project.link}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {project.title}
                  </a>
                </h3>
                <p className="text-sm text-gray-500">{project.desc}</p>
                <div className="justify-end">
                  {project.tags.map((tag) => (
                    //   inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                    <span
                      key={tag}
                      className="mt-2 text-gray-500  pr-2.5 py-0.5  inline-flex items-center text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection
