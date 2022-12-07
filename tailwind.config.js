/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: [
    {
      daisyui: "emerald",
    },
    {
      mytheme: { neutral: "#3D4451" },
    },
  ],
  plugins: [require("daisyui")],
};
