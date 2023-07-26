/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1e1e21",
        muted: "#1e1e21b3",
        "muted-inverse": "rgba(245,243,239,.6)",
        "off-white": "#f5f3ef",
      },
    },
  },
  plugins: [],
};
