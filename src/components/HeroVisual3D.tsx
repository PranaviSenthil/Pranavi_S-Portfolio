import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Fallback visual component for mobile, reduced-motion, or WebGL-unsupported environments
export const HeroVisualFallback: React.FC = () => {
  return (
    <div className="relative w-full aspect-square max-w-[420px] mx-auto flex items-center justify-center pointer-events-none select-none">
      {/* Outer ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-violet-500/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />

      {/* Orbit ring 1 */}
      <div className="absolute w-72 h-72 rounded-full border border-cyan-500/30 animate-[spin_20s_linear_infinite]" />
      <div className="absolute w-72 h-72 rounded-full border-t-2 border-cyan-400 animate-[spin_15s_linear_infinite]" />

      {/* Orbit ring 2 */}
      <div className="absolute w-56 h-56 rounded-full border border-violet-500/30 -rotate-45 animate-[spin_25s_linear_infinite_reverse]" />
      <div className="absolute w-56 h-56 rounded-full border-b-2 border-violet-400 -rotate-45 animate-[spin_18s_linear_infinite_reverse]" />

      {/* Orbit ring 3 */}
      <div className="absolute w-40 h-40 rounded-full border border-dashed border-cyan-400/40 rotate-12 animate-[spin_30s_linear_infinite]" />

      {/* Center glowing core */}
      <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-cyan-500/30 via-violet-600/40 to-slate-900 border border-cyan-400/40 backdrop-blur-md flex items-center justify-center shadow-[0_0_50px_rgba(0,242,254,0.3)]">
        <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-400 to-violet-500 animate-pulse opacity-80 blur-[2px]" />
        <span className="absolute font-mono text-xs font-bold tracking-widest text-cyan-200">AI / CSD</span>
      </div>

      {/* Satellite indicator dots */}
      <div className="absolute top-10 right-12 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f2fe] animate-ping" />
      <div className="absolute bottom-12 left-10 w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_10px_#8b5cf6]" />
    </div>
  );
};

// 3D Neural Sphere Geometry
function NeuralOrb() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const innerRef = useRef<THREE.Mesh>(null!);
  const particlesRef = useRef<THREE.Points>(null!);

  // Generate particle constellation points
  const [particlesCount, particlePositions] = useMemo(() => {
    const count = 75;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0, Math.PI);
      const radius = THREE.MathUtils.randFloat(2.2, 2.7);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return [count, positions];
  }, []);

  useFrame((state, delta) => {
    // Smooth idle rotation
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.25;
      meshRef.current.rotation.x += delta * 0.12;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.35;
      innerRef.current.rotation.z += delta * 0.15;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.18;
    }

    // Gentle cursor reactivity
    const { x, y } = state.pointer;
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, x * 0.3, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, y * 0.3, 0.05);
  });

  return (
    <group>
      {/* Outer Wireframe Icosahedron */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshStandardMaterial
          color="#00f2fe"
          wireframe
          emissive="#00f2fe"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Inner Rotating Octahedron */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial
          color="#8b5cf6"
          wireframe
          emissive="#7c3aed"
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={1.0}
        />
      </mesh>

      {/* Central Glowing Core */}
      <mesh>
        <sphereGeometry args={[0.55, 24, 24]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>

      {/* Neural Particle Nodes */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#67e8f9"
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

// Error boundary state handler for WebGL
class WebGLErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    console.warn("WebGL or Three.js fallback activated:", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export const HeroVisual3D: React.FC = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    const motionHandler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', motionHandler);

    // Mobile / Low power detection check
    const isMobileDevice = window.innerWidth < 640;
    setIsLowPower(isMobileDevice);

    return () => motionQuery.removeEventListener('change', motionHandler);
  }, []);

  if (prefersReducedMotion) {
    return <HeroVisualFallback />;
  }

  return (
    <div className="relative w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center select-none pointer-events-none sm:pointer-events-auto">
      {/* Precision architectural framing box */}
      <div className="absolute inset-2 sm:inset-0 rounded-2xl border border-white/[0.08] bg-obsidian-900/40 backdrop-blur-sm pointer-events-none">
        {/* Technical Corner Crosshairs */}
        <span className="absolute top-2 left-2 text-[9px] font-mono text-slate-500">[+]</span>
        <span className="absolute top-2 right-2 text-[9px] font-mono text-slate-500">[+]</span>
        <span className="absolute bottom-2 left-2 text-[9px] font-mono text-slate-500">[+]</span>
        <span className="absolute bottom-2 right-2 text-[9px] font-mono text-slate-500">[+]</span>

        {/* Top telemetry tag */}
        <div className="absolute top-3 left-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase">
            NEURAL_MESH // R3F_V8
          </span>
        </div>

        {/* Top right coordinate */}
        <div className="absolute top-3 right-4 hidden sm:block">
          <span className="text-[10px] font-mono text-slate-500">
            11.0168° N &bull; 76.9558° E
          </span>
        </div>

        {/* Bottom subtle grid status */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[9px] font-mono text-slate-500 border-t border-white/[0.05] pt-2">
          <span>INTERACTIVE // DRAG TO ROTATE</span>
          <span>DPR 1.5 &bull; 60FPS</span>
        </div>
      </div>

      {/* Subtle depth spotlight */}
      <div className="absolute inset-10 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <WebGLErrorBoundary fallback={<HeroVisualFallback />}>
        <Canvas
          camera={{ position: [0, 0, 5.2], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          className="w-full h-full cursor-grab active:cursor-grabbing relative z-10"
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00f2fe" />
          <pointLight position={[-10, -10, -5]} intensity={1.2} color="#8b5cf6" />
          <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
            <NeuralOrb />
          </Float>
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
};
