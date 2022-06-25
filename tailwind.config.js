/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        160: "160px",
        480: "480PX",
        500: "500px",
        800: "800px",
      },
      height: {
        200: "200px",
        500: "500px",
        600: "600px",
      },
      colors: {
        background: "#545f7d",
        squareBackground: "#44425e",
        borderColor: "#a855c1",
        modalBackground: "rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
}
 