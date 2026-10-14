import React, { useRef, useState, useMemo, useEffect, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { Zap, RotateCw, Eye, Sparkles, Activity, Layers } from 'lucide-react';

// --- Procedural Canvas Textures for Radiant Synapses & Bokeh ---

// 1. Radiant Synapse Core & Bloom Sprite
function createSynapseGlowTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d')!;

  const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.12, 'rgba(255, 245, 210, 0.98)');
  gradient.addColorStop(0.28, 'rgba(255, 175, 80, 0.85)');
  gradient.addColorStop(0.48, 'rgba(224, 110, 40, 0.45)');
  gradient.addColorStop(0.72, 'rgba(180, 65, 15, 0.18)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// 2. Out-of-focus Optical Bokeh Disk (matches the circular blur disks in reference image)
function createOpticalBokehTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d')!;

  const gradient = ctx.createRadialGradient(64, 64, 20, 64, 64, 64);
  gradient.addColorStop(0, 'rgba(255, 195, 125, 0.6)');
  gradient.addColorStop(0.65, 'rgba(235, 125, 45, 0.35)');
  gradient.addColorStop(0.88, 'rgba(195, 80, 20, 0.15)');
  gradient.addColorStop(0.98, 'rgba(160, 55, 10, 0.03)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// 3. Crisp Hot Pinpoint Star Core
function createStarCoreTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;

  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.3, 'rgba(255, 235, 180, 0.9)');
  gradient.addColorStop(0.65, 'rgba(255, 150, 60, 0.3)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// Major Engineering Pillars / Hubs
interface DomainHub {
  id: string;
  name: string;
  category: string;
  sublabel: string;
  pos: [number, number, number];
  color: string;
  glowColor: string;
  coreRadius: number;
}

const DOMAIN_HUBS: DomainHub[] = [
  {
    id: 'vision',
    name: 'Computer Vision',
    category: 'Perception & OpenCV',
    sublabel: 'Real-time Object & Stream Analytics',
    pos: [-1.35, 1.15, 0.25],
    color: '#FFF8EE',
    glowColor: '#FFA25B',
    coreRadius: 0.08,
  },
  {
    id: 'speech',
    name: 'Voice & Speech AI',
    category: 'Conversational Inference',
    sublabel: 'Sana AI & Context Processing',
    pos: [1.35, 1.15, -0.25],
    color: '#FFF8EE',
    glowColor: '#FF8C42',
    coreRadius: 0.075,
  },
  {
    id: 'neural',
    name: 'Deep Learning Core',
    category: 'Synaptic Tensor Graph',
    sublabel: 'PyTorch, Edge Quantization & Inference',
    pos: [0.0, 0.0, 0.35],
    color: '#FFFFFF',
    glowColor: '#FFA25B',
    coreRadius: 0.11,
  },
  {
    id: 'telemetry',
    name: 'Autonomous Systems',
    category: 'Industrial IoT & Telemetry',
    sublabel: 'Bearing Fault Vibration Analytics',
    pos: [-1.35, -1.15, -0.25],
    color: '#FFF8EE',
    glowColor: '#E07A43',
    coreRadius: 0.07,
  },
  {
    id: 'cloud',
    name: 'Full-Stack Architecture',
    category: 'Distributed Systems',
    sublabel: 'Modern React, Next.js & Cloud APIs',
    pos: [1.35, -1.15, 0.25],
    color: '#FFF8EE',
    glowColor: '#FFA25B',
    coreRadius: 0.075,
  },
  {
    id: 'algos',
    name: 'Algorithmic Optimization',
    category: 'High-Performance Graph',
    sublabel: '30-Hr Hackathon Architectural Engine',
    pos: [0.0, -1.6, 0.2],
    color: '#FFF8EE',
    glowColor: '#FFB366',
    coreRadius: 0.07,
  },
  {
    id: 'edge',
    name: 'Edge AI Acceleration',
    category: 'Real-time Embedded Inference',
    sublabel: 'TensorRT & Low-Latency Pipeline',
    pos: [1.75, 0.0, -0.2],
    color: '#FFF8EE',
    glowColor: '#FFA25B',
    coreRadius: 0.08,
  },
  {
    id: 'graph',
    name: 'Autonomous Agent Mesh',
    category: 'Cognitive Synapse Graph',
    sublabel: 'Distributed Neural Coordination',
    pos: [-1.75, 0.0, 0.2],
    color: '#FFF8EE',
    glowColor: '#FFB870',
    coreRadius: 0.075,
  },
  {
    id: 'sensor',
    name: 'Telemetry Fabric',
    category: 'Real-Time Edge Sensor Streams',
    sublabel: 'Micro-second Pipeline Processing',
    pos: [0.0, 1.6, -0.2],
    color: '#FFF8EE',
    glowColor: '#FF7A29',
    coreRadius: 0.07,
  },
];

interface NodeData {
  basePos: THREE.Vector3;
  pos: THREE.Vector3;
  size: number;
  color: THREE.Color;
  pulsePhase: number;
  pulseSpeed: number;
  isHub: boolean;
  hubIndex?: number;
}

interface EdgeData {
  nodeA: number;
  nodeB: number;
  distance: number;
}

interface PulseData {
  edgeIndex: number;
  progress: number;
  speed: number;
  size: number;
}

// 3D Constellation Scene Component
function NeuralConstellationScene({
  activeHubId,
  setActiveHubId,
  impulseTrigger,
  autoRotate,
}: {
  activeHubId: string | null;
  setActiveHubId: (id: string | null) => void;
  impulseTrigger: number;
  autoRotate: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);
  const haloPointsRef = useRef<THREE.Points>(null!);
  const corePointsRef = useRef<THREE.Points>(null!);
  const pulsesPointsRef = useRef<THREE.Points>(null!);
  const shockwaveRef = useRef<{ radius: number; active: boolean; opacity: number }>({
    radius: 0,
    active: false,
    opacity: 0,
  });

  const glowTexture = useMemo(() => createSynapseGlowTexture(), []);
  const bokehTexture = useMemo(() => createOpticalBokehTexture(), []);
  const starCoreTexture = useMemo(() => createStarCoreTexture(), []);

  // Pre-generate nodes & topology matching the density and clustering of the reference image
  const { nodes, edges, initialLinePositions, initialLineColors } = useMemo(() => {
    const rawNodes: NodeData[] = [];

    // 1. Add major hubs
    DOMAIN_HUBS.forEach((hub, idx) => {
      const v = new THREE.Vector3(...hub.pos);
      rawNodes.push({
        basePos: v.clone(),
        pos: v.clone(),
        size: hub.coreRadius,
        color: new THREE.Color(hub.color),
        pulsePhase: idx * 1.3,
        pulseSpeed: 1.5 + idx * 0.25,
        isHub: true,
        hubIndex: idx,
      });
    });

    // 2. Generate 220 surrounding synaptic nodes forming an expansive constellation across the right space
    const nodeCount = 220;
    const colors = [
      new THREE.Color('#FFF8EE'),
      new THREE.Color('#FFA25B'),
      new THREE.Color('#FF944D'),
      new THREE.Color('#E07A43'),
      new THREE.Color('#FFB870'),
      new THREE.Color('#FFC38A'),
    ];

    for (let i = 0; i < nodeCount; i++) {
      // Clustered distribution around hubs or along bridging branches
      const parentHub = DOMAIN_HUBS[i % DOMAIN_HUBS.length];
      const nextHub = DOMAIN_HUBS[(i + 1) % DOMAIN_HUBS.length];

      // Form bridges between hubs, hub clusters, or ambient dispersion centered symmetrically at (0, 0, 0)
      let clusterCenter: THREE.Vector3;
      if (Math.random() < 0.45) {
        const lerpFactor = Math.random();
        clusterCenter = new THREE.Vector3(...parentHub.pos).lerp(
          new THREE.Vector3(...nextHub.pos),
          lerpFactor
        );
      } else if (Math.random() < 0.8) {
        clusterCenter = new THREE.Vector3(...parentHub.pos);
      } else {
        // Balanced ambient dispersion centered symmetrically around (0, 0, 0)
        clusterCenter = new THREE.Vector3(
          (Math.random() - 0.5) * 2.4,
          (Math.random() - 0.5) * 2.4,
          (Math.random() - 0.5) * 1.6
        );
      }

      // Organic dispersion
      const radius = 0.25 + Math.pow(Math.random(), 1.2) * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.95;

      const offset = new THREE.Vector3(
        radius * Math.cos(theta) * Math.cos(phi),
        radius * Math.sin(phi),
        radius * Math.sin(theta) * Math.cos(phi) * 0.85
      );

      const p = clusterCenter.clone().add(offset);
      // Symmetrical bounds centered at (0, 0, 0)
      p.x = THREE.MathUtils.clamp(p.x, -2.2, 2.2);
      p.y = THREE.MathUtils.clamp(p.y, -2.2, 2.2);
      p.z = THREE.MathUtils.clamp(p.z, -1.7, 1.7);

      rawNodes.push({
        basePos: p.clone(),
        pos: p.clone(),
        size: 0.035 + Math.random() * 0.05,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 1.2 + Math.random() * 2.2,
        isHub: false,
      });
    }

    // 3. Construct synaptic edges with rich web connectivity across wide space
    const rawEdges: EdgeData[] = [];
    const maxConnectionDistance = 1.65;
    const maxDegreePerNode = 7;
    const nodeDegrees = new Array(rawNodes.length).fill(0);

    for (let i = 0; i < rawNodes.length; i++) {
      for (let j = i + 1; j < rawNodes.length; j++) {
        const limitI = rawNodes[i].isHub ? 14 : maxDegreePerNode;
        const limitJ = rawNodes[j].isHub ? 14 : maxDegreePerNode;

        if (nodeDegrees[i] >= limitI || nodeDegrees[j] >= limitJ) continue;

        const d = rawNodes[i].basePos.distanceTo(rawNodes[j].basePos);
        if (d < maxConnectionDistance) {
          rawEdges.push({
            nodeA: i,
            nodeB: j,
            distance: d,
          });
          nodeDegrees[i]++;
          nodeDegrees[j]++;
        }
      }
    }

    // Pre-allocate buffer for LineSegments
    const linePos = new Float32Array(rawEdges.length * 6);
    const lineCol = new Float32Array(rawEdges.length * 6);

    for (let i = 0; i < rawEdges.length; i++) {
      const e = rawEdges[i];
      const nA = rawNodes[e.nodeA];
      const nB = rawNodes[e.nodeB];

      linePos[i * 6 + 0] = nA.basePos.x;
      linePos[i * 6 + 1] = nA.basePos.y;
      linePos[i * 6 + 2] = nA.basePos.z;

      linePos[i * 6 + 3] = nB.basePos.x;
      linePos[i * 6 + 4] = nB.basePos.y;
      linePos[i * 6 + 5] = nB.basePos.z;

      lineCol[i * 6 + 0] = nA.color.r * 0.7;
      lineCol[i * 6 + 1] = nA.color.g * 0.7;
      lineCol[i * 6 + 2] = nA.color.b * 0.7;

      lineCol[i * 6 + 3] = nB.color.r * 0.7;
      lineCol[i * 6 + 4] = nB.color.g * 0.7;
      lineCol[i * 6 + 5] = nB.color.b * 0.7;
    }

    return {
      nodes: rawNodes,
      edges: rawEdges,
      initialLinePositions: linePos,
      initialLineColors: lineCol,
    };
  }, []);

  // Traveling action potential signals along filaments
  const pulses = useMemo<PulseData[]>(() => {
    const pulseCount = 36;
    return Array.from({ length: pulseCount }, () => ({
      edgeIndex: Math.floor(Math.random() * edges.length),
      progress: Math.random(),
      speed: 0.4 + Math.random() * 0.8,
      size: 0.16 + Math.random() * 0.08,
    }));
  }, [edges.length]);

  // Points buffer arrays
  const [pointPositions, haloColors, coreColors] = useMemo(() => {
    const pos = new Float32Array(nodes.length * 3);
    const hCol = new Float32Array(nodes.length * 3);
    const cCol = new Float32Array(nodes.length * 3);

    nodes.forEach((n, idx) => {
      pos[idx * 3 + 0] = n.basePos.x;
      pos[idx * 3 + 1] = n.basePos.y;
      pos[idx * 3 + 2] = n.basePos.z;

      // Halo color: rich warm copper/amber
      hCol[idx * 3 + 0] = n.color.r;
      hCol[idx * 3 + 1] = n.color.g;
      hCol[idx * 3 + 2] = n.color.b;

      // Hot star core: near white/bright incandescent
      cCol[idx * 3 + 0] = 1.0;
      cCol[idx * 3 + 1] = 0.95;
      cCol[idx * 3 + 2] = 0.85;
    });

    return [pos, hCol, cCol];
  }, [nodes]);

  // Deep background and shallow foreground bokeh orbs
  const bokehData = useMemo(() => {
    const count = 90;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // 25% near camera foreground bokeh, 75% deep background bokeh
      const isFore = i < 22;
      const z = isFore
        ? THREE.MathUtils.randFloat(1.8, 3.6)
        : THREE.MathUtils.randFloat(-2.0, -5.2);

      pos[i * 3 + 0] = THREE.MathUtils.randFloatSpread(14.0);
      pos[i * 3 + 1] = THREE.MathUtils.randFloatSpread(8.0);
      pos[i * 3 + 2] = z;

      const c = new THREE.Color(
        Math.random() > 0.45 ? '#FFA25B' : Math.random() > 0.5 ? '#E07A43' : '#FF7A29'
      );
      col[i * 3 + 0] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return { pos, col };
  }, []);

  // Impulse listener
  useEffect(() => {
    if (impulseTrigger > 0) {
      shockwaveRef.current = {
        radius: 0.1,
        active: true,
        opacity: 1.0,
      };
    }
  }, [impulseTrigger]);

  // Mouse & Touch interaction
  const isDragging = useRef(false);
  const previousPointer = useRef({ x: 0, y: 0 });
  const rotationVelocity = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0.08, y: 0 });

  const { gl, viewport } = useThree();
  const isDesktop = typeof window !== 'undefined' ? window.innerWidth >= 1024 : viewport.width > 6.0;
  // Geometric center of the right half of the viewport on desktop (75% of viewport width)
  const targetOffsetX = isDesktop ? viewport.width * 0.25 : 0;
  const targetOffsetY = isDesktop ? 0 : -viewport.height * 0.18;

  useEffect(() => {
    const dom = gl.domElement;

    const onPointerDown = (e: PointerEvent) => {
      isDragging.current = true;
      previousPointer.current = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      const deltaX = e.clientX - previousPointer.current.x;
      const deltaY = e.clientY - previousPointer.current.y;
      previousPointer.current = { x: e.clientX, y: e.clientY };

      rotationVelocity.current.y += deltaX * 0.005;
      rotationVelocity.current.x += deltaY * 0.005;
    };

    const onPointerUp = () => {
      isDragging.current = false;
    };

    dom.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    return () => {
      dom.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, [gl]);

  // Frame update
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // 1. Inertial rotation & auto-rotation around its own center
    if (autoRotate && !isDragging.current) {
      rotationVelocity.current.y += delta * 0.15;
    }

    const targetParallaxX = state.pointer.y * 0.22;
    const targetParallaxY = state.pointer.x * 0.32;

    currentRotation.current.x += rotationVelocity.current.x;
    currentRotation.current.y += rotationVelocity.current.y;
    rotationVelocity.current.x *= 0.92;
    rotationVelocity.current.y *= 0.92;

    if (groupRef.current) {
      // Rotation axis firmly anchored at 75% of viewport width on desktop (geometric center of right half)
      const desktop = typeof window !== 'undefined' ? window.innerWidth >= 1024 : viewport.width > 6.0;
      const curTargetOffsetX = desktop ? viewport.width * 0.25 : 0;
      const curTargetOffsetY = desktop ? 0 : -viewport.height * 0.18;

      groupRef.current.position.x = curTargetOffsetX;
      groupRef.current.position.y = curTargetOffsetY;

      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        currentRotation.current.x + targetParallaxX,
        0.08
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        currentRotation.current.y + targetParallaxY,
        0.08
      );
    }

    // 2. Expand impulse wave
    if (shockwaveRef.current.active) {
      shockwaveRef.current.radius += delta * 3.8;
      shockwaveRef.current.opacity -= delta * 0.95;
      if (shockwaveRef.current.opacity <= 0) {
        shockwaveRef.current.active = false;
      }
    }

    // 3. Gentle harmonic breathing for nodes
    nodes.forEach((n, idx) => {
      const breathX = Math.sin(time * n.pulseSpeed + idx) * 0.035;
      const breathY = Math.cos(time * n.pulseSpeed * 0.85 + idx) * 0.035;
      const breathZ = Math.sin(time * 0.6 + idx * 0.5) * 0.025;

      n.pos.x = n.basePos.x + breathX;
      n.pos.y = n.basePos.y + breathY;
      n.pos.z = n.basePos.z + breathZ;
    });

    // 4. Update dynamic LineSegments (Synaptic Filaments)
    if (linesRef.current) {
      const posAttr = linesRef.current.geometry.attributes.position as THREE.BufferAttribute;
      const colAttr = linesRef.current.geometry.attributes.color as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;
      const colArray = colAttr.array as Float32Array;

      const shockRadius = shockwaveRef.current.radius;
      const shockActive = shockwaveRef.current.active;
      const shockOpacity = shockwaveRef.current.opacity;

      for (let i = 0; i < edges.length; i++) {
        const e = edges[i];
        const nA = nodes[e.nodeA];
        const nB = nodes[e.nodeB];

        posArray[i * 6 + 0] = nA.pos.x;
        posArray[i * 6 + 1] = nA.pos.y;
        posArray[i * 6 + 2] = nA.pos.z;

        posArray[i * 6 + 3] = nB.pos.x;
        posArray[i * 6 + 4] = nB.pos.y;
        posArray[i * 6 + 5] = nB.pos.z;

        const dist = nA.pos.distanceTo(nB.pos);
        let alpha = Math.max(0.15, 1.0 - Math.pow(dist / 1.45, 1.7));

        const isConnectedToActiveHub =
          (nA.isHub && DOMAIN_HUBS[nA.hubIndex!].id === activeHubId) ||
          (nB.isHub && DOMAIN_HUBS[nB.hubIndex!].id === activeHubId);

        if (isConnectedToActiveHub) {
          alpha = Math.min(1.0, alpha + 0.65);
        }

        if (shockActive) {
          const midDist = (nA.pos.length() + nB.pos.length()) * 0.5;
          const diff = Math.abs(midDist - shockRadius);
          if (diff < 0.5) {
            const boost = (1.0 - diff / 0.5) * shockOpacity * 0.85;
            alpha = Math.min(1.0, alpha + boost);
          }
        }

        colArray[i * 6 + 0] = nA.color.r * alpha;
        colArray[i * 6 + 1] = nA.color.g * alpha;
        colArray[i * 6 + 2] = nA.color.b * alpha;

        colArray[i * 6 + 3] = nB.color.r * alpha;
        colArray[i * 6 + 4] = nB.color.g * alpha;
        colArray[i * 6 + 5] = nB.color.b * alpha;
      }

      posAttr.needsUpdate = true;
      colAttr.needsUpdate = true;
    }

    // 5. Update Points positions
    if (haloPointsRef.current && corePointsRef.current) {
      const posAttrH = haloPointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
      const posAttrC = corePointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
      const posArrayH = posAttrH.array as Float32Array;
      const posArrayC = posAttrC.array as Float32Array;

      nodes.forEach((n, idx) => {
        posArrayH[idx * 3 + 0] = n.pos.x;
        posArrayH[idx * 3 + 1] = n.pos.y;
        posArrayH[idx * 3 + 2] = n.pos.z;

        posArrayC[idx * 3 + 0] = n.pos.x;
        posArrayC[idx * 3 + 1] = n.pos.y;
        posArrayC[idx * 3 + 2] = n.pos.z;
      });

      posAttrH.needsUpdate = true;
      posAttrC.needsUpdate = true;
    }

    // 6. Update action potentials
    if (pulsesPointsRef.current) {
      const posAttr = pulsesPointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      pulses.forEach((p, idx) => {
        p.progress += delta * p.speed;
        if (p.progress >= 1.0) {
          p.progress = 0;
          p.edgeIndex = Math.floor(Math.random() * edges.length);
        }

        const edge = edges[p.edgeIndex];
        if (edge) {
          const nA = nodes[edge.nodeA];
          const nB = nodes[edge.nodeB];

          posArray[idx * 3 + 0] = THREE.MathUtils.lerp(nA.pos.x, nB.pos.x, p.progress);
          posArray[idx * 3 + 1] = THREE.MathUtils.lerp(nA.pos.y, nB.pos.y, p.progress);
          posArray[idx * 3 + 2] = THREE.MathUtils.lerp(nA.pos.z, nB.pos.z, p.progress);
        }
      });

      posAttr.needsUpdate = true;
    }
  });

  return (
    <>
      {/* Ambient Depth Bokeh Orbs in World Space (Background & Foreground framing) */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={bokehData.pos.length / 3}
            array={bokehData.pos}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={bokehData.col.length / 3}
            array={bokehData.col}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.8}
          map={bokehTexture}
          vertexColors
          transparent
          opacity={0.42}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          sizeAttenuation
        />
      </points>

      {/* Floating Neural Constellation - Rotating around its own geometric center at 75% viewport width */}
      <group ref={groupRef} position={[targetOffsetX, targetOffsetY, 0]}>
        {/* 1. Synaptic Interconnection Filaments */}
        <lineSegments ref={linesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={initialLinePositions.length / 3}
              array={initialLinePositions}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-color"
              count={initialLineColors.length / 3}
              array={initialLineColors}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            vertexColors
            transparent
            opacity={0.85}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            linewidth={1.2}
          />
        </lineSegments>

        {/* 2. Synaptic Nodes Outer Radiant Halos (Soft Amber Glow) */}
        <points ref={haloPointsRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={pointPositions.length / 3}
              array={pointPositions}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-color"
              count={haloColors.length / 3}
              array={haloColors}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.28}
            map={glowTexture}
            vertexColors
            transparent
            opacity={0.95}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            sizeAttenuation
          />
        </points>

        {/* 3. Synaptic Nodes Intense Star Cores (Crisp White/Gold Centers) */}
        <points ref={corePointsRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={pointPositions.length / 3}
              array={pointPositions}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-color"
              count={coreColors.length / 3}
              array={coreColors}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.08}
            map={starCoreTexture}
            vertexColors
            transparent
            opacity={1.0}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            sizeAttenuation
          />
        </points>

        {/* 4. Traveling Action Potential Light Signals */}
        <points ref={pulsesPointsRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={pulses.length}
              array={new Float32Array(pulses.length * 3)}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.24}
            map={glowTexture}
            color="#FFF8EE"
            transparent
            opacity={1.0}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            sizeAttenuation
          />
        </points>

        {/* 5. Major Architectural Hubs (Radiant Focal Synapses with Optical Bloom) */}
        {DOMAIN_HUBS.map((hub, idx) => {
          const isHovered = activeHubId === hub.id;
          const hubNode = nodes[idx];
          const hubPos: [number, number, number] = hubNode
            ? [hubNode.pos.x, hubNode.pos.y, hubNode.pos.z]
            : hub.pos;

          return (
            <group
              key={hub.id}
              position={hubPos}
              onPointerOver={(e) => {
                e.stopPropagation();
                setActiveHubId(hub.id);
              }}
              onPointerOut={() => {
                setActiveHubId(null);
              }}
            >
              {/* Tiny Incandescent Core Point */}
              <mesh>
                <sphereGeometry args={[isHovered ? 0.075 : 0.055, 16, 16]} />
                <meshBasicMaterial
                  color="#FFFFFF"
                  toneMapped={false}
                />
              </mesh>

              {/* Inner Radiant Halo */}
              <sprite scale={isHovered ? [0.65, 0.65, 1] : [0.45, 0.45, 1]}>
                <spriteMaterial
                  map={glowTexture}
                  color="#FFF2D6"
                  transparent
                  opacity={1.0}
                  blending={THREE.AdditiveBlending}
                  depthWrite={false}
                />
              </sprite>

              {/* Outer Luminous Atmospheric Corona */}
              <sprite scale={isHovered ? [1.4, 1.4, 1] : [0.95, 0.95, 1]}>
                <spriteMaterial
                  map={glowTexture}
                  color={hub.glowColor}
                  transparent
                  opacity={isHovered ? 0.9 : 0.7}
                  blending={THREE.AdditiveBlending}
                  depthWrite={false}
                />
              </sprite>

              {/* Subtle Synaptic Radius Ring */}
              <mesh rotation={[Math.PI / 3, (idx * Math.PI) / 3, 0]}>
                <ringGeometry args={[0.16, 0.18, 32]} />
                <meshBasicMaterial
                  color={hub.glowColor}
                  side={THREE.DoubleSide}
                  transparent
                  opacity={isHovered ? 0.8 : 0.25}
                  blending={THREE.AdditiveBlending}
                />
              </mesh>

              {/* Warm Local Radiance */}
              <pointLight
                color={hub.glowColor}
                intensity={isHovered ? 3.0 : 1.5}
                distance={2.8}
              />

              {/* Interactive HUD Card on Hover */}
              {isHovered && (
                <Html distanceFactor={7.5} position={[0, 0.45, 0]} center>
                  <div className="pointer-events-none select-none px-3.5 py-2 rounded-xl bg-[#0F0A08]/95 border border-[#FFA25B]/50 shadow-[0_0_25px_rgba(255,162,91,0.35)] backdrop-blur-xl text-center whitespace-nowrap animate-in fade-in zoom-in-95 duration-150">
                    <div className="flex items-center gap-1.5 justify-center mb-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFA25B] shadow-[0_0_8px_#FFA25B] animate-ping" />
                      <p className="text-xs font-bold text-[#FAF6F0] font-sans tracking-wide">
                        {hub.name}
                      </p>
                    </div>
                    <p className="text-[10px] text-[#FFA25B] font-mono">{hub.category}</p>
                    <p className="text-[9px] text-[#A89F91] font-sans mt-0.5">{hub.sublabel}</p>
                  </div>
                </Html>
              )}
            </group>
          );
        })}
      </group>
    </>
  );
}

