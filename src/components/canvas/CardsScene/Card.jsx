import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Html, RoundedBox, useCursor } from '@react-three/drei'
import { FallbackMaterial, VideoMaterial } from './VideoMaterial'
import { useRouter } from 'next/navigation'
import { useFrame, extend } from '@react-three/fiber'
import { lerp } from 'three/src/math/MathUtils'
import useLandingStore from '@/stores/landingStore'
import { geometry } from 'maath'
import Spinner from '@/components/dom/Spinner'
extend(geometry)

const Card = ({ imgTexture = false, fast = false, url, scale, route, positions, ...props }) => {
  const setActiveProject = useLandingStore((s) => s.setActiveProject)

  const ref = useRef(null)
  const router = useRouter()
  const [activeIndex, setActiveIndex] = useState(0)
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  const ELAPSED_TIME = fast ? 1500 : 3500

  useEffect(() => {
    const interval = setInterval(() => {
      if (imgTexture) return
      const nextIndex = (activeIndex + 1) % positions.length
      setActiveIndex(nextIndex)
    }, ELAPSED_TIME)

    return () => clearInterval(interval)
  }, [activeIndex, ELAPSED_TIME])

  useFrame((state, delta) => {
    if (imgTexture) return
    const velocity = fast ? 3 : 1.5
    ref.current.position.x = lerp(ref.current.position.x, positions[activeIndex][0], delta * velocity)
    ref.current.position.y = lerp(ref.current.position.y, positions[activeIndex][1], delta * velocity)
    ref.current.position.z = lerp(ref.current.position.z, positions[activeIndex][2], delta * velocity)
  })

  return (
    <group
      ref={ref}
      position={imgTexture ? props.position : positions[0].map((axis) => axis * 8)}
      rotation={imgTexture ? props.rotation : [0, 0, 0]}
      onPointerOver={() => {
        if (imgTexture) return
        setActiveProject(props.homeDisplay + ' →')
        hover(true)
      }}
      onPointerOut={() => {
        if (imgTexture) return
        setActiveProject(false)
        hover(false)
      }}
      onClick={() => {
        route && router.push(route)
      }}
    >
      <RoundedBox scale={scale} position-z={imgTexture ? -0.03 : -0.06} castShadow receiveShadow>
        <meshBasicMaterial color={hovered ? '#ea140c' : '#0D0F11'} />
      </RoundedBox>
      <mesh>
        <roundedPlaneGeometry args={[scale[0] - 0.07, scale[1] - 0.07, imgTexture ? 0.04 : 0.06]} />
        {imgTexture ? (
          <Suspense
            fallback={
              <Html center>
                <Spinner />
              </Html>
            }
          >
            <FallbackMaterial url={props.image} />
          </Suspense>
        ) : (
          <Suspense fallback={props.fallback ? <FallbackMaterial url={props.fallback} /> : null}>
            <VideoMaterial url={url} />
          </Suspense>
        )}
      </mesh>
    </group>
  )
}

export { Card }
