'use client'

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 face.glb -T -S -S -d 
*/

import React, { useRef } from 'react'
import { Environment, Lightformer, MeshTransmissionMaterial, useGLTF } from '@react-three/drei'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { degToRad } from 'three/src/math/MathUtils'
import { LayerMaterial, Depth, Fresnel } from 'lamina'

const Face = (props) => {
  const ref = useRef(null)
  const { nodes, materials } = useGLTF('/face-transformed.glb')

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.5
  })
  const gradient = 0.7
  return (
    <>
      <group ref={ref} {...props} dispose={null} rotation-x={degToRad(-30)}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['aldo-v6'].geometry}
          position={[0.316, 0.602, -0.09]}
          rotation={[1.329, 0.002, 1.296]}
          scale={0.07}
        >
          <meshStandardMaterial color='white' />
        </mesh>
      </group>
      <ambientLight />
    </>
  )
}

Face.displayName = 'Face'

export { Face }
