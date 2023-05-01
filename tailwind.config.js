/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://i.ibb.co/NyVtRDM/food-Banner-1.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}

