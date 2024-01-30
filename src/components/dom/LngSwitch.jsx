import { useRouter, useParams, useSelectedLayoutSegments } from 'next/navigation'

import React from 'react'

const LngSwitch = () => {
  const router = useRouter()
  const params = useParams()
  const urlSegments = useSelectedLayoutSegments()
  const lng = useParams()?.lng

  const handleLocaleChange = (newLocale) => router.push(`/${newLocale}/${urlSegments.join('/')}`)

  return (
    <div className='flex h-max flex-col items-center justify-between gap-x-4 lg:flex-row'>
      <button onClick={() => handleLocaleChange('en')} className={`${lng === 'en' ? 'text-orange-600' : ''}`}>
        EN
      </button>
      <span className='h-4 w-px bg-current opacity-30' />
      <button onClick={() => handleLocaleChange('esp')} className={`${lng === 'esp' ? 'text-orange-600' : ''}`}>
        ESP
      </button>
      <span className='h-4 w-px bg-current opacity-30' />
      <button onClick={() => handleLocaleChange('pt')} className={`${lng === 'pt' ? 'text-orange-600' : ''}`}>
        PT
      </button>
    </div>
  )
}

export default LngSwitch
