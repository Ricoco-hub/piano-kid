module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        kids: ['Baloo 2', 'Nunito', 'Comic Sans MS', 'cursive', 'sans-serif'],
      },
      colors: {
        primary: "#FFD700",
        secondary: "#4F46E5"
      }
    }
  },
  plugins: [],
}
