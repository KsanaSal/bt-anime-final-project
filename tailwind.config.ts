import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: { serif: ["Roboto Mono", "monospace"] },

            colors: {
                primaryLight: "var(--primaryLight)",
                accent: "var(--accent)",
                transparent: { primaryLight7: "#FEEDED12" },
                secondaryDark: "var(--secondaryDark)",
            },
            boxShadow: {
                boxPrimaryLight: "5px 5px 7px rgba(254, 237, 237, 0.3)",
            },
            dropShadow: {
                textPrimaryLight: "5px 5px 5px rgba(254, 237, 237, 0.7)",
                textDark: "5px 5px 3px rgba(255, 134, 142, 0.7)",
            },
        },
    },
    plugins: [],
};
export default config;
