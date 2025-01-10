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
                'shark': { DEFAULT: '#2C2E32', 50: '#62666F', 100: '#5C6068', 200: '#50535B', 300: '#44474D', 400: '#383A40', 500: '#2C2E32', 600: '#25272A', 700: '#1E1F22', 800: '#17181A', 900: '#0F1011', 950: '#0C0C0D' },
                'tamarillo': {
                    DEFAULT: '#8D1419',
                    50: '#E23239',
                    100: '#E0272E',
                    200: '#D01E25',
                    300: '#BA1A21',
                    400: '#A3171D',
                    500: '#8D1419',
                    600: '#801217',
                    700: '#721014',
                    800: '#650E12',
                    900: '#570C0F',
                    950: '#510B0E'
                },
            },
        },
    },
    plugins: [],
}
