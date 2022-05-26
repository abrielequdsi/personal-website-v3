import React from 'react'

const SectionTitle = ({ number, title }) => {
  return (
    <div className="grid grid-cols-3 items-center mt-6">
      <div className="col-span-1">
        <h2 className="text-3xl font-extrabold  text-gray-900">
          <span className=" text-indigo-600 font-normal text-2xl">
            0{number}.
          </span>{' '}
          {title}
        </h2>
      </div>
      <div className="col-span-2">
        <hr />
      </div>
    </div>
  )
}

export default SectionTitle
