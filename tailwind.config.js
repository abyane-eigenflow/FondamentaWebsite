/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fa-deep': '#070710',
        'fa-navy': '#0B0C10',
        'fa-ivory': '#FAF8F5',
        'fa-neon-pink': '#FF007F',
        'fa-bright-blue': '#007FFF',
        'fa-surface': '#12121A',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
}
