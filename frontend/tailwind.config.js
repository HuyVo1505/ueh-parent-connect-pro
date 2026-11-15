/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  '#e8f5f3',
          100: '#d1ebe8',
          200: '#a7f3d0',
          500: '#0d9488',
          600: '#0a7c6e',
          700: '#065f54',
          800: '#064e3b',
        },
        ueh: {
          primary:   '#0a7c6e',
          dark:      '#065f54',
          light:     '#e8f5f3',
          orange:    '#f97316',
          orangeHover:'#ea580c',
        },
      },
      fontFamily: {
        sans: ['Segoe UI', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 4px rgba(0,0,0,0.07)',
        header: '0 2px 12px rgba(0,0,0,0.2)',
        chat: '0 20px 60px rgba(0,0,0,0.25)',
      },
      animation: {
        pulse2: 'pulse 1.5s infinite',
        bounce3: 'bounce 0.9s infinite',
      },
    },
  },
  plugins: [],
};
