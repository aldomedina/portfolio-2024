import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Html, RoundedBox, useCursor } from '@react-three/drei'
import { VideoMaterial } from './VideoMaterial'
import { useRouter } from 'next/navigation'
import { useFrame } from '@react-three/fiber'
import { lerp } from 'three/src/math/MathUtils'
import useLandingStore from '@/stores/landingStore'

const ELAPSED_TIME = 3500

const Card = ({ url, scale, route, positions, ...props }) => {
  const setActiveProject = useLandingStore((s) => s.setActiveProject)

  const ref = useRef(null)
  const router = useRouter()
  const [activeIndex, setActiveIndex] = useState(0)
  const [hovered, hover] = useState(false)
  useCursor(hovered)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % positions.length
      setActiveIndex(nextIndex)
    }, ELAPSED_TIME)

    return () => clearInterval(interval)
  }, [activeIndex, positions.length])

  useFrame((state, delta) => {
    ref.current.position.x = lerp(ref.current.position.x, positions[activeIndex][0], delta * 1.5)
    ref.current.position.y = lerp(ref.current.position.y, positions[activeIndex][1], delta * 1.5)
    ref.current.position.z = lerp(ref.current.position.z, positions[activeIndex][2], delta * 1.5)
  })

  return (
    <group
      ref={ref}
      position={positions[0]}
      onPointerOver={() => {
        setActiveProject(props.homeDisplay + ' →')
        hover(true)
      }}
      onPointerOut={() => {
        setActiveProject(false)
        hover(false)
      }}
      onClick={() => router.push(route)}
    >
      <RoundedBox scale={scale} position-z={-0.06} castShadow receiveShadow>
        <meshBasicMaterial color={hovered ? '#ea140c' : '#0D0F11'} />
      </RoundedBox>
      <mesh>
        <planeGeometry args={[scale[0] - 0.1, scale[1] - 0.1]} />
        <Suspense fallback={null}>
          <VideoMaterial url={url} />
        </Suspense>
      </mesh>
    </group>
  )
}

export { Card }
