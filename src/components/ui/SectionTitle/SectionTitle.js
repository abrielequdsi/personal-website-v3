import React from 'react'

const SectionTitle = ({ number, title }) => {
  return (
    <div className="relative flex pt-5 items-center mt-1">
      <div className="">
        <h2 className="flex-shrink mr-4 text-2xl sm:text-3xl font-extrabold  text-gray-900 ">
          <span className=" text-indigo-600 font-semibold text-xl sm:text-2xl pb-1">
            0{number}.
          </span>{' '}
          {title}
        </h2>
      </div>
      <div className="flex-grow border-t max-w-md border-gray-300" />
    </div>
  )
}

export default SectionTitle
