/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        themeColor: "#F78430",
        textColor: "#828282",
        navColor: "#313131",
        whiteColor: "#F6F6F6",
        brandColor: "#B6B6B6",
        cardColor: "#2C3847"
      },
    },
  },
  plugins: [],
};
