import { RoundedBox } from '@react-three/drei'
import React from 'react'
import { Vector3 } from 'three'

const CardFrame = ({ scale, hovered }: { scale: [x: number, y: number, z: number]; hovered?: boolean }) => {
  return (
    <RoundedBox scale={scale} position-z={-0.06} castShadow receiveShadow>
      <meshBasicMaterial color={hovered ? '#ea140c' : '#0D0F11'} />
    </RoundedBox>
  )
}

export default CardFrame
