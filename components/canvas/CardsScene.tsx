import { Canvas, useFrame } from '@react-three/fiber'
import Commons from './Commons'
import { cards } from './cards'
import { useRef } from 'react'
import { easing } from 'maath'
import { Group } from 'three'
import MovingCard from './MovingCard'

const CardsGroup = () => {
  const group = useRef<Group>(null)

  // guiar rotacion del grupo con pos del mouse
  useFrame((state, delta) => {
    if (!group.current) return
    easing.dampE(
      group.current.rotation,
      [-state.pointer.y * (Math.PI / 10), -state.pointer.x * (Math.PI / 10), 0],
      0.5,
      delta,
    )
  })

  return (
    <group ref={group}>
      {cards.map((card) => (
        <MovingCard key={card.id} card={card} />
      ))}
    </group>
  )
}

const CardsScene = () => {
  return (
    <Canvas>
      <Commons />
      <CardsGroup />
    </Canvas>
  )
}

export default CardsScene
