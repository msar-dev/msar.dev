import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: colors.teal[500],
                secondary: colors.teal[900],
                info: colors.blue[500],
            },
        },
    },
    plugins: [],
};
