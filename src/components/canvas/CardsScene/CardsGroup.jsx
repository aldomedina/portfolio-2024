import { Card } from './Card'

import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame, useThree } from '@react-three/fiber'

const CardsGroup = ({ cards, fast = false }) => {
  const group = useRef(null)
  useFrame((state, delta) => {
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
        <Card key={card.id} fast={fast} {...card} />
      ))}
    </group>
  )
}

export { CardsGroup }

//scale={[vw * card.width, (vw * card.width) / card.ratio, CARD_THICKNESS]}
