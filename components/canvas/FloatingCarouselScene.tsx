import { Canvas } from '@react-three/fiber'
import React from 'react'
import Commons from './Commons'
import Carousel from './Carousel'
import { IImage3D } from '@/types/content'
import { ContactShadows } from '@react-three/drei'

const FloatingCarouselScene = ({ cards }: { cards: IImage3D[] }) => {
  return (
    <Canvas>
      <Commons />
      <Carousel cards={cards} />
      <ContactShadows resolution={512} position={[0, -0.8, 0]} opacity={1} scale={10} blur={2} far={0.8} />
    </Canvas>
  )
}

export default FloatingCarouselScene
