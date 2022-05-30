import React from 'react'

const SectionTitle = ({ number, title }) => {
  return (
    <div className="relative flex pt-5 items-center mt-1">
      <div className="">
        <h2 className="flex-shrink mr-4 text-2xl sm:text-3xl font-extrabold  text-chinese-black ">
          <span className=" text-x2-grey font-semibold text-xl sm:text-2xl pb-1">
            0{number}.
          </span>{' '}
          {title}
        </h2>
      </div>
      <div className="flex-grow border-t max-w-md border-x1-grey" />
    </div>
  )
}

export default SectionTitle
