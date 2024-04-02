import { ICard } from '@/types/cards'
import { useCursor } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import { Group } from 'three'

import CardFrame from './CardFrame'
import { lerp } from 'three/src/math/MathUtils.js'
import CardMedia from './CardMedia'
import { useRouter } from 'next/router'

const ELAPSED_TIME = 3500

const MovingCard = ({ card }: { card: ICard }) => {
  const router = useRouter()
  const ref = useRef<Group>(null)
  const { scale, positions, firstPos, image, url, route } = card
  const [hovered, hover] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  useCursor(hovered)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % positions.length
      setActiveIndex(nextIndex)
    }, ELAPSED_TIME)

    return () => clearInterval(interval)
  }, [activeIndex, positions.length])

  useFrame((_, delta) => {
    if (!ref.current) return
    const velocity = 1.5
    ref.current.position.x = lerp(ref.current.position.x, positions[activeIndex][0], delta * velocity)
    ref.current.position.y = lerp(ref.current.position.y, positions[activeIndex][1], delta * velocity)
    ref.current.position.z = lerp(ref.current.position.z, positions[activeIndex][2], delta * velocity)
  })

  return (
    <group
      position={firstPos.map((axis) => axis * 8) as [x: number, y: number, z: number]}
      ref={ref}
      onPointerOver={() => route && hover(true)}
      onPointerOut={() => route && hover(false)}
      onClick={() => route && router.push(route)}
    >
      <CardFrame scale={scale} hovered={hovered} />
      <CardMedia url={url} fallbackUrl={image} scale={scale} isVideo />
    </group>
  )
}

export default MovingCard
