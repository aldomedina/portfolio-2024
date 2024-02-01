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
import Accordion from '@/components/dom/Accordion'
import Pill from '@/components/dom/Pill'

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
        <div className='mx-auto flex h-[28rem] w-full items-end p-4 text-sm md:h-96 md:p-8 2xl:w-4/5 2xl:text-lg'>
          <p className='max-w-52 leading-5 2xl:max-w-72'>
            <Trans i18nKey={t('intro')} />
          </p>
        </div>
        <div className='flex w-full flex-col border-b border-gray-600 font-mono leading-none'>
          {featuredProjects.map((el, i) => (
            <div
              key={el.id}
              onPointerOver={() => setActive(el.id)}
              onPointerOut={() => setActive(false)}
              className='cursor-pointer border-t border-gray-600 pb-3 hover:bg-orange-600'
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
        <div className='mx-auto hidden w-full justify-between p-4 font-mono text-2xl uppercase text-gray-100 md:flex md:px-8 lg:text-4xl 2xl:w-4/5 2xl:text-lg'>
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
        <Accordion
          key={el.id}
          header={
            <div key={el.id} className='cursor-pointer border-t border-gray-400 hover:bg-orange-600'>
              <div className='mx-auto flex w-full flex-wrap gap-x-4 p-4 font-mono text-xl uppercase md:flex-nowrap md:justify-between  md:px-8 lg:text-4xl 2xl:w-4/5 2xl:text-lg'>
                <div className='basis-full font-medium md:basis-1/4'>
                  <span className='text-xl font-normal md:hidden'>[{el.year}]</span> {el.name}
                </div>

                <div className='w-max md:basis-1/4'>
                  <span className='mt-4 font-sans text-sm font-bold normal-case opacity-30 md:hidden'>
                    <Trans i18nKey={t('mobile-working-for')} />
                    <br />
                  </span>
                  {el.workingFor}
                </div>

                <div className='w-max md:basis-1/4'>
                  <span className='mt-4 font-sans text-sm font-bold normal-case opacity-30 md:hidden'>
                    <Trans i18nKey={t('mobile-as')} />
                    <br />
                  </span>
                  {el.roles}
                </div>
                <div className='hidden w-24 md:block'>{el.year}</div>
              </div>
            </div>
          }
        >
          <div className='relative mx-auto flex w-full flex-col gap-2 p-4 md:flex-row md:gap-8 md:p-8 2xl:w-4/5'>
            <div className='w-full border-t border-dashed border-gray-400 pt-4 md:w-64 md:border-none md:pt-0 lg:w-96 '>
              {el.body}
            </div>
            <div className='w-px self-stretch bg-gray-600' />
            <div className='flex-1 gap-4'>
              <div className='mb-4 text-sm font-semibold text-gray-600'>Tools:</div>
              <div className='flex flex-wrap gap-2'>
                {el.tools.map((tool, i) => (
                  <Pill key={`${el.id}-${tool}-${i}`} dark>
                    {tool}{' '}
                  </Pill>
                ))}
              </div>
            </div>
            {el.web && (
              <>
                <div className='w-px self-stretch bg-gray-600' />
                <div>
                  <div className='mb-2 text-sm font-semibold text-gray-600'>website:</div>
                  <a
                    href={el.web}
                    target='_blank'
                    rel='noreferrer noopener'
                    className='font-mono text-xl hover:text-orange-600'
                  >
                    {el.web}
                  </a>
                </div>
              </>
            )}
          </div>
        </Accordion>
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
