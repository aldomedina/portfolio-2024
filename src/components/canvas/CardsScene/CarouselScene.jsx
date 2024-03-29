'use client'

import { useRef } from 'react'
import { Card } from './Card'
import { useFrame } from '@react-three/fiber'

const CarouselScene = ({ cards }) => {
  const group = useRef(null)
  const count = cards.length
  const radius = 1.8

  useFrame((_, delta) => {
    group.current.rotation.y += delta * 0.15
  })

  return (
    <>
      <group ref={group} position={[0, -0.3, 0]}>
        {cards.map((el, i) => (
          <Card
            {...el}
            key={`${el.id}-carousel`}
            scale={[radius, radius, 0.04]}
            position={[Math.sin((i / count) * Math.PI * 2) * radius, 0, Math.cos((i / count) * Math.PI * 2) * radius]}
            rotation={[0, Math.PI * 2 + (i / count) * Math.PI * 2, 0]}
            imgTexture
          />
        ))}
      </group>
    </>
  )
}

CarouselScene.displayName = 'CarouselScene'

export { CarouselScene }
