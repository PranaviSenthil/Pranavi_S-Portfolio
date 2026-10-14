import React, { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Sparkles, Compass, Eye, RotateCw, Layers } from 'lucide-react';

// Planet definitions with orbits, colors, and metadata
interface PlanetConfig {
  id: string;
  name: string;
  category: string;
  radius: number;
  orbitRadius: number;
  orbitSpeed: number;
  color: string;
  emissiveColor: string;
  hasRing?: boolean;
  ringColor?: string;
  ringRadius?: number;
  hasMoon?: boolean;
  detail: string;
}

const PLANETS: PlanetConfig[] = [
  {
    id: 'vision',
    name: 'Vision & Perception',
    category: 'Computer Vision / OpenCV',
    radius: 0.32,
    orbitRadius: 1.8,
    orbitSpeed: 0.8,
    color: '#00F2FE',
    emissiveColor: '#00c6ff',
    hasMoon: true,
    detail: 'Perimeter Security & Cattle Monitoring Models',
  },
  {
    id: 'voice',
    name: 'Voice Intelligence',
    category: 'Sana AI / Audio ML',
    radius: 0.38,
    orbitRadius: 2.8,
    orbitSpeed: 0.55,
    color: '#A855F7',
    emissiveColor: '#7C3AED',
    hasRing: true,
    ringColor: '#C084FC',
    ringRadius: 0.62,
    detail: 'Speech-to-Text & Contextual Conversational Loop',
  },
  {
    id: 'systems',
    name: 'Autonomous Systems',
    category: 'IoT & Telemetry',
    radius: 0.34,
    orbitRadius: 3.7,
    orbitSpeed: 0.35,
    color: '#F59E0B',
    emissiveColor: '#D97706',
    detail: 'Industrial Bearing Faults & Smart Automation',
  },
  {
    id: 'hackathons',
    name: 'Hackathon Innovation',
    category: 'Rapid Prototyping',
    radius: 0.28,
    orbitRadius: 4.5,
    orbitSpeed: 0.25,
    color: '#10B981',
    emissiveColor: '#059669',
    detail: 'Kongu 30-Hr Hackathon 1st Place & Sprint Building',
  },
];

// Single Orbiting Planet Mesh
function OrbitingPlanet({
  planet,
  speedMultiplier,
  activePlanetId,
  onSelect,
}: {
  planet: PlanetConfig;
  speedMultiplier: number;
  activePlanetId: string | null;
  onSelect: (planet: PlanetConfig) => void;
}) {
  const planetGroupRef = useRef<THREE.Group>(null!);
  const meshRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);
  const moonRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  // Initial random angular offset for varied planetary positioning
  const initialAngle = useMemo(() => Math.random() * Math.PI * 2, []);
  const angleRef = useRef(initialAngle);

  useFrame((_, delta) => {
    angleRef.current += delta * planet.orbitSpeed * 0.4 * speedMultiplier;
    const x = Math.cos(angleRef.current) * planet.orbitRadius;
    const z = Math.sin(angleRef.current) * planet.orbitRadius;

    if (planetGroupRef.current) {
      planetGroupRef.current.position.set(x, 0, z);
    }

    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 1.5;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.8;
    }

    if (moonRef.current) {
      const moonAngle = angleRef.current * 4;
      moonRef.current.position.set(
        Math.cos(moonAngle) * 0.55,
        Math.sin(moonAngle) * 0.25,
        Math.sin(moonAngle) * 0.55
      );
    }
  });

  const isSelected = activePlanetId === planet.id;

  return (
    <group ref={planetGroupRef}>
      {/* Interactive Planet Sphere */}
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(planet);
        }}
      >
        <sphereGeometry args={[planet.radius, 32, 32]} />
        <meshStandardMaterial
          color={planet.color}
          emissive={planet.emissiveColor}
          emissiveIntensity={hovered || isSelected ? 1.2 : 0.6}
          roughness={0.25}
          metalness={0.7}
        />
      </mesh>

      {/* Atmospheric Halo Glow */}
      <mesh scale={hovered || isSelected ? 1.35 : 1.15}>
        <sphereGeometry args={[planet.radius, 16, 16]} />
        <meshBasicMaterial
          color={planet.color}
          transparent
          opacity={hovered || isSelected ? 0.35 : 0.15}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Planetary Rings (like Saturn) */}
      {planet.hasRing && (
        <mesh ref={ringRef} rotation={[-Math.PI / 3, 0, 0]}>
          <ringGeometry args={[planet.radius * 1.3, planet.radius * 2.2, 32]} />
          <meshBasicMaterial
            color={planet.ringColor || planet.color}
            side={THREE.DoubleSide}
            transparent
            opacity={0.65}
          />
        </mesh>
      )}

      {/* Orbiting Moon */}
      {planet.hasMoon && (
        <mesh ref={moonRef}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#FFFFFF" emissive="#38BDF8" emissiveIntensity={0.8} />
        </mesh>
      )}

      {/* HTML Hover Label */}
      {(hovered || isSelected) && (
        <Html distanceFactor={10} position={[0, planet.radius + 0.3, 0]} center>
          <div className="pointer-events-none select-none bg-[#090E1F]/90 backdrop-blur-md border border-cyan-400/40 text-white rounded-lg px-2.5 py-1.5 shadow-[0_0_20px_rgba(0,242,254,0.3)] text-center whitespace-nowrap animate-in fade-in zoom-in-95 duration-150">
            <p className="text-[11px] font-bold text-cyan-300 tracking-wide font-sans">
              {planet.name}
            </p>
            <p className="text-[9px] text-slate-300 font-mono">{planet.category}</p>
          </div>
        </Html>
      )}
    </group>
  );
}

