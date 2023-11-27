/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

/* 
  The content property specifies the files that
  Tailwind CSS should analyze to generate its styles.
  In this case, it includes the index.html file and all
  JavaScript (*.js and *.jsx) files inside the src
  directory.

  The theme property is used to customize various aspects
  of Tailwind CSS, such as colors, typography, spacing,
  and more. the extend Property allows you to extend the
  default theme with additional customizations. the colors
  Property extends the color palette with custom color
  definitions for primary, secondary, dimWhite, and dimBlue.
  fontFamily Property: It adds a custom font family named
  "poppins" using the Poppins font and sets it as a
  sans-serif fallback.

  The screens property defines custom breakpoints for
  responsive design. It provides named screen sizes
  (xs, ss, sm, md, lg, xl) along with corresponding pixel
  values.
*/
