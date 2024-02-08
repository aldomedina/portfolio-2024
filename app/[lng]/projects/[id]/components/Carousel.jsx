'use client'

import Spinner from '@/components/dom/Spinner'
import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'

const CarouselScene = dynamic(
  () => import('@/components/canvas/CardsScene/CarouselScene').then((mod) => mod.CarouselScene),
  {
    ssr: false,
  },
)
const DesktopCarouselScene = dynamic(
  () => import('@/components/canvas/CardsScene/DesktopCarouselScene').then((mod) => mod.DesktopCarouselScene),
  {
    ssr: false,
  },
)

const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => <Spinner />,
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

const Carousel = ({ cards }) => {
  return (
    <>
      <View className='hidden size-full md:block'>
        <Suspense fallback={null}>
          <DesktopCarouselScene cards={cards} />
          <Common />
        </Suspense>
      </View>
      <View className='block size-full md:hidden'>
        <Suspense fallback={null}>
          <CarouselScene scale={2} position={[0, 0, 0]} cards={cards} radius={2} />
          <Common />
        </Suspense>
      </View>
    </>
  )
}

export default Carousel
