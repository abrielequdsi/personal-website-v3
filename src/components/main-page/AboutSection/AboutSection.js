import React from 'react'
import { SectionTitle } from '@components/ui'
import styles from './AboutSection.module.css'
import Image from 'next/image'
import Link from 'next/link'

const AboutSection = () => {
  return (
    <div className="py-16 sm:py-24" id="about">
      {/* px-4 max-w-2xl mx-auto lg:max-w-7xl sm:px-6 lg:px-8  */}

      <SectionTitle number={1} title={'About Me'} />

      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        <div className="group relative col-span-2">
          <p className="mt-4 text-base sm:text-lg  text-x2-grey">
            <span className="text-vampire-black font-semibold">
              An innovative developer
            </span>{' '}
            offering experience in the full software development lifecycle -
            from concept through delivery of next-generation applications and
            customisable solutions. I am a hard-working programmer with a flair
            for creating elegant solutions in a collaborative manner.
          </p>
          <p className="mt-4 text-base sm:text-lg text-gray-500">
            <span className="text-vampire-black font-semibold">
              I enjoy creating things that live on the internet,
            </span>{' '}
            whether that be websites, applications, or anything in between. My
            goal is always to build products that provide pixel-perfect,
            performant experiences.
          </p>
        </div>
        <div className="group relative col-span-1 mx-8 md:mr-5 max-w-xs">
          <div className="w-full block absolute rounded-md top-5 left-5 border-2 border-vampire-black">
            <Image
              priority="true"
              src="/potrait.jpg"
              alt="Profile Image"
              className="w-full object-center rounded-md object-cover lg:w-full lg:h-full opacity-0 "
              layout="responsive"
              height="275"
              width="275"
            />
          </div>
          <div className="w-full relative">
            <div className="bg-vampire-black rounded-md w-full h-full absolute" />
            <Image
              priority="true"
              src="/potrait.jpg"
              alt="Profile Image"
              className={
                'w-full object-center rounded-md object-cover lg:w-full lg:h-full opacity-25 group-hover:opacity-100  ' +
                styles.imageTransition
              }
              height="275"
              width="275"
              layout="responsive"
            />
          </div>
        </div>
        <div className="mt-6 group relative col-span-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-chinese-black">
            <span>Technologies I frequently use</span>
          </h1>
          <div className="mt-10 grid grid-cols-12">
            <Link href="https://www.typescriptlang.org/">
              <a className="col-span-2 animated">
                <Image
                  priority="true"
                  src="/tech-stacks/Ts.svg"
                  alt="Ts"
                  width={42.5}
                  height={42.5}
                />
              </a>
            </Link>
            <a className="col-span-2 animated" href="#">
              <Image
                priority="true"
                src="/tech-stacks/React.svg"
                alt="React"
                width={42.5}
                height={42.5}
              />
            </a>
            <a className="col-span-2 animated" href="#">
              <Image
                priority="true"
                src="/tech-stacks/Next.js.svg"
                alt="Next.js"
                width={42.5}
                height={42.5}
              />
            </a>
            <a className="col-span-2 animated" href="#">
              <Image
                priority="true"
                src="/tech-stacks/Nest.js.svg"
                alt="Nest.js"
                width={42.5}
                height={42.5}
              />
            </a>
            <a className="col-span-2 animated" href="#">
              <Image
                priority="true"
                src="/tech-stacks/GraphQL.svg"
                alt="GraphQL"
                width={42.5}
                height={42.5}
              />
            </a>
            <a className="col-span-2 animated" href="#">
              <Image
                priority="true"
                src="/tech-stacks/Django.svg"
                alt="Django"
                width={42.5}
                height={42.5}
              />
            </a>
          </div>
          <div className="mt-6 grid grid-cols-12">
            <a className="col-span-2 animated" href="#">
              <Image
                priority="true"
                src="/tech-stacks/Aws.svg"
                alt="Aws"
                width={42.5}
                height={42.5}
              />
            </a>
            <a className="col-span-2 animated" href="#">
              <Image
                priority="true"
                src="/tech-stacks/Terraform.svg"
                alt="Terraform"
                width={42.5}
                height={42.5}
              />
            </a>
            <a className="col-span-2 animated" href="#">
              <Image
                priority="true"
                src="/tech-stacks/Kubernetes.svg"
                alt="Kubernetes"
                width={42.5}
                height={42.5}
              />
            </a>
            <a className="col-span-2 animated" href="#">
              <Image
                priority="true"
                src="/tech-stacks/PostgreSQL.svg"
                alt="PostgreSQL"
                width={42.5}
                height={42.5}
              />
            </a>
            <a className="col-span-2 animated" href="#">
              <Image
                priority="true"
                src="/tech-stacks/MongoDb.svg"
                alt="MongoDb"
                width={42.5}
                height={42.5}
              />
            </a>
            <a className="col-span-2 animated" href="#">
              <Image
                priority="true"
                src="/tech-stacks/Python.svg"
                alt="Python"
                width={42.5}
                height={42.5}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
