import type { Config } from 'tailwindcss';
import defaultColors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  plugins: [],
} satisfies Config;
