/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // You can extend the theme here if needed, like custom colors, spacing, etc.
      colors: {
        darkBackground: '#121212', // Custom dark background
        darkText: '#E0E0E0', // Custom dark text color
        darkAccent: '#9C8856', // Custom accent color
      },
    },
  },
  darkMode: 'class', // Enables dark mode via a class (e.g., class="dark")
  plugins: [],
}
