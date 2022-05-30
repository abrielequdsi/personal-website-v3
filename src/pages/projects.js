import React from 'react'
import { LeftLineDecor, RightLineDecor } from '@components/ui'
import { SectionTitle } from '@components/ui'
import Image from 'next/image'
import { ExternalLinkIcon } from '@heroicons/react/outline'
import { ArchiveIcon } from '@heroicons/react/solid'

const projectList = [
  {
    year: '2019',
    title: 'Algo Lab So ALgo Lab',
    techStacks: [
      'Go',
      'Kubernetes',
      'Next.js',
      'React-Native',
      'ElasticSearch',
      'PostgreSQL',
    ],
    team: '4 people',
    link: 'https://github.com/',
  },
  // More people...
]

const projects = () => {
  return (
    <div>
      <LeftLineDecor />
      <RightLineDecor />
      <div className="py-16 sm:py-24" id="project">
        <div className="relative flex pt-5 items-center mt-1">
          <div className="">
            <h2 className="flex-shrink mr-4 text-3xl sm:text-4xl font-extrabold  text-chinese-black ">
              Projects Archive
            </h2>
          </div>
        </div>

        <div className="mb-5">
          <p className="mt-4 text-base sm:text-lg  text-x2-grey">
            All of the things I have worked on
          </p>
        </div>
        <div className="">
          <div className="mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-base font-semibold text-gray-900 sm:pl-6 w-1"
                  >
                    Year
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-base font-semibold text-gray-900"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-base font-semibold text-gray-900 lg:table-cell"
                  >
                    Team
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-base font-semibold text-gray-900 lg:table-cell"
                  >
                    Built with
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {projectList.map((project, i) => (
                  <tr key={i}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-base font-semibold text-x2-grey sm:pl-6">
                      {project.year}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-base font-medium font-semibold text-vampire-black">
                      {project.title}
                    </td>
                    <td className="hidden whitespace-nowrap px-3 py-4 text-base text-x2-grey lg:table-cell">
                      {project.team}
                    </td>
                    <td className="hidden whitespace-nowrap px-3 py-4 text-base text-x2-grey lg:table-cell">
                      {project.techStacks}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-base font-medium sm:pr-6">
                      <a href={project.link}>
                        <ExternalLinkIcon
                          className="text-x2-grey hover:text-vampire-black animated w-full block"
                          width="25px"
                          height="25px"
                          layout="responsive"
                        />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default projects
