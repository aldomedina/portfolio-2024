import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

const LngSwitch = () => {
  const { locale, locales, route, query } = useRouter()

  return (
    <div className='flex h-max flex-col items-center justify-between gap-x-4 lg:flex-row'>
      {locales?.map((item) => (
        <Fragment key={`locale-menu-${item}`}>
          <Link
            href={{ pathname: route, query }}
            locale={item}
            className={`uppercase ${locale === item ? 'text-orange-600' : ''} cursor-pointer hover:text-orange-600`}
          >
            {item}
          </Link>
          <span className='h-4 w-px bg-current opacity-30 last:hidden' />
        </Fragment>
      ))}
    </div>
  )
}

export default LngSwitch
