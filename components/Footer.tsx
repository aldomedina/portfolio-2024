import { Trans, useTranslation } from 'next-i18next'
import React from 'react'

const Footer = () => {
  const { t } = useTranslation('common')
  return (
    <div className='relative overflow-hidden bg-gray-950 p-4 pb-8	text-gray-100 lg:p-8'>
      <div className='mx-auto flex font-mono text-[9.5vw] leading-none lg:text-[7.5vw] xl:gap-64 2xl:w-4/5'>
        <div className='text-right '>
          <Trans i18nKey={t('contact')} />{' '}
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
  )
}

export default Footer
