'use client'

import { useMemo, useRef } from 'react'
import { Card } from './Card'
import { useFrame, useThree } from '@react-three/fiber'
import { ContactShadows } from '@react-three/drei'

const CarouselScene = ({ cards, shadows }) => {
  const count = cards.length
  const group = useRef(null)
  const { width, height } = useThree((s) => s.size)

  const radius = useMemo(() => {
    const newRadius = (width * 1) / height

    return newRadius < 1.8 ? 1.8 : newRadius > 2.8 ? 2.8 : newRadius
  }, [width, height])

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    const y = group.current.rotation.y + delta * 0.2
    if (shadows) {
      group.current.rotation.set(Math.cos(t / 4) / 12, y, 0.05 + Math.sin(t / 2) / 12)
      group.current.position.y = (1.5 + Math.cos(t / 2)) / 7
    } else {
      group.current.rotation.y = y
    }
  })

  return (
    <>
      <group ref={group}>
        {cards.map((el, i) => (
          <Card
            {...el}
            key={`${el.id}-carousel`}
            scale={[radius * 0.8, radius * 0.8, 0.04]}
            position={[Math.sin((i / count) * Math.PI * 2) * radius, 0, Math.cos((i / count) * Math.PI * 2) * radius]}
            rotation={[0, Math.PI * 2 + (i / count) * Math.PI * 2, 0]}
            imgTexture
          />
        ))}
      </group>
      {shadows && <ContactShadows resolution={512} position={[0, -0.8, 0]} opacity={1} scale={10} blur={2} far={0.8} />}
    </>
  )
}
CarouselScene.displayName = 'CarouselScene'
export { CarouselScene }
