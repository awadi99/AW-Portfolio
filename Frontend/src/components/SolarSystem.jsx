import React, {
    useMemo,
    useState,
} from "react";

import * as THREE from "three";

import { Text } from "@react-three/drei";

/* ========================================
   ORBIT SETTINGS
======================================== */

const orbitSettings = [
    {
        radius: 9,
        opacity: 0.24,
    },
    {
        radius: 15,
        opacity: 0.18,
    },
    {
        radius: 21,
        opacity: 0.14,
    },
];

/* ========================================
   ORBIT RING
======================================== */

function OrbitRing({ radius, opacity }) {
    const points = useMemo(() => {
        const geometry =
            new THREE.BufferGeometry();

        const positions = [];

        const segments = 128;

        for (let i = 0; i <= segments; i++) {
            const angle =
                (i / segments) *
                Math.PI *
                2;

            positions.push(
                Math.cos(angle) * radius,
                Math.sin(angle) * radius,
                0
            );
        }

        geometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(
                positions,
                3
            )
        );

        return geometry;
    }, [radius]);

    return (
        <line geometry={points}>
            <lineBasicMaterial
                color="#8b5cf6"
                transparent
                opacity={opacity}
            />
        </line>
    );
}

/* ========================================
   PLANET ATMOSPHERE
======================================== */

function PlanetAtmosphere() {
    return (
        <group>
            {/* Outer Blue Glow */}
            <mesh>
                <sphereGeometry
                    args={[5.7, 64, 64]}
                />

                <meshBasicMaterial
                    color="#2563eb"
                    transparent
                    opacity={0.10}
                    side={THREE.BackSide}
                />
            </mesh>

            {/* Dark Purple Atmosphere */}
            <mesh>
                <sphereGeometry
                    args={[5.4, 64, 64]}
                />

                <meshBasicMaterial
                    color="#6d28d9"
                    transparent
                    opacity={0.16}
                    side={THREE.BackSide}
                />
            </mesh>

            {/* Inner Blue / Indigo Glow */}
            <mesh>
                <sphereGeometry
                    args={[5.15, 64, 64]}
                />

                <meshBasicMaterial
                    color="#4338ca"
                    transparent
                    opacity={0.12}
                    side={THREE.BackSide}
                />
            </mesh>
        </group>
    );
}

/* ========================================
   MAIN PLANET
======================================== */

function MainPlanet() {
    const [hovered, setHovered] =
        useState(false);

    return (
        <group>
            {/* Atmosphere */}
            <PlanetAtmosphere />

            {/* Main Dark Purple Planet */}
            <mesh
                scale={
                    hovered
                        ? [1, 1, 1]
                        : [1, 1, 1]
                }
                onPointerEnter={(event) => {
                    event.stopPropagation();

                    setHovered(true);

                    document.body.style.cursor =
                        "pointer";
                }}
                onPointerLeave={() => {
                    setHovered(false);

                    document.body.style.cursor =
                        "default";
                }}
            >
                <sphereGeometry
                    args={[5, 64, 64]}
                />

                <meshStandardMaterial
                    color="#18002f"
                    emissive="#3b0764"
                    emissiveIntensity={
                        hovered
                            ? 0.45
                            : 0.45
                    }
                    roughness={0.45}
                    metalness={0.15}
                />
            </mesh>

            {/* Planet Name */}
            {hovered && (
                <Text
                    position={[
                        0,
                        6.5,
                        0,
                    ]}
                    fontSize={0.8}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.04}
                    outlineColor="#000000"
                >
                    The Singularity
                </Text>
            )}

            {/* Blue Outer Highlight */}
            <mesh
                scale={[
                    1.01,
                    1.01,
                    1.01,
                ]}
            >
                <sphereGeometry
                    args={[5, 64, 64]}
                />

                <meshBasicMaterial
                    color="#3b82f6"
                    transparent
                    opacity={0.06}
                    side={THREE.BackSide}
                />
            </mesh>
        </group>
    );
}

/* ========================================
   BACKGROUND STARS
======================================== */

function Stars() {
    const positions = useMemo(() => {
        const count = 500;

        const data =
            new Float32Array(
                count * 3
            );

        for (
            let i = 0;
            i < count;
            i++
        ) {
            const radius =
                25 +
                Math.random() * 55;

            const angle =
                Math.random() *
                Math.PI *
                2;

            const x =
                Math.cos(angle) *
                radius;

            const y =
                Math.sin(angle) *
                radius;

            const z =
                -5 -
                Math.random() * 30;

            data[i * 3] = x;
            data[i * 3 + 1] = y;
            data[i * 3 + 2] = z;
        }

        return data;
    }, []);

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={
                        positions.length / 3
                    }
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>

            <pointsMaterial
                color="#ffffff"
                size={0.055}
                transparent
                opacity={0.65}
                sizeAttenuation
            />
        </points>
    );
}

/* ========================================
   SOLAR SYSTEM
======================================== */

export default function SolarSystem() {
    return (
        <group>
            {/* ==================================
                LIGHTING
            ================================== */}

            <ambientLight
                intensity={0.35}
            />

            {/* Purple Main Light */}
            <pointLight
                position={[
                    0,
                    0,
                    8,
                ]}
                intensity={90}
                distance={45}
                color="#6d28d9"
            />

            {/* Blue Secondary Light */}
            <pointLight
                position={[
                    -10,
                    8,
                    10,
                ]}
                intensity={35}
                distance={40}
                color="#2563eb"
            />

            {/* ==================================
                BACKGROUND STARS
            ================================== */}

            <Stars />

            {/* ==================================
                ORBIT RINGS
            ================================== */}

            {orbitSettings.map(
                (orbit) => (
                    <OrbitRing
                        key={
                            orbit.radius
                        }
                        radius={
                            orbit.radius
                        }
                        opacity={
                            orbit.opacity
                        }
                    />
                )
            )}

            {/* ==================================
                CENTER PLANET
            ================================== */}

            <MainPlanet />
        </group>
    );
}