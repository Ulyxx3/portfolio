/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#38bdf8", // Light Blue
                dark: "#0f172a",    // Dark Background
            },
            fontFamily: {
                outfit: ['"Outfit"', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 12s linear infinite',
            },
        },
    },
    plugins: [],
}
