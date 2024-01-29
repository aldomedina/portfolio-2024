'use client'

import React from 'react'
import { Cards } from './CardsGroup'
import { Html } from '@react-three/drei'

const CardsScene = (props) => {
  return (
    <>
      <Cards />
    </>
  )
}

CardsScene.displayName = 'CardsScene'

export { CardsScene }
