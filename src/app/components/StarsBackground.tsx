"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import * as random from "maath/random";

function Fireflies() {
  const ref = useRef<THREE.Points>(null);

  // Initial positions
  const positions = useMemo(() => {
    return random.inSphere(new Float32Array(300 * 3), {
      radius: 1.8,
    }) as Float32Array;
  }, []);

  // Individual velocity seeds for organic motion
  const velocities = useMemo(() => {
    const v = new Float32Array(300 * 3);
    for (let i = 0; i < v.length; i++) {
      v[i] = (Math.random() - 0.5) * 0.002;
    }
    return v;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;

    const pos = ref.current.geometry.attributes.position
      .array as Float32Array;

    for (let i = 0; i < pos.length; i += 3) {
      pos[i] += velocities[i] * Math.sin(state.clock.elapsedTime + i);
      pos[i + 1] += velocities[i + 1] * Math.cos(state.clock.elapsedTime + i);
      pos[i + 2] += velocities[i + 2];

      // Soft boundary wrap (keeps them floating around)
      if (pos[i] > 2) pos[i] = -2;
      if (pos[i] < -2) pos[i] = 2;
      if (pos[i + 1] > 2) pos[i + 1] = -2;
      if (pos[i + 1] < -2) pos[i + 1] = 2;
    }

    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="white"
        size={0.020}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function StarsBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 2], fov: 75 }}
        gl={{ antialias: true }}
      >
        {/* Ambient glow */}
        <ambientLight intensity={0.6} />
        <Fireflies />
      </Canvas>
    </div>
  );
}
