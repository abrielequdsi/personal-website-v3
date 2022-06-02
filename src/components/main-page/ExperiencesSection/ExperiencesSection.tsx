import React from 'react'
import { SectionTitle } from '@components/ui'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}


const ExperiencesSection = ({ experiences }: any): JSX.Element => {
  return (
    <div className="py-12 sm:py-16" id="experience">
      <div className="px-0 sm:px-8 md:px-16 lg:px-24 xl:px-36">
        <SectionTitle number={2} title={'Work Experiences'} />
        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
          {experiences.map((experience: any, index: number) => (
            <Disclosure as="div" key={index} className="pt-6">
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                      {/* CONTENT */}
                      <div className="flex space-x-4 lg:space-x-6">
                        {/* <div className="w-9 h-9 lg:w-11 lg:h-11">
                        <Image
                          className="rounded-full"
                          src={experience.companyLogo}
                          alt="Company Logo"
                          width={20}
                          height={20}
                          layout="responsive"
                        />
                      </div> */}
                        <div key={index}>
                          <div>
                            <p className="block text-xl font-semibold text-chinese-black">
                              {experience.properties.Role.title[0]?.plain_text}
                            </p>
                            <p className="mt-1 text-base font-semibold text-x2-grey hover:text-chinese-black hover:underline animated">
                              {
                                experience.properties.Company.rich_text[0]
                                  ?.plain_text
                              }
                            </p>
                            <p className="mt-1 text-xs text-x2-grey">
                              {
                                experience.properties.Date.rich_text[0]
                                  ?.plain_text
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                      <span className="ml-6 h-7 flex items-center">
                        <ChevronDownIcon
                          className={classNames(
                            open ? '-rotate-180' : 'rotate-0',
                            'h-6 w-6 transform'
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel
                    as="dd"
                    className="mt-2 pr-0 pt-3 pb-3 pl-5 md:pr-12"
                  >
                    {/* BULLET POINT */}
                    <ul
                      role="list"
                      className="list-disc marker:text-vampire-black space-y-3"
                    >
                      {experience.properties.Desc.rich_text[0]?.plain_text
                        .split('\n\n')
                        .map((bullet: String, index: number) => (
                          <li
                            className="text-sm text-gray-500 pl-1"
                            key={index}
                          >
                            {bullet}
                          </li>
                        ))}
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default ExperiencesSection
