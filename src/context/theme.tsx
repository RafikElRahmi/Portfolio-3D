import { useContext, useState, createContext, useMemo } from "react";

export enum themeModes {
    LIGHT = "light",
    DARK = "dark",
}
const ThemeContext = createContext({
    mode: themeModes.LIGHT,
    toggleTheme: () => {},
});

interface IThemeProviderProps {
    children: React.ReactNode;
}
function ThemeProvider({ children }: IThemeProviderProps) {
    const [mode, setmode] = useState(() => {
        const theme = localStorage.getItem("theme");
        if (theme === themeModes.DARK) {
            document.documentElement.classList.add(themeModes.DARK);
            return themeModes.DARK;
        }
        return themeModes.LIGHT;
    });
    function setModeTheme() {
        if (mode === themeModes.DARK) {
            setmode(themeModes.LIGHT);
            document.documentElement.classList.remove(themeModes.DARK);
            localStorage.setItem("theme", themeModes.LIGHT);
        } else {
            setmode(themeModes.DARK);
            document.documentElement.classList.add(themeModes.DARK);
            localStorage.setItem("theme", themeModes.DARK);
        }
    }
    const value = useMemo(
        () => ({ mode, toggleTheme: setModeTheme }),
        [setModeTheme, mode]
    );
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}
export const useTheme = () => {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) {
        throw new Error("useTheme must be used within a UseMode provider");
    }
    return themeContext;
};
export default ThemeProvider;
