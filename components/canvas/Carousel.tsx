import React, { useMemo, useRef } from 'react'
import { cards } from './cards'
import { useFrame, useThree } from '@react-three/fiber'
import { Group } from 'three'
import Card from './Card'
import { IImage3D } from '@/types/content'

const Carousel = ({ cards }: { cards: IImage3D[] }) => {
  const ref = useRef<Group>(null)
  const count = cards.length
  const { width, height } = useThree((s) => s.size)

  const radius = useMemo(() => {
    const newRadius = (width * 1) / height
    return newRadius < 1.8 ? 1.8 : newRadius > 2.8 ? 2.8 : newRadius
  }, [width, height])

  useFrame((state, delta) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime()
    const y = ref.current.rotation.y + delta * 0.2

    ref.current.rotation.set(Math.cos(t / 4) / 12, y, 0.05 + Math.sin(t / 2) / 12)
    ref.current.position.y = (1.5 + Math.cos(t / 2)) / 7
  })

  return (
    <group ref={ref}>
      {cards.map((el, i) => (
        <group
          key={`carousel-${el.id}`}
          position={[Math.sin((i / count) * Math.PI * 2) * radius, 0, Math.cos((i / count) * Math.PI * 2) * radius]}
          rotation={[0, Math.PI * 2 + (i / count) * Math.PI * 2, 0]}
        >
          <Card scale={[radius * 0.8, radius * 0.8, 0.04]} url={el.image} fallbackUrl={el.image} />
        </group>
      ))}
    </group>
  )
}

export default Carousel
