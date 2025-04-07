/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        card: '#141414',
        'card-hover': '#1A1A1A',
        accent: {
          light: '#FFFFFF',
          muted: '#A3A3A3',
          dark: '#404040',
        },
      },
    },
  },
  plugins: [],
}
