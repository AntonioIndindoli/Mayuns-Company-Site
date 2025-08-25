import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PresentationControls, useGLTF, Bounds, Center,  Html, useProgress  } from "@react-three/drei";

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
    useEffect(() => {
        scene.traverse((o) => {
            if (o.isMesh) {
                o.castShadow = false;
                o.receiveShadow = false; // no ground anyway
                // if your model has transparent parts, ensure its materials have transparent=true
                // o.material.transparent = true; // only if needed
            }
        });
    }, [scene]);
    useFrame((_, d) => { if (ref.current) ref.current.rotation.y += d * 0.1; });
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
                        gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
                        onCreated={({ gl, scene }) => {
                            gl.setClearColor(0x000000, 0);                  // <-- alpha = 0
                            scene.background = null;                        // <-- no scene background
                        }}
                        style={{ background: "transparent", touchAction: "none" }}             // <-- ensure CSS is transparent
                    >
                        {/* no <color attach="background" .../> here */}
                        <ambientLight intensity={0.6} />
                        <directionalLight position={[3, 3, 3]} intensity={1.2} castShadow />


                        <PresentationControls
                            global
                            snap={false}
                            config={{ mass: 1.2, tension: 160, friction: 35 }}
                            rotation={[0, 0, 0]}
                            speed={2}
                            polar={[-Math.PI / 8, Math.PI / 8]}
                            azimuth={[-Infinity, Infinity]}
                        >
                            <Center>
                                <group scale={[.7, .7, .7]}>   {/* bigger jar */}
                                    <Model />
                                </group>
                            </Center>
                        </PresentationControls>


                        <Environment preset="city" />  {/* lights only; no background */}
                        {/* Removed <ContactShadows /> so nothing except the model renders */}
                    </Canvas>
                </Suspense>
            </div>
        </div>
    );
}
useGLTF.preload("/models/home_logo.glb");