import React, {
    useMemo,
    useRef,
    useState,
} from "react";

import { Text } from "@react-three/drei";

import {
    useFrame,
    useLoader,
} from "@react-three/fiber";

import * as THREE from "three";

import { technologies } from "../constants";

/* ========================================
   ORBIT RADII
======================================== */

const orbitRadii = [
    9,
    15,
    21,
];

/* ========================================
   SINGLE SKILL MOON
======================================== */

function SkillMoon({
    technology,
    index,
    radius,
    speed,
}) {
    const groupRef = useRef();

    const [hovered, setHovered] =
        useState(false);

    /* ========================================
       TECHNOLOGY ICON
    ======================================== */

    const iconTexture = useLoader(
        THREE.TextureLoader,
        technology.icon
    );

    /* ========================================
       ORBIT
    ======================================== */

    const orbit = Math.floor(
        index / 5
    );

    /* ========================================
       INITIAL POSITION
    ======================================== */

    const initialAngle = useMemo(() => {
        const positionInOrbit =
            index % 5;

        return (
            positionInOrbit *
                ((Math.PI * 2) / 5) +
            orbit *
                (Math.PI / 10)
        );
    }, [index, orbit]);

    /* ========================================
       ANIMATION
    ======================================== */

    useFrame((state, delta) => {
        if (!groupRef.current) {
            return;
        }

        const time =
            state.clock.elapsedTime;

        const angle =
            initialAngle +
            time * speed;

        /* Orbit position */

        groupRef.current.position.x =
            Math.cos(angle) *
            radius;

        groupRef.current.position.y =
            Math.sin(angle) *
            radius;

        /*
            Keep all moons
            on the same front-facing plane
        */

        groupRef.current.position.z = 0;

        /* Hover animation */

        const targetScale =
            hovered ? 1.2 : 1;

        groupRef.current.scale.lerp(
            new THREE.Vector3(
                targetScale,
                targetScale,
                targetScale
            ),
            8 * delta
        );
    });

    /* ========================================
       RENDER
    ======================================== */

    return (
        <group ref={groupRef}>

            {/* Technology Moon */}

            <mesh
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
                    args={[
                        1.05,
                        32,
                        32,
                    ]}
                />

                <meshStandardMaterial
                    color="#ffffff"
                    emissive="#ffffff"
                    emissiveIntensity={
                        hovered
                            ? 0.2
                            : 0.08
                    }
                    roughness={0.3}
                    metalness={0.2}
                />
            </mesh>

            {/* Technology Icon */}

            <sprite
    position={[0, 0, 0]}
    scale={[1.35, 1.35, 1.35]}
>
    <spriteMaterial
        map={iconTexture}
        transparent
        depthWrite={false}
        depthTest={false}
    />
</sprite>

            {/* Technology Name */}

            {hovered && (
                <Text
                    position={[
                        0,
                        1.8,
                        0,
                    ]}
                    fontSize={0.55}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.025}
                    outlineColor="#000000"
                >
                    {technology.name}
                </Text>
            )}

        </group>
    );
}

/* ========================================
   SKILL MOONS
======================================== */

export default function SkillMoons() {
    return (
        <group>
            {technologies.map(
                (
                    technology,
                    index
                ) => {
                    const orbit =
                        Math.floor(
                            index / 5
                        );

                    return (
                        <SkillMoon
                            key={`${technology.name}-${index}`}
                            technology={
                                technology
                            }
                            index={
                                index
                            }
                            radius={
                                orbitRadii[
                                    orbit
                                ]
                            }
                            speed={
                                orbit === 0
                                    ? 0.42
                                    : orbit === 1
                                    ? 0.30
                                    : 0.21
                            }
                        />
                    );
                }
            )}
        </group>
    );
}