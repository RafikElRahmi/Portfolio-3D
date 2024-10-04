import { PointMaterial, Points } from "@react-three/drei";
import { PointsProps, useFrame } from "@react-three/fiber";
import { FC, useRef, useState } from "react";
import * as maath from "maath";
import { Points as ThreePoints} from "three";

const Stars: FC<PointsProps> = (props) => {
    const ref = useRef<ThreePoints>(null);
    const [sphere] = useState(
        () =>
            maath.random.inSphere(new Float32Array(5000), {
                radius: 1.2,
            }) as Float32Array
    );

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}>
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

export default Stars;