// Glowing Orbital Rings
function OrbitalRings() {
  return (
    <group rotation={[Math.PI / 10, 0, 0]}>
      {PLANETS.map((planet) => (
        <mesh key={planet.id} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[planet.orbitRadius - 0.015, planet.orbitRadius + 0.015, 64]} />
          <meshBasicMaterial
            color={planet.color}
            transparent
            opacity={0.22}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

// Central Stellar Core (Sun / Neural Nucleus)
function CentralStellarCore() {
  const sunMeshRef = useRef<THREE.Mesh>(null!);
  const coronaRef = useRef<THREE.Mesh>(null!);
  const cageRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (sunMeshRef.current) {
      sunMeshRef.current.rotation.y += delta * 0.2;
    }
    if (coronaRef.current) {
      coronaRef.current.rotation.y -= delta * 0.3;
      coronaRef.current.rotation.z += delta * 0.15;
    }
    if (cageRef.current) {
      cageRef.current.rotation.x += delta * 0.25;
      cageRef.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <group>
      {/* Central Solid Sun */}
      <mesh ref={sunMeshRef}>
        <sphereGeometry args={[0.75, 32, 32]} />
        <meshStandardMaterial
          color="#38BDF8"
          emissive="#00F2FE"
          emissiveIntensity={1.2}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Corona Wireframe Atmosphere */}
      <mesh ref={cageRef}>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshStandardMaterial
          color="#A855F7"
          wireframe
          emissive="#7C3AED"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Pulsating Volumetric Glow Halo */}
      <mesh ref={coronaRef} scale={1.3}>
        <sphereGeometry args={[0.75, 24, 24]} />
        <meshBasicMaterial
          color="#00F2FE"
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* High-intensity Point Light from the Core */}
      <pointLight color="#00F2FE" intensity={3.5} distance={15} decay={2} />
      <pointLight color="#A855F7" intensity={2} distance={8} decay={2} />
    </group>
  );
}

// Celestial Star Dust Particles
function ConstellationDust() {
  const pointsRef = useRef<THREE.Points>(null!);
  const [count, positions] = useMemo(() => {
    const num = 140;
    const pos = new Float32Array(num * 3);
    for (let i = 0; i < num; i++) {
      const radius = THREE.MathUtils.randFloat(1.5, 5.5);
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const height = THREE.MathUtils.randFloat(-1.2, 1.2);

      pos[i * 3] = radius * Math.cos(theta);
      pos[i * 3 + 1] = height;
      pos[i * 3 + 2] = radius * Math.sin(theta);
    }
    return [num, pos];
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#E2E8F0"
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Entire Interactive Solar System Scene
function SolarSystemScene({
  speedMultiplier,
  activePlanetId,
  onSelectPlanet,
}: {
  speedMultiplier: number;
  activePlanetId: string | null;
  onSelectPlanet: (planet: PlanetConfig) => void;
}) {
  const sceneRef = useRef<THREE.Group>(null!);

  // Mouse tilt interactivity
  useFrame((state) => {
    if (sceneRef.current) {
      const { x, y } = state.pointer;
      sceneRef.current.rotation.x = THREE.MathUtils.lerp(
        sceneRef.current.rotation.x,
        0.35 + y * 0.25,
        0.05
      );
      sceneRef.current.rotation.y = THREE.MathUtils.lerp(
        sceneRef.current.rotation.y,
        x * 0.4,
        0.05
      );
    }
  });

  return (
    <group ref={sceneRef}>
      <CentralStellarCore />
      <OrbitalRings />
      {PLANETS.map((planet) => (
        <OrbitingPlanet
          key={planet.id}
          planet={planet}
          speedMultiplier={speedMultiplier}
          activePlanetId={activePlanetId}
          onSelect={onSelectPlanet}
        />
      ))}
      <ConstellationDust />
    </group>
  );
}

// Fallback visual for low-power or WebGL-unsupported environments
export const SolarOrbitalFallback: React.FC = () => {
  return (
    <div className="relative w-full aspect-square max-w-[420px] mx-auto flex items-center justify-center pointer-events-none select-none">
      {/* Outer ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/25 via-violet-500/25 to-transparent rounded-full blur-3xl animate-pulse-slow" />

      {/* Orbit ring 1 */}
      <div className="absolute w-80 h-80 rounded-full border border-cyan-500/30 animate-[spin_25s_linear_infinite]" />
      <div className="absolute w-80 h-80 rounded-full border-t-2 border-cyan-400 animate-[spin_18s_linear_infinite]" />

      {/* Orbit ring 2 */}
      <div className="absolute w-60 h-60 rounded-full border border-violet-500/30 -rotate-45 animate-[spin_30s_linear_infinite_reverse]" />
      <div className="absolute w-60 h-60 rounded-full border-b-2 border-violet-400 -rotate-45 animate-[spin_20s_linear_infinite_reverse]" />

      {/* Orbit ring 3 */}
      <div className="absolute w-44 h-44 rounded-full border border-dashed border-amber-400/40 rotate-12 animate-[spin_35s_linear_infinite]" />

      {/* Central glowing core */}
      <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-600 to-purple-800 border border-cyan-300/60 backdrop-blur-md flex items-center justify-center shadow-[0_0_50px_rgba(0,242,254,0.4)]">
        <div className="w-14 h-14 rounded-full bg-cyan-300 animate-pulse opacity-90 blur-[3px]" />
        <span className="absolute font-mono text-xs font-bold tracking-widest text-white">CSD // AI</span>
      </div>

      {/* Satellite indicator dots */}
      <div className="absolute top-12 right-14 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#00F2FE] animate-ping" />
      <div className="absolute bottom-16 left-12 w-2.5 h-2.5 rounded-full bg-violet-400 shadow-[0_0_12px_#8B5CF6]" />
    </div>
  );
};

// Main Exported Interactive 3D Solar System Component
export const SolarOrbital3D: React.FC = () => {
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [activePlanet, setActivePlanet] = useState<PlanetConfig | null>(null);
  const [hasWebGLError, setHasWebGLError] = useState(false);

  const toggleSpeed = () => {
    setSpeedMultiplier((prev) => (prev === 1 ? 2.5 : prev === 2.5 ? 0.5 : 1));
  };

  if (hasWebGLError) {
    return <SolarOrbitalFallback />;
  }

  return (
    <div className="relative w-full aspect-square max-w-[540px] mx-auto flex items-center justify-center select-none group">
      {/* Background glow nebula */}
      <div className="absolute inset-4 bg-gradient-to-tr from-cyan-500/20 via-violet-600/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Spatial Frame & HUD Overlay */}
      <div className="absolute inset-0 rounded-3xl border border-white/[0.12] pointer-events-none z-10 overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        {/* Top Header Status Bar */}
        <div className="absolute top-0 inset-x-0 px-5 py-3.5 bg-cosmic-950/70 backdrop-blur-md border-b border-white/[0.08] flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F2FE] animate-pulse" />
            <span className="text-slate-100 font-semibold tracking-wider">
              SOLAR_ORBITAL // 3D SYSTEM
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-cyan-300 text-[11px]">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTERACTIVE ORBIT</span>
          </div>
        </div>

        {/* Bottom Interactive HUD Details Bar */}
        <div className="absolute bottom-0 inset-x-0 px-5 py-3 bg-cosmic-950/75 backdrop-blur-md border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
          {activePlanet ? (
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: activePlanet.color, boxShadow: `0 0 8px ${activePlanet.color}` }}
              />
              <span className="text-white font-medium">{activePlanet.name}:</span>
              <span className="text-slate-300 text-[11px] truncate max-w-[200px]">
                {activePlanet.detail}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-slate-300 text-[11px]">
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              <span>Hover or click planets to inspect architecture</span>
            </div>
          )}

          <div className="text-[10px] font-mono text-cyan-400 font-semibold uppercase">
            ORBIT_SPEED: {speedMultiplier}x
          </div>
        </div>
      </div>

      {/* Floating Interactive Controls (Pointer-Events Auto) */}
      <div className="absolute bottom-16 right-5 z-20 flex flex-col gap-2">
        <button
          onClick={toggleSpeed}
          title="Toggle Orbit Speed"
          className="p-2.5 rounded-xl bg-cosmic-800/80 hover:bg-cosmic-700/90 border border-white/15 text-slate-300 hover:text-cyan-300 transition-all shadow-lg backdrop-blur-md active:scale-95"
        >
          <RotateCw className="w-4 h-4" />
        </button>
        {activePlanet && (
          <button
            onClick={() => setActivePlanet(null)}
            title="Deselect Planet"
            className="p-2.5 rounded-xl bg-cosmic-800/80 hover:bg-cosmic-700/90 border border-white/15 text-slate-300 hover:text-white transition-all shadow-lg backdrop-blur-md active:scale-95"
          >
            <Layers className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* 3D Canvas Viewport */}
      <Canvas
        camera={{ position: [0, 2.8, 6.2], fov: 48 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
        onError={() => setHasWebGLError(true)}
        className="w-full h-full cursor-grab active:cursor-grabbing relative z-0"
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[6, 8, 4]} intensity={1.2} color="#FFFFFF" />
        <directionalLight position={[-6, -4, -4]} intensity={0.6} color="#8B5CF6" />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
          <SolarSystemScene
            speedMultiplier={speedMultiplier}
            activePlanetId={activePlanet ? activePlanet.id : null}
            onSelectPlanet={(planet) => setActivePlanet(planet)}
          />
        </Float>
      </Canvas>
    </div>
  );
};
