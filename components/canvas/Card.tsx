import React from 'react'
import CardFrame from './CardFrame'
import CardMedia from './CardMedia'

interface CardProps {
  scale: [x: number, y: number, z: number]
  url: string
  fallbackUrl: string
  isVideo?: boolean
}

const Card = ({ scale, url, fallbackUrl, isVideo }: CardProps) => {
  return (
    <>
      <CardFrame scale={scale} />
      <CardMedia url={url} fallbackUrl={fallbackUrl} scale={scale} />
    </>
  )
}

export default Card
