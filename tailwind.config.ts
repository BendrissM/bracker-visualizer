import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: () => ({
        "hero-pattern": "url('/background.png')",
      }),
      backgroundRepeat: {
        round: "round",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
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
