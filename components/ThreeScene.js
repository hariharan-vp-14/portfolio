'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function HeroOrb() {
  const groupRef = useRef(null)
  const ringRef = useRef(null)

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.35
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.36
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.18
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.7) * 0.4
    }
  })

  return (
    <>
      <ambientLight intensity={1.1} />
      <directionalLight position={[2, 3, 2]} intensity={1.6} color="#8bd3ff" />
      <pointLight position={[-3, -2, 2]} intensity={18} color="#7c3aed" />
      <pointLight position={[3, 1, 2]} intensity={12} color="#22d3ee" />

      <group ref={groupRef}>
        <mesh scale={1.2}>
          <icosahedronGeometry args={[1.2, 2]} />
          <meshPhysicalMaterial
            color="#8bd3ff"
            emissive="#3b82f6"
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.52}
            clearcoat={1}
            clearcoatRoughness={0.2}
          />
        </mesh>
        <mesh ref={ringRef} rotation={[Math.PI / 2.6, 0, 0]}>
          <torusGeometry args={[2, 0.03, 16, 160]} />
          <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.8} />
        </mesh>
        {[...Array(18)].map((_, index) => {
          const angle = (index / 18) * Math.PI * 2
          const radius = 2.2 + (index % 3) * 0.25
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle * 1.4) * 0.9
          const z = Math.sin(angle) * radius
          return (
            <mesh key={index} position={[x, y, z]}>
              <sphereGeometry args={[0.06, 12, 12]} />
              <meshStandardMaterial color={index % 2 === 0 ? '#7c3aed' : '#67e8f9'} emissive={index % 2 === 0 ? '#7c3aed' : '#22d3ee'} emissiveIntensity={1.5} />
            </mesh>
          )
        })}
      </group>
    </>
  )
}

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4.4], fov: 38 }} dpr={[1, 2]}>
      <HeroOrb />
    </Canvas>
  )
}
