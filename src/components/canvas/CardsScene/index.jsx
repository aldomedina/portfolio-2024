'use client'

import React from 'react'
import { CardsGroup } from './CardsGroup'
import { Html } from '@react-three/drei'

const CardsScene = ({ cards, fast = false }) => {
  return (
    <>
      <CardsGroup cards={cards} fast={fast} />
    </>
  )
}

CardsScene.displayName = 'CardsScene'

export { CardsScene }
