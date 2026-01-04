import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary palette - deep navy blue
                primary: {
                    50: '#f0f4f8',
                    100: '#d9e2ec',
                    200: '#bcccdc',
                    300: '#9fb3c8',
                    400: '#829ab1',
                    500: '#627d98',
                    600: '#486581',
                    700: '#334e68',
                    800: '#243b53',
                    900: '#102a43',
                    950: '#0a1929',
                },
                // Secondary palette - warm accent (subtle rust/copper)
                accent: {
                    50: '#fdf8f6',
                    100: '#f2e8e5',
                    200: '#eaddd7',
                    300: '#e0cec7',
                    400: '#d2bab0',
                    500: '#bfa094',
                    600: '#a18072',
                    700: '#977669',
                    800: '#846358',
                    900: '#43302b',
                },
                // Neutral palette - warm grays
                neutral: {
                    50: '#fafaf9',
                    100: '#f5f5f4',
                    200: '#e7e5e4',
                    300: '#d6d3d1',
                    400: '#a8a29e',
                    500: '#78716c',
                    600: '#57534e',
                    700: '#44403c',
                    800: '#292524',
                    900: '#1c1917',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['Merriweather', 'Georgia', 'serif'],
                mono: ['JetBrains Mono', 'Menlo', 'monospace'],
            },
            fontSize: {
                'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                'heading-1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
                'heading-2': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
                'heading-3': ['1.5rem', { lineHeight: '1.4' }],
                'body': ['1rem', { lineHeight: '1.7' }],
                'small': ['0.875rem', { lineHeight: '1.6' }],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                }
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-in-out forwards'
            },
            maxWidth: {
                'content': '65ch',
                'wide': '80rem',
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
            }
        },
    },
    plugins: [typography],
};
export default config;
