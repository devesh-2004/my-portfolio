"use client";

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function StarBackground(props: any) {
  const ref = useRef<any>();
  // Generate random points in a sphere
  // Buffer length must be a multiple of 3 (one xyz triplet per point)
  // 5001 / 3 = 1667 exact points
  const sphere = useMemo(() => random.inSphere(new Float32Array(5001), { radius: 1.5 }), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#8b5cf6" // Neon purple
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingShapes() {
  const group = useRef<any>();
  const mesh1 = useRef<any>();
  const mesh2 = useRef<any>();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    if (mesh1.current) {
      mesh1.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      mesh1.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
    if (mesh2.current) {
      mesh2.current.rotation.x = -state.clock.getElapsedTime() * 0.1;
      mesh2.current.rotation.y = -state.clock.getElapsedTime() * 0.4;
    }
    
    // Parallax effect based on scroll
    if (group.current) {
      const targetY = (scrollY / (typeof window !== 'undefined' ? window.innerHeight : 1000)) * 2;
      const targetRotation = (scrollY / (typeof window !== 'undefined' ? window.innerHeight : 1000)) * Math.PI;
      group.current.position.y += (-targetY - group.current.position.y) * 0.05;
      group.current.rotation.y += (targetRotation - group.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={mesh1} position={[1, 0.5, -2]}>
          <octahedronGeometry args={[0.5]} />
          <meshStandardMaterial color="#06b6d4" wireframe />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh ref={mesh2} position={[-1.5, -1, -1]}>
          <torusGeometry args={[0.4, 0.1, 16, 32]} />
          <meshStandardMaterial color="#8b5cf6" wireframe />
        </mesh>
      </Float>
    </group>
  );
}

export default function GlobalScene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarBackground />
        <FloatingShapes />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
      </Canvas>
    </div>
  );
}
