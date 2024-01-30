'use client'

import React, { useRef } from 'react'
import { cards } from './cards'
import { Card } from './Card'
import { useFrame } from '@react-three/fiber'

const COUNT = cards.length
const RADIUS = 1.4
const CarouselScene = () => {
  const group = useRef(null)

  useFrame((_, delta) => {
    group.current.rotation.y += delta * 0.3
  })

  return (
    <>
      <group ref={group}>
        {cards.map((el, i) => (
          <Card
            key={el.id}
            {...el}
            scale={el.scale.map((axis) => axis * 0.666)}
            position={[Math.sin((i / COUNT) * Math.PI * 2) * RADIUS, 0, Math.cos((i / COUNT) * Math.PI * 2) * RADIUS]}
            rotation={[0, Math.PI * 2 + (i / COUNT) * Math.PI * 2, 0]}
            imgTexture
          />
        ))}
      </group>
    </>
  )
}
CarouselScene.displayName = 'CarouselScene'
export { CarouselScene }
