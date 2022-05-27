import React from 'react'
import { SectionTitle } from '@components/ui'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
        {/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Customers also purchased
        </h2> */}

        <SectionTitle number={1} title={'About Me'} />

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          <div className="group relative col-span-2">
            <p className="mt-4 text-lg text-gray-500">
              <span className="text-indigo-600 font-semibold">
                An innovative developer
              </span>{' '}
              offering experience in the full software development lifecycle -
              from concept through delivery of next-generation applications and
              customisable solutions. I am a hard-working programmer with a
              flair for creating elegant solutions in a collaborative manner.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              <span className="text-indigo-600 font-semibold">
                I enjoy creating things that live on the internet,
              </span>{' '}
              whether that be websites, applications, or anything in between. My
              goal is always to build products that provide pixel-perfect,
              performant experiences.
            </p>
          </div>
          <div className="group relative col-span-1 mx-8 md:mr-5">
            <div className="w-full block absolute rounded-md top-5 left-5 border-2 border-indigo-600">
              <Image
                src="/potrait.jpg"
                alt="Profile Image"
                className="w-full object-center rounded-md object-cover lg:w-full lg:h-full opacity-0"
                layout="responsive"
                height="275"
                width="275"
              />
            </div>
            <div className="w-full relative">
              <div className="bg-indigo-600 rounded-md w-full h-full absolute" />
              <Image
                src="/potrait.jpg"
                alt="Profile Image"
                className="w-full object-center rounded-md object-cover lg:w-full lg:h-full opacity-25 group-hover:opacity-100"
                height="275"
                width="275"
                layout="responsive"
              />
            </div>
          </div>
          <div className="mt-6 group relative col-span-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
              {/*  */}
              <span>Technologies I frequently use</span>
            </h1>
            <div className="mt-10 grid grid-cols-12">
              <div className="col-span-2">
                <Image
                  src="/tech-stacks/Ts.svg"
                  alt="Ts"
                  width={50}
                  height={50}
                />
              </div>
              <div className="col-span-2">
                <Image
                  src="/tech-stacks/React.svg"
                  alt="React"
                  width={50}
                  height={50}
                />
              </div>
              <div className="col-span-2">
                <Image
                  src="/tech-stacks/Next.js.svg"
                  alt="Next.js"
                  width={50}
                  height={50}
                />
              </div>
              <div className="col-span-2">
                <Image
                  src="/tech-stacks/Nest.js.svg"
                  alt="Nest.js"
                  width={50}
                  height={50}
                />
              </div>
              <div className="col-span-2">
                <Image
                  src="/tech-stacks/GraphQL.svg"
                  alt="GraphQL"
                  width={50}
                  height={50}
                />
              </div>
              <div className="col-span-2">
                <Image
                  src="/tech-stacks/Django.svg"
                  alt="Django"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="mt-6 grid grid-cols-12">
              <div className="col-span-2">
                <Image
                  src="/tech-stacks/Aws.svg"
                  alt="Aws"
                  width={50}
                  height={50}
                />
              </div>
              <div className="col-span-2">
                <Image
                  src="/tech-stacks/Terraform.svg"
                  alt="Terraform"
                  width={50}
                  height={50}
                />
              </div>
              <div className="col-span-2">
                <Image
                  src="/tech-stacks/Kubernetes.svg"
                  alt="Kubernetes"
                  width={50}
                  height={50}
                />
              </div>
              <div className="col-span-2">
                <Image
                  src="/tech-stacks/PostgreSQL.svg"
                  alt="PostgreSQL"
                  width={50}
                  height={50}
                />
              </div>
              <div className="col-span-2">
                <Image
                  src="/tech-stacks/MongoDb.svg"
                  alt="MongoDb"
                  width={50}
                  height={50}
                />
              </div>
              <div className="col-span-2">
                <Image
                  src="/tech-stacks/Python.svg"
                  alt="Python"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection