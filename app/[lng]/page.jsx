'use client'

import { cards } from '@/components/canvas/CardsScene/cards'
import MarqueeBaner from '@/components/dom/MarqueeBaner'
import Spinner from '@/components/dom/Spinner'
import Toolbox from '@/components/dom/Toolbox'
import { useTranslation } from '@/i18n/client'

import useLandingStore from '@/stores/landingStore'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Trans } from 'react-i18next'

const CardsScene = dynamic(() => import('@/components/canvas/CardsScene').then((mod) => mod.CardsScene), { ssr: false })
const CarouselScene = dynamic(
  () => import('@/components/canvas/CardsScene/CarouselScene').then((mod) => mod.CarouselScene),
  {
    ssr: false,
  },
)

const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => <Spinner />,
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page({ params: { lng } }) {
  const { t } = useTranslation(lng, 'home')

  return (
    <>
      <div className='flex h-dvh flex-col'>
        <div className='relative  h-4/5 overflow-hidden'>
          {/* <div className='absolute left-4 top-0 hidden size-full items-end font-mono font-medium uppercase leading-none lg:flex	  '>
            <span className='text-[21vw] lg:text-[11vw]'>
              <Trans i18nKey={t('hero')} />
            </span>
          </div> */}
        </div>
        <div className='mx-auto flex w-full flex-auto flex-col justify-between gap-8 p-4 text-sm leading-5 sm:flex-row lg:gap-16 lg:p-8 2xl:w-4/5 2xl:text-lg'>
          <div className='hidden max-w-52 flex-1 sm:block 2xl:max-w-72'>
            <p>
              <Trans i18nKey={t('hero.above')} />
            </p>
          </div>
          <div className='flex-1 sm:max-w-52 2xl:max-w-72'>
            <p>
              <Trans i18nKey={t('hero.creative')} />
            </p>
          </div>
          <div className='hidden max-w-52 flex-1 md:block 2xl:max-w-72'>
            <p>
              <Trans i18nKey={t('hero.skilled')} />
            </p>
          </div>
          <div className='hidden max-w-52 flex-1 md:block 2xl:max-w-72'>
            <p>
              <Trans i18nKey={t('hero.based')} />
            </p>
          </div>
        </div>
        <div className='flex flex-auto justify-center gap-2 pb-2 text-right'>
          <div className='animate-bounce'>↓</div>
        </div>
        <div className='absolute left-0 top-0 size-full'>
          <View className='relative hidden h-full md:block'>
            <Suspense fallback={null}>
              <CardsScene scale={2} position={[0, 0, 0]} cards={cards} />
              <Common />
            </Suspense>
          </View>
          <View className='relative block h-full md:hidden'>
            <Suspense fallback={null}>
              <CarouselScene scale={2} position={[0, 0, 0]} cards={cards} />
              <Common />
            </Suspense>
          </View>
        </div>
      </div>
      <div className='flex gap-8 bg-gray-950 p-2 font-mono text-4xl leading-none text-gray-100	'>
        <MarqueeBaner />
      </div>
      <div id='me' className='min-h-dvh  bg-gray-950	p-4 text-gray-100 lg:p-8		'>
        <div className='mb-8 flex flex-col font-mono leading-none'>
          <span>[02]</span> <span className='ml-[-8px] text-[30vw] lg:text-[11vw]'>ME</span>{' '}
        </div>
        <div className='mx-auto flex flex-col justify-between gap-32  lg:flex-row xl:gap-64 2xl:w-4/5'>
          <div className='basis-1/3'>
            <span className='font-normal'>
              <Trans i18nKey={t('hero.bio')} />
            </span>
          </div>
          <div className='flex basis-2/3 justify-between gap-8'>
            <Toolbox />
          </div>
        </div>
      </div>
    </>
  )
}
