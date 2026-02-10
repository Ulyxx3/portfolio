/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'repo-orange': '#FFA500', // A nice bright orange
                'repo-blue': '#0077CC',   // Deep technical blue
                'repo-dark': '#0a0a0a',   // Very dark grey/black
                'repo-secondary': '#1a1a1a', // Lighter dark for cards
            },
            fontFamily: {
                quantico: ['"Quantico"', 'sans-serif'], // For headers
                rajdhani: ['"Rajdhani"', 'sans-serif'], // For body text
            },
            boxShadow: {
                'glow-orange': '0 0 10px rgba(255, 165, 0, 0.5)',
                'glow-blue': '0 0 10px rgba(0, 119, 204, 0.5)',
            },
        },
    },
    plugins: [],
}
