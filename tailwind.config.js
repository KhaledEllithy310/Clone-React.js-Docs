/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(88,175,223,.1)",
        Text:" rgb(20 158 202)"

      }
    },
     
  },
  plugins: [],
}