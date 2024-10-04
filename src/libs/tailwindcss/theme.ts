import { CustomThemeConfig } from "tailwindcss/types/config";
import screens from "./screens";
import colors from "./colors";
export default {
    extend: {
        screens,
        colors,
        boxShadow: {
            card: "0px 35px 120px -15px #211e35",
        },
        backgroundImage: {
            "hero-pattern": "url('/src/config/constants/images/app/herobg.png')",
        },
    },
} as Partial<CustomThemeConfig & { extend: Partial<CustomThemeConfig> }>;
