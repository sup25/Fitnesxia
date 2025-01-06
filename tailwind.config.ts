import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".section": {
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "0 10px",
        },
        ".container": {
          maxWidth: theme("maxWidth.container"),
        },
        ".heading": {
          fontSize: "48px",
          lineHeight: "1",
          fontWeight: "800",
          textTransform: "uppercase",
        },
        "@media screen and (min-width: 768px)": {
          ".section": {
            padding: "0 30px",
          },
        },
        "@media screen and (max-width: 768px)": {
          ".heading": {
            fontSize: "24px;",
          },
        },
      });
    }),
  ],
} satisfies Config;
