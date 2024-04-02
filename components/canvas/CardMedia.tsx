import { useTexture, useVideoTexture } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import { geometry } from 'maath'
import { Suspense } from 'react'

extend(geometry)

interface CardMediaProps {
  scale: [x: number, y: number, z: number]
  url: string
  fallbackUrl: string
  isVideo?: boolean
}

function VideoMaterial({ url }: { url: string }) {
  const texture = useVideoTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}

function ImageMaterial({ url }: { url: string }) {
  const texture = useTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}

const CardMedia = ({ scale, url, fallbackUrl, isVideo }: CardMediaProps) => {
  return (
    <mesh geometry={new geometry.RoundedPlaneGeometry(scale[0] - 0.07, scale[1] - 0.07, 0.06)}>
      <Suspense fallback={fallbackUrl ? <ImageMaterial url={fallbackUrl} /> : null}>
        {isVideo ? <VideoMaterial url={url} /> : <ImageMaterial url={url} />}
      </Suspense>
    </mesh>
  )
}

export default CardMedia
