// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                'slide-in-from-left': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                'slide-in-from-right': {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                'slide-in-from-bottom': {
                    '0%': { transform: 'translateY(30%)' },
                    '100%': { transform: 'translateY(0)' },
                },
            },
            animation: {
                'slide-in-from-left': 'slide-in-from-left 0.6s ease-out forwards',
                'slide-in-from-right': 'slide-in-from-right 0.6s ease-out forwards',
                'slide-in-from-bottom': 'slide-in-from-bottom 0.6s ease-out forwards'
            },
            boxShadow: {
                'pumpkin': '0 0 30px rgba(255, 117, 24, 0.75)',
            },
            colors: {
                'pumpkin': {
                    DEFAULT: '#FF7518',
                    50: '#FFE3D0',
                    100: '#FFD6BB',
                    200: '#FFBE92',
                    300: '#FFA66A',
                    400: '#FF8D41',
                    500: '#FF7518',
                    600: '#DF5A00',
                    700: '#A74300',
                    800: '#6F2D00',
                    900: '#371600',
                    950: '#1B0B00',
                },
                primary: {
                    DEFAULT: "var(--primary-500)",
                    50: "var(--primary-50)",
                    100: "var(--primary-100)",
                    200: "var(--primary-200)",
                    300: "var(--primary-300)",
                    400: "var(--primary-400)",
                    500: "var(--primary-500)",
                    600: "var(--primary-600)",
                    700: "var(--primary-700)",
                    800: "var(--primary-800)",
                    900: "var(--primary-900)",
                    950: "var(--primary-950)",
                },
                secondary: {
                    DEFAULT: "var(--secondary-500)",
                    50: "var(--secondary-50)",
                    100: "var(--secondary-100)",
                    200: "var(--secondary-200)",
                    300: "var(--secondary-300)",
                    400: "var(--secondary-400)",
                    500: "var(--secondary-500)",
                    600: "var(--secondary-600)",
                    700: "var(--secondary-700)",
                    800: "var(--secondary-800)",
                    900: "var(--secondary-900)",
                    950: "var(--secondary-950)",
                },
            },
        },
    },
    plugins: [],
}
