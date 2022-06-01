import React from 'react'
import { SectionTitle } from '@components/ui'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

// const experiences = [
//   {
//     role: 'Platform Engineer Intern',
//     employmentType: 'Internship',
//     companyName: 'Beacon Platform',
//     companyLogo:
//       'https://media-exp1.licdn.com/dms/image/C4E0BAQGWO14oMEG4CA/company-logo_100_100/0/1623184776326?e=1661990400&v=beta&t=UMZ216kD8L_IN_2F9xiAQmCPjgrAkOM0qWFBQT2KszQ',
//     location: 'London, UK',
//     date: 'June 2022 - Sep 2022',
//     descriptions: ['', '', ''],
//   },
//   {
//     role: 'Technology Associate',
//     employmentType: 'Part Time',
//     companyName: 'Bridges for Enterprises',
//     companyLogo:
//       'https://media-exp1.licdn.com/dms/image/C4D0BAQHjhxcGTwzi3Q/company-logo_100_100/0/1615429789189?e=1661990400&v=beta&t=pMdgwJBKJKcLkaQVt4pnl4Gzmn2wsCyPl1ewLPSNhms',
//     location: 'Remote',
//     date: 'Jan 2022 - Now',
//     descriptions: ['', '', ''],
//   },
//   {
//     role: 'Software Engineer',
//     employmentType: 'Part Time',
//     companyName: 'PT. Vortex Buana Edumedia',
//     companyLogo:
//       'https://media-exp1.licdn.com/dms/image/C560BAQHvV8_TdJDFqQ/company-logo_100_100/0/1595853166768?e=1661990400&v=beta&t=LpgDuJD8fJNSsVOvqoaBfgItzoKewhIaAgIvLUa2OYs',
//     location: 'Yogyakarta, Indonesia',
//     date: 'May 2020 - Nov 2020',
//     descriptions: [
// "Developed an API to scrape employees' Agile estimation data and story points using Flask and deployed on AWS Lambda, enabling the management team to increase reporting speed by 24%.",
// 'Conducted product intelligence analysis and tested third-party API compatibility with existing MVP that sped up core development by around 30%, which improved team productivity.',
// "Wrote bespoke scripts in Python on the company's internal web tool that increased the throughput of the management team.",
// "Led a project to build a full-stack Django web app for one of the company's client that is now used by 10,000+ users.",
// "Developed an easy-to-use CMS for the client's company admin which sped up queries and cut down admin processes by 80%.",
// 'Provided ongoing maintenance, support and enhancements in the existing client web apps.',
//     ],
//   },
//   {
//     role: 'Content Manager',
//     employmentType: 'Part Time',
//     companyName: 'Neutron Yogyakarta',
//     companyLogo:
//       'https://media-exp1.licdn.com/dms/image/C560BAQEObHt93UKjxw/company-logo_100_100/0/1594088011395?e=1661990400&v=beta&t=SxkVi18FaH67y5zKjksS9I5a_svhf0XoYDRmlb_NLPE',
//     location: 'Yogyakarta, Indonesia',
//     date: 'Feb 2020 - May 2020',
//     descriptions: [
//       'Coordinated and led a team for an e-learning platform where we trained education content creators to record content on their tablets, resulting in 5,000+ videos.',
//       "Undertook research and planning, and managed the company's digital content production flow.",
//       "Responsible for the company's content flow on cloud-based apps.",
//     ],
//   },
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ExperiencesSection = ({ experiences }) => {
  return (
    <div className="py-12 sm:py-16" id="experience">
      <div className="px-0 sm:px-8 md:px-16 lg:px-24 xl:px-36">
        <SectionTitle number={2} title={'Work Experiences'} />
        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
          {experiences.map((experience, index) => (
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
                        .map((bullet, index) => (
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
