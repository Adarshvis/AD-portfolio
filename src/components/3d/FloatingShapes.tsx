import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Sphere, MeshDistortMaterial, MeshWobbleMaterial, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

const Stars = () => {
  const ref = useRef<THREE.Points>(null)
  
  const positions = new Float32Array(5000 * 3)
  for (let i = 0; i < 5000; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.05
      ref.current.rotation.y += delta * 0.07
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  )
}

export const FloatingShapes = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#22d3ee" />
      <Stars />
      
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Sphere args={[1, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#22d3ee"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[3, 2, -2]}>
          <octahedronGeometry args={[0.5, 0]} />
          <MeshWobbleMaterial color="#22d3ee" speed={1} factor={0.6} />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[-3, -1, -1]}>
          <torusGeometry args={[0.4, 0.1, 16, 100]} />
          <meshStandardMaterial color="#22d3ee" roughness={0.1} metalness={1} />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[2, -2, 1]}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial color="#22d3ee" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>
    </>
  )
}
