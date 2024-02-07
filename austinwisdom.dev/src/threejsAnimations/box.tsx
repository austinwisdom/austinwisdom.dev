import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
//@ts-ignore
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'

const ThreeBox = (props: ThreeElements['mesh']) => {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  //@ts-ignore
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      //@ts-ignore
      onClick={(event) => click(!clicked)}
      //@ts-ignore
      onPointerOver={(event) => hover(true)}
      //@ts-ignore
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default ThreeBox;