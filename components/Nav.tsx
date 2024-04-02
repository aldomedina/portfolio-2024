import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import React from 'react'
import LngSwitch from './LngSwitch'
import { useTranslation, Trans } from 'next-i18next'

const Nav = () => {
  const { t, i18n } = useTranslation('common')
  const router = useRouter()
  const pathname = usePathname()

  const handleMeClick = () => {
    if (pathname !== '/en' && pathname !== '/esp' && pathname !== '/pt') {
      router.push('/#me')
    } else {
      const element = document.getElementById('me')
      element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
  }

  return (
    <div className='absolute left-0 top-0 w-full font-medium'>
      <div className='box flex justify-between font-mono'>
        <div className='select-none '>
          <Link href='/'>
            <div className='mb-4 border-b border-current pb-4 text-2xl md:border-none'>
              ALDO — <br className='block md:hidden' />
              <Trans i18nKey='title' components={[<br className='block md:hidden' key='0' />]} t={t} />
            </div>
          </Link>
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
