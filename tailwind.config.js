/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["inter", "sans-serif"],
      },
      colors: {
        supabaseGreen: "#3ECF8E",
        darkBlack: "#0f0f0f",
        darkGray: "#1c1c1c",
      },
      backgroundImage: {
        "supabase-gradient":
          "linear-gradient(to Bottom, #0f0f0f, #1c1c1c,#1c4c1c,rgb(5, 134, 76))",
      },
    },
  },
  plugins: [],
};
