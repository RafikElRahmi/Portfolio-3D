import { useGLTF } from "@react-three/drei";
import { FC } from "react";

interface ICompuertsProps {
    isMobile: boolean;
}
const Computers: FC<ICompuertsProps> = ({ isMobile }) => {
    const computer = useGLTF("./desktop_pc/scene.gltf");

    return (
        <mesh>
            <hemisphereLight intensity={3} groundColor="violet" />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={1} />
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.7 : 0.75}
                position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
};

export default Computers;
