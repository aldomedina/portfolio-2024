'use client'
import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Nav from './Nav'
import { Trans } from 'react-i18next'
import { useTranslation } from '@/i18n/client'
const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false })

const Layout = ({ children, lng }) => {
  const ref = useRef()
  const { t } = useTranslation(lng, 'home')
  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: ' 100%',
        height: '100%',
        overflow: 'auto',
        touchAction: 'auto',
      }}
      className='bg-gray-200 text-gray-950	'
    >
      {children}

      <Scene
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
        }}
        eventSource={ref}
        eventPrefix='client'
      />
      <Nav lng={lng} />
      <div className='relative overflow-hidden bg-gray-950 p-4 pb-8	text-gray-100 lg:p-8'>
        <div className='mx-auto flex font-mono text-[9.5vw] leading-none lg:text-[7.5vw] xl:gap-64 2xl:w-4/5'>
          <div className='text-right '>
            <Trans i18nKey={t('hero.contact')} />{' '}
            <a
              href='https://www.linkedin.com/in/aldo-medina-z/'
              className='underline underline-offset-8 hover:text-orange-600'
              target='_blank'
              rel='noreferrer noopener'
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Layout }
