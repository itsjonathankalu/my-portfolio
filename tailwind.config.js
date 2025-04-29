/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        background: {
          DEFAULT: '#FFFFFF',
          dark: '#0A0A0A',
        },
        card: {
          DEFAULT: '#F5F5F5',
          hover: '#EEEEEE',
          dark: '#141414',
          'hover-dark': '#1A1A1A',
        },
        accent: {
          light: '#000000',
          muted: '#666666',
          dark: '#CCCCCC',
          // Dark mode colors
          'light-dark': '#FFFFFF',
          'muted-dark': '#A3A3A3',
          'dark-dark': '#404040',
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        float: 'float 15s ease-in-out infinite',
        'float-delayed': 'float-delayed 15s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-30px, 30px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(30px, -30px)' },
        },
      },
    },
  },
  plugins: [],
}
