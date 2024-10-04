import { Canvas } from "@react-three/fiber";
import { FC, Suspense } from "react";
import { CanvasLoader } from "../loader";
import { OrbitControls, Preload } from "@react-three/drei";
import Earth from "./earth";

const CanvasEarth : FC = () => {
    return (
        <Canvas
            shadows
            frameloop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />

                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default CanvasEarth;
