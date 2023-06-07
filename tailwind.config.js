/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
          "prbly-accent": '#5D31FF',
          "prbly-white": "#FAFAFA",
          "prbly-black": "#000000",
          "prbly-dark": "#333333",
          "prbly-gray": "#999999",
          "prbly-light": "#CCCCCC",
          "prbly-yellow": "#DEF241"
      },
    },
  },
  plugins: [],
}
