import React from 'react'
import { SectionTitle } from '@components/ui'
import Image from 'next/image'
import Link from 'next/link'
import { ArchiveIcon } from '@heroicons/react/solid'

const ProjectsSection = ({ featuredProjects, otherFeaturedProjects }) => {
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
        {featuredProjects.map((project, index) => (
          <div key={index} className="group text-sm">
            <div
              className={
                'w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 animated'
              }
            >
              <Link href={project.properties.Link?.url || '/'}>
                <a>
                  <Image
                    src={
                      project.properties.Image.files[0]?.external.url ||
                      '/blank_image.svg'
                    }
                    className="w-full h-full object-center object-cover "
                    alt="Project Image"
                    width={576}
                    height={300}
                    layout="responsive"
                  />
                </a>
              </Link>
            </div>
            <div className="my-4 flex justify-between items-center">
              <h3 className="block text-xl lg:text-2xl font-bold text-gray-900">
                {project.properties.Name.title[0].plain_text}
              </h3>
              <div>
                <button
                  type="button"
                  href={project.properties.Link?.url || ''}
                  // className="inline-flex items-center px-4 py-2  text-sm font-medium rounded-md text-chinese-black bg-light-grey hover:bg-light-grey  hover:ring-light-grey hover:outline-none hover:ring-2 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vampire-black animated"
                  className="inline-flex items-center px-4 py-2  text-sm font-semibold rounded-md text-vampire-black bg-light-grey hover:bg-vampire-black hover:text-anti-flash-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vampire-black animated"
                >
                  View Project
                </button>
              </div>
            </div>
            <p className="text-x2-grey text-base">
              {project.properties.Desc.rich_text[0].plain_text}
            </p>
            {project.properties.Tech_Stacks.multi_select.map((tag, index) => (
              <span
                key={index}
                className="mt-2 text-x2-grey  pr-2.5 py-0.5  inline-flex items-center text-xs font-semibold"
              >
                {tag.name}
              </span>
            ))}
          </div>
        ))}
      </div>
      <h2 className="text-3xl font-extrabold  text-chinese-black text-center mb-10 pt-16 sm:pt-24">
        Other Noteworthy Projects
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-x-3 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        {otherFeaturedProjects.map((project, index) => (
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
                <Link href={project.properties.Link?.url || '/'}>
                  <a>{project.properties.Name.title[0].plain_text}</a>
                </Link>
              </h3>
              <p className="text-sm text-x2-grey">
                {project.properties.Desc.rich_text[0].plain_text}
              </p>
              <div className="justify-end">
                {project.properties.Tech_Stacks.multi_select.map(
                  (tag, index) => (
                    <span
                      key={index}
                      className="mt-2 text-x2-grey  pr-2.5 py-0.5  inline-flex items-center text-xs font-semibold"
                    >
                      {tag.name}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 sm:max-w-lg sm:mx-auto text-left sm:text-center">
        <Link href="/projectsArchive">
          <button className="mt-0 px-6 py-3 inline-flex items-center border border-transparent text-sm font-medium rounded-md text-white bg-vampire-black shadow-sm hover:ring-vampire-black hover:outline-none hover:ring-2 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vampire-black sm:mt-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto sm:text-base animated">
            <ArchiveIcon className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
            View Archives
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ProjectsSection
