import React, { useState } from 'react'

const Nav = () => {
  const [activeLng, setActiveLng] = useState('eng')
  return (
    <div className='absolute left-0 top-0 w-full font-medium'>
      <div className='mx-auto flex  justify-between  p-4 font-mono lg:px-8 2xl:w-4/5'>
        <span className='select-none text-2xl'>
          ALDO — <br className='block lg:hidden' /> DESIGN & <br className='block lg:hidden' />
          DEVELOPMENT
        </span>
        <div className='flex flex-col items-center justify-between gap-x-4 lg:flex-row'>
          <span className={`${activeLng === 'eng' ? 'text-orange-600' : ''}`}>ENG</span>
          <span className='h-4 w-px bg-current opacity-30' />
          <span className={`${activeLng === 'esp' ? 'text-orange-600' : ''}`}>ESP</span>
          <span className='h-4 w-px bg-current opacity-30' />
          <span className={`${activeLng === 'pt' ? 'text-orange-600' : ''}`}>PT</span>
        </div>
      </div>
    </div>
  )
}

export default Nav
