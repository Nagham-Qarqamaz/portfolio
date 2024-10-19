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
                pumpkin: {
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
                dark: {
                    DEFAULT: '#1F1F1F',
                    50: '#363636',
                    100: '#333333',
                    200: '#2E2E2E',
                    300: '#292929',
                    400: '#242424',
                    500: '#1F1F1F',
                    600: '#1C1C1C',
                    700: '#1A1A1A',
                    800: '#171717',
                    900: '#141414',
                    950: '#131313'
                },
            },
        },
    },
    plugins: [],
}
