/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: '',
  theme: {
    screens: {
      'sm': '769px',
      // => @media (min-width: 640px) { ... }

      'md': '821px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px', 
      // => @media (min-width: 1024px) { ... }

      'mlg': '1192px',

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        primary: '#e2e8f0'
      }
    },
  },
  plugins: [],
}
