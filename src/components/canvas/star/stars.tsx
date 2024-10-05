import { PointMaterial, Points } from "@react-three/drei";
import { PointsProps, useFrame } from "@react-three/fiber";
import { FC, useEffect, useRef, useState } from "react";
import * as maath from "maath";
import { Points as ThreePoints } from "three";

const Stars: FC<PointsProps> = (props) => {
    const ref = useRef<ThreePoints>(null);
    const [sphere] = useState(
        () =>
            maath.random.inSphere(new Float32Array(30000), {
                radius: 0.8,
            }) as Float32Array
    );

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });
     const [isMobile, setIsMobile] = useState<boolean>(false);

     useEffect(() => {
         const mediaQuery = window.matchMedia("(max-width: 500px)");

         setIsMobile(mediaQuery.matches);

         const handleMediaQueryChange = (event: MediaQueryListEvent) => {
             setIsMobile(event.matches);
         };

         mediaQuery.addEventListener("change", handleMediaQueryChange);
         return () => {
             mediaQuery.removeEventListener("change", handleMediaQueryChange);
         };
     }, []);
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
                    size={isMobile ? 0.0005 :0.001}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

export default Stars;
