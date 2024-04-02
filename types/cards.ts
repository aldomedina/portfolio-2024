import { Vector3 } from 'three'

export interface ICard {
  id: string
  title: string
  url: string
  image: string
  ratio: number
  firstPos: [x: number, y: number, z: number]
  positions: [x: number, y: number, z: number][]
  width: number
  scale: [x: number, y: number, z: number]
  route?: string
}
