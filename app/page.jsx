'use client'

import MarqueeBaner from '@/components/dom/MarqueeBaner'
import Spinner from '@/components/dom/Spinner'
import Toolbox from '@/components/dom/Toolbox'
import useLandingStore from '@/stores/landingStore'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const CardsScene = dynamic(() => import('@/components/canvas/CardsScene').then((mod) => mod.CardsScene), { ssr: false })
const Face = dynamic(() => import('@/components/canvas/Face').then((mod) => mod.Face), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => <Spinner />,
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  const activeProject = useLandingStore((s) => s.activeProject)
  return (
    <>
      <div className='flex h-dvh flex-col'>
        <div className='relative h-5/6  overflow-hidden sm:h-4/5'>
          <div className='absolute left-4 top-0 flex size-full items-end  font-mono  font-medium uppercase leading-none    '>
            {activeProject ? (
              <span className='text-[21vw] lg:text-[16vw]'>{activeProject}</span>
            ) : (
              <span className='text-[21vw] lg:text-[13vw]'>
                FEATURED <br className='block lg:hidden' /> PROJECTS
              </span>
            )}
          </div>
        </div>
        <div className='mx-auto flex w-full flex-auto justify-between gap-8 p-4 text-sm leading-5 lg:gap-16 lg:p-8 2xl:w-4/5 2xl:text-lg'>
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
          <div className='hidden max-w-52 flex-1 sm:block 2xl:max-w-72'>
            <p>
              <strong>Skilled</strong> in web development, creative coding, 3D design, data management, and various
              frameworks and tools.
            </p>
          </div>
          <div className='hidden max-w-52 flex-1 sm:block 2xl:max-w-72'>
            <p>
              <strong>Based</strong> in Santiago de Chile. Open to work. Available for remote work.
            </p>
          </div>
        </div>
        <div className='flex flex-auto justify-center gap-2 pb-2 text-right'>
          <div className='animate-bounce'>↓</div>
        </div>
        <div className='absolute left-0 top-0 size-full'>
          <View className='relative h-full'>
            <Suspense fallback={null}>
              <CardsScene scale={2} position={[0, 0, 0]} />
              <Common />
            </Suspense>
          </View>
        </div>
      </div>
      <div className='flex gap-8 bg-gray-950 p-2 font-mono text-[10vw] leading-none text-gray-100	'>
        <MarqueeBaner />
      </div>
      <div className='min-h-dvh  bg-gray-950	p-4 text-gray-100 lg:p-8		'>
        <div className='mx-auto flex flex-col justify-between gap-32  lg:flex-row xl:gap-64 2xl:w-4/5'>
          <div className='basis-1/3'>
            <span className='font-normal'>
              <strong>Creative Technologist</strong> positioned at the intersections of engineering, art, and design.
              With 5 years of experience in the field of programming, I have applied my knowledge to design interfaces
              and program data visualizations that facilitate informed decision-making, as well as in the development
              and assembly of digital art works. In addition, I have team experience utilizing agile methodologies,
              specifically SCRUM, in web app development. On the other hand, my career has been closely linked to the
              educational sector, from the development of public policies to programmatic design and classroom work.
            </span>
          </div>
          <div className='flex basis-2/3 justify-between gap-8'>
            <Toolbox />
          </div>
        </div>
      </div>
      <div className='relative overflow-hidden bg-gray-950 p-4 pb-8	text-gray-100 lg:p-8'>
        <View className='pointer-events-none absolute bottom-[-60%] left-[-10%]  aspect-[0.46] w-1/2 lg:bottom-[-80%]	'>
          <Suspense fallback={null}>
            <Face scale={0.2} position={[0, -1, 0]} />
          </Suspense>
        </View>
        <div className='mx-auto flex font-mono text-[9.5vw] leading-none lg:text-[7.5vw] xl:gap-64 2xl:w-4/5'>
          <div className='basis-1/3'></div>
          <div className='basis-2/3 text-right'>
            REACH OUT TROUGH{' '}
            <a
              href='https://www.linkedin.com/in/aldo-medina-z/'
              target='_blank'
              className='underline underline-offset-8'
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
