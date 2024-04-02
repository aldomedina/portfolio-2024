interface IFeaturedMedia {
  type: string
  url: string
  width?: number
  height?: number
  withFrame?: boolean
}

export interface IImage3D {
  id: string
  image: string
  scale: number[]
}

interface IImages {
  featured: IFeaturedMedia
  carousel: IImage3D[]
  final: IFeaturedMedia
}

export interface IProject {
  id: string
  workingFor: string
  year: number
  title: string
  url: string
  imageUrl: string
  ratio: number
  route: string
  tools: string[]
  blurDataUrl: string
  images: IImages
  direction: 'right' | 'left'
}
