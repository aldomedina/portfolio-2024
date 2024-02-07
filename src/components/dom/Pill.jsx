import React from 'react'

const Pill = ({ children, dark }) => {
  return (
    <div
      className={`size-max whitespace-nowrap px-1  py-px text-sm font-medium ${dark ? 'text-gray-100' : 'text-gray-950'} ${dark ? 'bg-gray-950' : 'bg-gray-100'}`}
    >
      {children}
    </div>
  )
}

export default Pill
