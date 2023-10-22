/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: "#9333EA",
                secondary: "#ff7e33",
                info: "#0C63E7",
            },
        },
    },
    plugins: [],
};
