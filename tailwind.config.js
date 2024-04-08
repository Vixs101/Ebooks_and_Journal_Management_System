/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '1/6': '23%',
      },
      width: {
        '1/6': "22%"
      }
    },
  },
  plugins: [],
}
