import React from 'react'

const Pill = ({ children }) => {
  return (
    <div className='h-max  whitespace-nowrap rounded-full bg-[#052916] px-4 py-2 text-sm font-bold text-[#CCFF00]'>
      {children}
    </div>
  )
}

export default Pill