// Fallback
export const NeuralPlexusFallback: React.FC = () => {
  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto flex items-center justify-center pointer-events-none select-none">
      <div className="absolute inset-4 bg-gradient-to-tr from-[#E07A43]/25 via-[#FFA25B]/20 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="w-56 h-56 rounded-3xl bg-[#0D0907]/90 border border-[#E07A43]/40 shadow-2xl backdrop-blur-xl flex flex-col items-center justify-center p-6 text-center">
        <Sparkles className="w-9 h-9 text-[#FFA25B] mb-2 animate-bounce" />
        <span className="font-serif font-bold text-[#FAF6F0] text-base">Pranavi S.</span>
        <span className="text-xs font-mono text-[#FFA25B] mt-1">Neural Synapse Mesh</span>
        <span className="text-[11px] text-[#A89F91] mt-2">Computer Science &amp; AI</span>
      </div>
    </div>
  );
};

// Main Exported Component
export const NeuralPlexus3D: React.FC = () => {
  const [hasError, setHasError] = useState(false);
  const [activeHubId, setActiveHubId] = useState<string | null>(null);
  const [impulseTrigger, setImpulseTrigger] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  const handleTriggerImpulse = useCallback(() => {
    setImpulseTrigger((prev) => prev + 1);
  }, []);

  const activeHub = useMemo(
    () => DOMAIN_HUBS.find((h) => h.id === activeHubId),
    [activeHubId]
  );

  if (hasError) {
    return <NeuralPlexusFallback />;
  }

  return (
    <div className="w-full h-full relative select-none pointer-events-auto">
      {/* 3D Canvas Viewport - Completely Borderless & Flowing */}
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 46 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
        onError={() => setHasError(true)}
        className="w-full h-full cursor-grab active:cursor-grabbing relative z-0"
        onClick={handleTriggerImpulse}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#FFE8D6" />
        <directionalLight position={[-5, -6, -4]} intensity={0.9} color="#FF7A30" />
        <pointLight position={[2, 0, 2]} intensity={2.2} color="#FFA25B" distance={8} />

        <NeuralConstellationScene
          activeHubId={activeHubId}
          setActiveHubId={setActiveHubId}
          impulseTrigger={impulseTrigger}
          autoRotate={autoRotate}
        />
      </Canvas>

      {/* Subtle Floating Interaction Controls at bottom-right of viewport */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 z-30 flex items-center gap-2 pointer-events-auto">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleTriggerImpulse();
          }}
          title="Emit Synaptic Pulse"
          className="px-3 py-1.5 rounded-full bg-[#120B08]/80 hover:bg-[#20140E] border border-[#E07A43]/30 hover:border-[#FFA25B]/60 text-[#FFA25B] hover:text-[#FFF] backdrop-blur-md transition-all flex items-center gap-1.5 text-xs font-mono cursor-pointer shadow-lg active:scale-95"
        >
          <Zap className="w-3.5 h-3.5 text-[#FFA25B] animate-pulse" />
          <span className="hidden sm:inline">IMPULSE</span>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setAutoRotate((prev) => !prev);
          }}
          title={autoRotate ? 'Pause Rotation' : 'Enable Rotation'}
          className={`p-2 rounded-full border backdrop-blur-md transition-all cursor-pointer shadow-lg active:scale-95 ${
            autoRotate
              ? 'bg-[#E07A43]/20 border-[#E07A43]/50 text-[#FFA25B]'
              : 'bg-[#120B08]/80 border-[#E07A43]/25 text-[#A89F91] hover:text-[#FFA25B]'
          }`}
        >
          <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin-slow' : ''}`} />
        </button>
      </div>
    </div>
  );
};

export default NeuralPlexus3D;
