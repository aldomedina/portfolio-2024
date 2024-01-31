'use client'

import { cards } from '@/components/canvas/CardsScene/cards'
import Spinner from '@/components/dom/Spinner'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Suspense, useState } from 'react'
import Marquee from 'react-fast-marquee'
import { featuredProjects, otherProjects } from './content'
const CardsScene = dynamic(() => import('@/components/canvas/CardsScene').then((mod) => mod.CardsScene), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => <Spinner />,
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  const [active, setActive] = useState(false)
  return (
    <>
      <div className='flex  flex-col'>
        <div className='mx-auto flex h-96 w-full items-end p-4 text-sm leading-5 lg:p-8 2xl:w-4/5 2xl:text-lg'>
          <p className='flex-1 sm:max-w-52 2xl:max-w-72'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam hic officiis minima quos magni iste
            voluptatibus consequuntur omnis cumque illo!
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
                <span className='mr-4 text-9xl uppercase'>{el.title}</span>
                <div className='mr-4 mt-4 rounded border-2 border-gray-950'>
                  <Image src={el.imageUrl} alt='teapot' width={100 * el.ratio} height={100} />
                </div>
              </Marquee>
            </div>
          ))}
        </div>
      </div>
      <div className='mx-auto flex min-h-48 w-full items-end p-4 text-sm leading-5 lg:p-8 2xl:w-4/5 2xl:text-lg'>
        <p className='flex-1 sm:max-w-52 2xl:max-w-72'>
          The following section exposes further work experiences as a front-end developer and designer, focusing on a
          variety of web-based projects.
        </p>
      </div>
      <div className='bg-gray-950'>
        <div className='mx-auto flex w-full justify-between  p-4 font-mono text-4xl uppercase text-gray-100 lg:px-8 2xl:w-4/5 2xl:text-lg'>
          {/* <div className='w-24'>[1.{i < 5 ? '0' + (5 + i) : '' + (5 + i)}]</div> */}
          <div className='basis-1/4'>project name</div>
          <div className='basis-1/4'>working for</div>
          <div className='basis-1/4'>role</div>
          <div className='w-24'>year</div>
        </div>
      </div>
      {otherProjects.map((el, i) => (
        <div key={el.id} className='border-t border-gray-600'>
          <div className='mx-auto flex w-full justify-between   p-4 font-mono text-4xl uppercase lg:px-8 2xl:w-4/5 2xl:text-lg'>
            {/* <div className='w-24'>[1.{i < 5 ? '0' + (5 + i) : '' + (5 + i)}]</div> */}
            <div className='basis-1/4 font-bold'>{el.name}</div>
            <div className='basis-1/4'>{el.workingFor}</div>
            <div className='basis-1/4'>{el.roles}</div>
            <div className='w-24'>{el.year}</div>
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
