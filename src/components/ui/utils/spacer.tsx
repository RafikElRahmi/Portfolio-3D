interface ISpacerProps {
    width?: number;
    height?: number;
    className?: string;
}

function Spacer({ width = 1, height = 1, className }: ISpacerProps) {
    const wSpace = `${width * 5}px`;
    const hSpace = `${height * 5}px`;
    return (
        <i
            className={`block ${className || ""}`}
            style={{
                width: wSpace,
                height: hSpace,
            }}
        />
    );
}

export default Spacer;
