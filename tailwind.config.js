/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      keyframes: {
        'slot-machine': {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-200%)' },
        },
      },
      animation: {
        'slot-machine': 'slot-machine 1s ease-out forwards',
        'scroll': 'scroll 0.2s linear infinite',
      }
    },
  },
  plugins: [],
};
