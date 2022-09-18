/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "599px" },
      all: {max: "900px"},
      md: { min: "600px" ,max: "900px" },
      lg: { max: "1024px" },
    },
    fontSize: {
      small: "17px",
      medium: "40px",
      large: "60px",
      mdSmall: "14px",
      mdMedium: "30px",
      mdLarge: "40px",
      smSmall: "12px",
      smMedium: "20px",
      smLarge: "30px",
    },
    colors: {
      primaryColor: "#9abec1",
      textColor: "#333030",
      redColor: "#e92424",
      whiteColor: "#fff",
      layoutModal: "rgba(1,1,1,0.4)"
    },
    extend: {
      maxWidth: {
        container: "1024px",
        mdContainer: "900px",
        smContainer: "600px"
      },
    },
  },
  plugins: [],
};
