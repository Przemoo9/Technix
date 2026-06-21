/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'industrial': {
          '50': '#f8fafc',
          '100': '#f1f5f9',
          '200': '#e2e8f0',
          '800': '#1e293b',
          '900': '#0f172a',
          '950': '#020617',
        },
        'safety': {
          '400': '#fbbf24',
          '500': '#f59e0b',
          '600': '#d97706',
        }
      }
    },
  },
  plugins: [],
}