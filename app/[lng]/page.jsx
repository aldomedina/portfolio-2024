'use client'

import MarqueeBaner from '@/components/dom/MarqueeBaner'
import Spinner from '@/components/dom/Spinner'
import Toolbox from '@/components/dom/Toolbox'
import useLandingStore from '@/stores/landingStore'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const CardsScene = dynamic(() => import('@/components/canvas/CardsScene').then((mod) => mod.CardsScene), { ssr: false })
const CarouselScene = dynamic(
  () => import('@/components/canvas/CardsScene/CarouselScene').then((mod) => mod.CarouselScene),
  {
    ssr: false,
  },
)
const Face = dynamic(() => import('@/components/canvas/Face').then((mod) => mod.Face), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => <Spinner />,
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page({ params: { lng } }) {
  return (
    <>
      <div className='flex h-dvh flex-col'>
        <div className='relative  h-4/5 overflow-hidden'>
          <div className='absolute left-4 top-0 hidden size-full items-end font-mono font-medium uppercase leading-none lg:flex	  '>
            <span className='text-[21vw] lg:text-[13vw]'>
              FEATURED <br className='block lg:hidden' /> PROJECTS
            </span>
          </div>
        </div>
        <div className='mx-auto flex w-full flex-auto flex-col justify-between gap-8 p-4 text-sm leading-5 sm:flex-row lg:gap-16 lg:p-8 2xl:w-4/5 2xl:text-lg'>
          <div className='hidden max-w-52 flex-1 sm:block 2xl:max-w-72'>
            <p>
              <strong>Above</strong> is presented a selection of web based projects that I’ve worked during the last
              years. Click on them to know more.
            </p>
          </div>
          <div className='flex-1 sm:max-w-52 2xl:max-w-72'>
            <p>
              <strong>Creative technologist</strong> with programming expertise, experienced in agile teams, and linked
              to the educational sector.
            </p>
          </div>
          <div className='hidden max-w-52 flex-1 md:block 2xl:max-w-72'>
            <p>
              <strong>Skilled</strong> in web development, creative coding, UX/UI design, data management, and various
              frameworks and tools.
            </p>
          </div>
          <div className='hidden max-w-52 flex-1 md:block 2xl:max-w-72'>
            <p>
              <strong>Based</strong> in Santiago de Chile. Open to work. Available for remote work.
            </p>
          </div>
        </div>
        <div className='flex flex-auto justify-center gap-2 pb-2 text-right'>
          <div className='animate-bounce'>↓</div>
        </div>
        <div className='absolute left-0 top-0 size-full'>
          <View className='relative hidden h-full md:block'>
            <Suspense fallback={null}>
              <CardsScene scale={2} position={[0, 0, 0]} />
              <Common />
            </Suspense>
          </View>
          <View className='relative block h-full md:hidden'>
            <Suspense fallback={null}>
              <CarouselScene scale={2} position={[0, 0, 0]} />
              <Common />
            </Suspense>
          </View>
        </div>
      </div>
      <div className='flex gap-8 bg-gray-950 p-2 font-mono text-[10vw] leading-none text-gray-100	'>
        <MarqueeBaner />
      </div>
      <div id='me' className='min-h-dvh  bg-gray-950	p-4 text-gray-100 lg:p-8		'>
        <div className='mx-auto flex flex-col justify-between gap-32  lg:flex-row xl:gap-64 2xl:w-4/5'>
          <div className='basis-1/3'>
            <span className='font-normal'>
              <strong>Creative Technologist</strong> with a blend of expertise in engineering, art, and design, and five
              years of hands-on experience in programming. My skill set includes designing user interfaces and crafting
              data visualizations that empower informed decision-making, as well as contributing to the creation and
              development of digital artworks. My collaborative experience is also rooted in agile methodologies, with a
              focus on SCRUM, particularly in the realm of web application development. Additionally, my professional
              journey has maintained a strong connection to the educational sector, encompassing everything from the
              development of public policies to the formulation of academic programs and direct classroom involvement.
            </span>
          </div>
          <div className='flex basis-2/3 justify-between gap-8'>
            <Toolbox />
          </div>
        </div>
      </div>
      <div className='relative overflow-hidden bg-gray-950 p-4 pb-8	text-gray-100 lg:p-8'>
        <div className='mx-auto flex font-mono text-[9.5vw] leading-none lg:text-[7.5vw] xl:gap-64 2xl:w-4/5'>
          <div className='text-right '>
            REACH OUT ON{' '}
            <a
              href='https://www.linkedin.com/in/aldo-medina-z/'
              target='_blank'
              className='underline underline-offset-8 hover:text-[#CCFF00]'
              rel='noreferrer noopener'
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
