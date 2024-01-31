import React from 'react'

const Pill = ({ children }) => {
  return (
    <div className='h-max whitespace-nowrap  bg-gray-100 px-1 py-px text-sm font-medium text-gray-950'>{children}</div>
  )
}

export default Pill
