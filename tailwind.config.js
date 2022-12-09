/** @type {import("tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      minWidth: {
        6: "1.5rem",
      },
      gridAutoColumns: {
        "1/2": "calc(50% - 0.5rem)",
        "1/4": "calc(25% - 0.75rem)",
        full: "100%",
        80: "20rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")({ strategy: "class" }),
  ],
};
