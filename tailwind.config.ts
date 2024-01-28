import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: () => ({
        "swiss-stage": "url('/background.png')",
        "playoff-bracket": "url('/bracket-bg.png')",
      }),
      backgroundRepeat: {
        round: "round",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        custom: ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      spacing: ["responsive", "hover", "focus", "active", "group-hover"],
    },
  },
  plugins: [],
} satisfies Config;
