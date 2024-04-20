import type { Config } from "tailwindcss";
import plugin from  'tailwindcss/plugin';

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.-rotate-y-180': {
      transform: 'rotateY(-180deg)',
    },
  })
})

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dosis: ["Dosis", "sans-serif"],
      },
    },
  },
  plugins: [rotateY],
};
export default config;
