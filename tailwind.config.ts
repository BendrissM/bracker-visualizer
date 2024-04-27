import { type Config } from "tailwindcss";

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
        montserrat: ["Montserrat", "sans-serif"],
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
