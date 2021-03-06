const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "hsl(0, 0%, 0%)",
      white: "hsl(0, 0%, 100%)",
      gray: {
        50: "hsl(0, 0%, 98%)",
        500: "hsl(0, 0%, 52%)",
      },
      blue: {
        800: "hsl(209, 23%, 22%)",
        900: "hsl(207, 26%, 17%)",
        950: "hsl(200, 15%, 8%)",
      },
    },
    fontWeight: {
      normal: 300,
      semibold: 600,
      extrabold: 800,
    },
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        bold: `0 0px 3px 2px rgba(0, 0, 0, 0.12),
              0 1px 3px 0 rgba(0, 0, 0, 0.1),
              0 1px 2px 0 rgba(0, 0, 0, 0.06)`,
      },
      gridTemplateColumns: {
        "fill-60": "repeat(auto-fill, min(100%, 15rem))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
