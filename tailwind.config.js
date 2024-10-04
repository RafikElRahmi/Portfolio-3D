/** @type {import('tailwindcss').Config} */
import { theme } from "./src/libs";
export default {
    content: ["./src/**/*.{ts,tsx}"],
    theme: theme,
    plugins: [require("tailwindcss-rtl")],
    darkMode: "class",
};
