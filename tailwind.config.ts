import type { Config } from 'tailwindcss';
import defaultColors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // Start with all default Tailwind colors
      ...defaultColors,
      // Now, define your custom palette, overriding defaults where names match
      white: '#fefefe', // Overrides default white for text-white, bg-white etc.
      black: '#242424', // Overrides default black for text-black, bg-black etc.
      primary: {
        50:  "#e9ecf5",
        100: "#c8d1e5",
        200: "#9fb0cf",
        300: "#758eb9",
        400: "#4c6da3",
        500: "#325492",
        600: "#244277",
        700: "#1b335d",
        800: "#142857",
        900: "#0e1b3f",
      },
      accent: {
        50:  "#fff4ea",
        100: "#ffe4c7",
        200: "#ffd19e",
        300: "#ffbc74",
        400: "#ffa44a",
        500: "#ff8e23",
        600: "#ff7d00",
        700: "#e56f00",
        800: "#c75f00",
        900: "#9b4a00",
      },
      "base-dark": "#242424",
      "base-light": "#f7f7f7",
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        heading: ['Exo 2', ...defaultTheme.fontFamily.sans], // Exo 2 with default sans-serif fallbacks
      },
    },
  },
  plugins: [],
} satisfies Config;
