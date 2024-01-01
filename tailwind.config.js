module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 50: "#fbfbfb", 200: "#e7e7e7", 700: "#555555", 900: "#1d1d1d" },
        black: { 900: "#000000", "900_0a": "#0000000a" },
        white: { A700: "#ffffff" },
        light_blue: { 900: "#024e82" },
      },
      boxShadow: { bs: "0px 6px  15px 0px #0000000a" },
      fontFamily: {
        arimo: "Arimo",
        lato: "Lato",
        baloo: "Baloo",
        inter: "Inter",
        sourcesanspro: "Source Sans Pro",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
