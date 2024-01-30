import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Nav = () => {
  const [activeLng, setActiveLng] = useState('eng')
  const router = useRouter()
  const pathname = usePathname()

  const handleMeClick = () => {
    if (pathname !== '/') {
      router.push('/#me')
    } else {
      const element = document.getElementById('me')
      element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
  }
  return (
    <div className='absolute left-0 top-0 w-full font-medium'>
      <div className='mx-auto flex  justify-between  p-4 font-mono lg:px-8 2xl:w-4/5'>
        <div className='select-none '>
          <div className='mb-4 border-b border-current pb-4 text-2xl sm:border-none'>
            ALDO — <br className='block lg:hidden' /> DESIGN & <br className='block lg:hidden' />
            DEVELOPMENT
          </div>
          <div className=''>
            <Link href='/'>
              <div className='flex hover:text-orange-600'>
                <span className='w-8'>[00]</span> <span>HOME →</span>
              </div>
            </Link>
            <Link href='/projects'>
              <div className='flex hover:text-orange-600'>
                <span className='w-8'>[01]</span> <span>PROJECTS →</span>
              </div>
            </Link>

            <div className='m-0 flex hover:text-orange-600' onClick={handleMeClick}>
              <span className='w-8'>[02]</span> <span>ME →</span>
            </div>
          </div>
        </div>
        <div className='flex h-max flex-col items-center justify-between gap-x-4 lg:flex-row'>
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
