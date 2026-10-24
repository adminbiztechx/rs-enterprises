/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0d5dd6',
          darkBlue: '#0047b3',
          navy: '#0b192e',
          deepNavy: '#060f1e',
          lightBlue: '#f0f5ff',
          iceBlue: '#e8f1fc',
          accent: '#2563eb'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
