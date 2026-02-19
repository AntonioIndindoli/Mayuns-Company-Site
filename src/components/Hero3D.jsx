import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PresentationControls, useGLTF, Bounds, Center, Html, useProgress } from "@react-three/drei";
import * as THREE from "three";

function Loader({ poster }) {
    const { progress } = useProgress();
    return (
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
            {poster && (
                <img
                    src={poster}
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
            )}
            <div style={{
                position: "absolute", inset: 0, display: "grid", placeItems: "center",
                fontSize: 12, fontFamily: "system-ui, sans-serif", opacity: 0.8
            }}>
                Loading {Math.round(progress)}%
            </div>
        </div>
    );
}

function Model(props) {
    const ref = useRef();
    const { scene } = useGLTF("/models/home_logo.glb");

    const resetRotation = () => {
        if (ref.current) {
            ref.current.rotation.set(0, 0, 0);
        }
    };

    useEffect(() => {
        scene.traverse((o) => {
            if (o.isMesh) {
                o.castShadow = true
                o.receiveShadow = true
            }
        });

        resetRotation();

        const handleVisibilityChange = () => {
            if (!document.hidden) {
                resetRotation();
            }
        };

        window.addEventListener("pageshow", resetRotation);
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            window.removeEventListener("pageshow", resetRotation);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [scene]);

    useFrame((state) => {
        if (!ref.current) return

        const t = state.clock.getElapsedTime()

        const amplitude = 0.15
        const speed = 0.5
        ref.current.rotation.y = Math.sin(t * speed) * amplitude
    });
    return <primitive ref={ref} object={scene} {...props} />;
}

export default function Hero3D({ fallbackImg, className = "hero3d" }) {
    return (
        <div className={className}>
            <div className="frame">
                <Suspense fallback={<Loader poster={fallbackImg} />}>
                    <Canvas
                        camera={{ fov: 40 }}
                        dpr={[1, 1.5]}
                        shadows
                        gl={{ alpha: true, antialias: true }}
                        onCreated={({ gl, scene }) => {
                            gl.setClearColor(0x000000, 0)
                            gl.physicallyCorrectLights = true
                            gl.outputColorSpace = THREE.SRGBColorSpace
                            gl.toneMapping = THREE.ACESFilmicToneMapping
                            gl.toneMappingExposure = 1.1
                            scene.background = null
                        }}
                        style={{ background: "transparent", touchAction: "none" }}             // <-- ensure CSS is transparent
                    >
                        <directionalLight
                            position={[5, 6, 5]}
                            intensity={1}
                            castShadow
                            shadow-mapSize-width={2048}
                            shadow-mapSize-height={2048}
                            shadow-bias={-0.0001}
                        />

                        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.65, 0]} receiveShadow>
                            <planeGeometry args={[100, 100]} />
                            <shadowMaterial opacity={0.1} />
                        </mesh>

                        <PresentationControls
                            global
                            snap
                            config={{ mass: 1.5, tension: 200, friction: 30 }}
                            rotation={[0, 0, 0]}
                            speed={0.5}
                            polar={[-Math.PI / 3, Math.PI / 3]}
                            azimuth={[-Math.PI, Math.PI]}
                        >
                            <Center>
                                <group scale={[.7, .7, .7]}>   {/* bigger jar */}
                                    <Model />
                                </group>
                            </Center>
                        </PresentationControls>


                        <Environment preset="sunset" />  {/* lights only; no background */}
                        {/* Removed <ContactShadows /> so nothing except the model renders */}
                    </Canvas>
                </Suspense>
            </div>
        </div>
    );
}
useGLTF.preload("/models/home_logo.glb");