import { createContext, useContext, useEffect, useState } from "react";
export enum EDevice {
    MOBILE = "MOBILE",
    TABLET = "TABLET",
    DESKTOP = "DESKTOP",
    TV = "TV",
}
type IDevice = EDevice;
interface IDimension {
    width: number;
    height: number;
}
export const DimensionContext = createContext({
    device: EDevice.DESKTOP,
    devices: EDevice,
    width: 0,
    height: 0,
});

const getDeviceType = (width: number): IDevice => {
    if (width < 600) {
        return EDevice.MOBILE;
    } else if (width < 900) {
        return EDevice.TABLET;
    } else if (width < 1400) {
        return EDevice.DESKTOP;
    } else {
        return EDevice.TV;
    }
};
interface IDimensionProps {
    children: React.ReactNode;
}
function Dimension({ children }: IDimensionProps) {
    const [windowDimension, setWindowDimension] = useState<IDimension>({
        width: 0,
        height: 0,
    });
    const [device, setDevice] = useState<IDevice>(
        getDeviceType(windowDimension.width)
    );
    const handleResize = () => {
        const newDimensions = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
        setWindowDimension(() => newDimensions);
        setDevice(getDeviceType(newDimensions.width));
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (windowDimension.width === 0) return null;
    return (
        <DimensionContext.Provider
            value={{
                devices: EDevice,
                device,
                width: windowDimension.width,
                height: windowDimension.height,
            }}>
            {children}
        </DimensionContext.Provider>
    );
}
export const useDimension = () => {
    const context = useContext(DimensionContext);
    if (!context) {
        throw new Error(
            "useDimension must be used within a Dimension component"
        );
    }
    return context;
};
export default Dimension;
