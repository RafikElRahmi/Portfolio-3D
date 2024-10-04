interface IDividerProps {
    width?: string;
    height?: string;
    className?: string;
}

function Divider({ width = "2px", height = "2px", className }: IDividerProps) {
    return (
        <i
            className={`block bg-gray-400 ${className || ""}`}
            style={{
                width: width,
                height: height,
            }}
        />
    );
}

export default Divider;
