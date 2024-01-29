import { Card } from './Card'

import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame, useThree } from '@react-three/fiber'

import { cards } from './cards'

const Cards = (props) => {
  const group = useRef(null)
  useFrame((state, delta) => {
    easing.dampE(
      group.current.rotation,
      [-state.pointer.y * (Math.PI / 10), -state.pointer.x * (Math.PI / 10), 0],
      1.5,
      delta,
    )
  })
  return (
    <group ref={group}>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </group>
  )
}

export { Cards }

//scale={[vw * card.width, (vw * card.width) / card.ratio, CARD_THICKNESS]}
