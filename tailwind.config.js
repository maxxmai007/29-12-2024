/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          800: '#141414',
          900: '#0A0A0A',
        },
        gold: {
          500: '#D4B788',
          600: '#B69B74',
          muted: '#B08D57',
          earth: '#A0784C',
        },
        earth: {
          green: {
            DEFAULT: '#2C3B2D',
            dark: '#1A231B',
            light: '#3D4F3E',
          },
          tan: {
            DEFAULT: '#C4B5A2',
            dark: '#A69883',
            light: '#D8CCC0',
          },
          navy: {
            DEFAULT: '#1B2634',
            dark: '#111821',
            light: '#2C3B4F',
          },
          beige: {
            DEFAULT: '#E5DED3',
            dark: '#C4B5A2',
            light: '#F2EDE6',
          },
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        float: 'floatAnimation var(--duration) infinite ease-in-out',
        'spin-slow': 'spin 8s linear infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.2' },
          '50%': { transform: 'translateY(-20px) rotate(10deg)', opacity: '0.3' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
};