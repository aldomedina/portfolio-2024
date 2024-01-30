import { useTranslation } from '@/i18n/client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { Trans } from 'react-i18next'
import LngSwitch from './LngSwitch'

const Nav = ({ lng }) => {
  const { t } = useTranslation(lng, 'nav')
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
            ALDO — <br className='block lg:hidden' />
            <Trans i18nKey='title' components={[<br className='block lg:hidden' key='0' />]} t={t} />
          </div>
          <div className=''>
            <Link href='/'>
              <div className='flex hover:text-orange-600'>
                <span className='w-8'>[00]</span> <span className='uppercase'>{t('nav.home')} →</span>
              </div>
            </Link>
            <Link href='/projects'>
              <div className='flex hover:text-orange-600'>
                <span className='w-8'>[01]</span> <span className='uppercase'>{t('nav.projects')} →</span>
              </div>
            </Link>

            <div className='m-0	 flex cursor-pointer hover:text-orange-600' onClick={handleMeClick}>
              <span className='w-8'>[02]</span> <span className='uppercase'>{t('nav.me')} →</span>
            </div>
          </div>
        </div>
        <LngSwitch />
      </div>
    </div>
  )
}

export default Nav
