/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-custom': '#013024',
        'red-custom': '#e92929',
      },
    },
  },
  plugins: [],
}