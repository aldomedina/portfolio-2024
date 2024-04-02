import { PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'

const Commons = () => (
  <Suspense fallback={null}>
    <ambientLight />
    <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
    <pointLight position={[-10, -10, -10]} decay={0.2} />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </Suspense>
)

export default Commons
