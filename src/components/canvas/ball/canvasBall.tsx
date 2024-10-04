import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense } from "react";
import CanvasBall from "./skillBall";
import { CanvasLoader } from "../loader";

interface ISkillBallProps {
    icon: string;
}

const SkillBall: FC<ISkillBallProps> = ({ icon }) => {
    return (
        <mesh>
            <Canvas
                frameloop="demand"
                dpr={[1, 2]}
                gl={{ preserveDrawingBuffer: true }}>
                <Suspense fallback={<CanvasLoader />}>
                    <OrbitControls enableZoom={false} />
                    <CanvasBall imgUrl={icon} />
                </Suspense>
                <Preload  all/>
            </Canvas>
        </mesh>
    );
};

export default SkillBall;
