'use client'

import { cards } from '@/components/canvas/CardsScene/cards'
import Spinner from '@/components/dom/Spinner'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Suspense, useState } from 'react'
import Marquee from 'react-fast-marquee'
import { featuredProjects, otherProjects } from './content'
import { Trans } from 'react-i18next'
import { useTranslation } from '@/i18n/client'

const CardsScene = dynamic(() => import('@/components/canvas/CardsScene').then((mod) => mod.CardsScene), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => <Spinner />,
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page({ params: { lng } }) {
  const { t } = useTranslation(lng, 'projects')
  const [active, setActive] = useState(false)
  return (
    <>
      <div className='flex  flex-col'>
        <div className='mx-auto flex h-96 w-full items-end p-4 text-sm lg:p-8 2xl:w-4/5 2xl:text-lg'>
          <p className='max-w-52 leading-5 2xl:max-w-72'>
            <Trans i18nKey={t('intro')} />
          </p>
        </div>
        <div className=' flex w-full flex-col border-b border-gray-600 font-mono leading-none'>
          {featuredProjects.map((el, i) => (
            <div
              key={el.id}
              onPointerOver={() => setActive(el.id)}
              onPointerOut={() => setActive(false)}
              className='cursor-pointer border-t border-gray-600 pb-3 hover:bg-red-100'
            >
              <Marquee autoFill className='z-0 overflow-hidden' direction={i % 2 === 0 ? 'right' : 'left'} speed={20}>
                <span className='mr-4 select-none text-9xl uppercase	'>{el.title}</span>
                <div className='mr-4 mt-4 rounded border-2 border-gray-950'>
                  <Image
                    src={el.imageUrl}
                    alt='teapot'
                    width={100 * el.ratio}
                    height={100}
                    placeholder='blur'
                    blurDataURL={el.blurDataUrl}
                  />
                </div>
              </Marquee>
            </div>
          ))}
        </div>
      </div>
      <div className='mx-auto flex min-h-48 w-full items-end p-4 text-sm leading-5 lg:p-8 2xl:w-4/5 2xl:text-lg'>
        <p className='flex-1 sm:max-w-52 2xl:max-w-72'>
          <Trans i18nKey={t('intro-2')} />
        </p>
      </div>
      <div className='bg-gray-950'>
        <div className='mx-auto hidden w-full justify-between p-4 font-mono text-4xl uppercase text-gray-100 lg:flex lg:px-8 2xl:w-4/5 2xl:text-lg'>
          {/* <div className='w-24'>[1.{i < 5 ? '0' + (5 + i) : '' + (5 + i)}]</div> */}
          <div className='basis-1/4'>
            <Trans i18nKey={t('header-name')} />
          </div>
          <div className='basis-1/4'>
            <Trans i18nKey={t('header-working-for')} />
          </div>
          <div className='basis-1/4'>
            <Trans i18nKey={t('header-role')} />
          </div>
          <div className='w-24'>
            <Trans i18nKey={t('header-year')} />
          </div>
        </div>
      </div>
      {otherProjects.map((el, i) => (
        <div key={el.id} className='border-t border-gray-400'>
          <div className='mx-auto flex w-full flex-col  justify-between p-4 font-mono text-2xl uppercase lg:flex-row lg:px-8 lg:text-4xl 2xl:w-4/5 2xl:text-lg'>
            <div className='font-bold lg:basis-1/4'>
              {el.name} <span className='text-xl font-medium lg:hidden'>— {el.year}</span>
            </div>
            <span className='mt-4 font-sans text-sm normal-case lg:hidden'>
              <Trans i18nKey={t('mobile-working-for')} />
            </span>
            <div className='lg:basis-1/4'>{el.workingFor}</div>
            <span className='mt-4 font-sans text-sm normal-case lg:hidden'>
              <Trans i18nKey={t('mobile-as')} />
            </span>
            <div className='lg:basis-1/4'>{el.roles}</div>
            <div className='hidden w-24 lg:block'>{el.year}</div>
          </div>
        </div>
      ))}

      {active && (
        <View className='pointer-events-none fixed inset-0 z-10 h-dvh w-full'>
          <Suspense fallback={null}>
            <CardsScene scale={2} position={[0, 0, 0]} cards={cards.filter((el) => el.id === active)} fast />
            <Common />
          </Suspense>
        </View>
      )}
    </>
  )
}
