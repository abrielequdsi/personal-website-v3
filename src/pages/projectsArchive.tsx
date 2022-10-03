import React from 'react'
import type { NextPage } from 'next'
import { LeftLineDecor, RightLineDecor } from '@components/ui'
import { ExternalLinkIcon } from '@heroicons/react/outline'
import { projects } from '@lib/notion'

const projectsArchive: NextPage<any> = (props) => {
  const projects = props.projects.sort((a: any, b: any) =>
    a.properties.Year.rich_text[0].text.content <
    b.properties.Year.rich_text[0].text.content
      ? 1
      : -1
  )

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
                {projects.map((project: any, index: number) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-semibold text-x2-grey sm:pl-6">
                      {project.properties.Year.rich_text[0]?.plain_text}
                    </td>
                    <td className=" px-3 py-4 text-base font-semibold text-vampire-black">
                      {project.properties.Name.title[0]?.plain_text}
                    </td>
                    <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-x2-grey lg:table-cell">
                      {project.properties.Team.rich_text[0]?.plain_text}
                    </td>
                    <td className="hidden px-3 py-4 text-base text-x2-grey lg:table-cell">
                      {project.properties.Tech_Stacks.multi_select.map(
                        (tag: { name: number }, index: number) => (
                          <span
                            key={index}
                            className="text-x2-grey  pr-2.5 py-0.5  inline-flex items-center text-xs font-semibold"
                          >
                            {tag.name}
                          </span>
                        )
                      )}
                    </td>
                    <td className="py-4 pl-3 pr-4 text-base font-medium sm:pr-6">
                      <a href={project.properties.Link?.url || ''}>
                        <ExternalLinkIcon
                          className="text-x2-grey hover:text-vampire-black animated w-full block "
                          style={{ minWidth: '20px', maxWidth: '22.5px' }}
                          width="25px"
                          height="25px"
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

export default projectsArchive

export async function getStaticProps() {
  const projectsRes = await projects()
  return {
    props: {
      projects: projectsRes.results,
    },
  }
}
