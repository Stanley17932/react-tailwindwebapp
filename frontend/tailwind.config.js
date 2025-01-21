/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'very-light-yellow': '#FFFFE0', // Very light shade of yellow
      },
    },
  },
  plugins: [],
}

