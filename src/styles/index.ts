import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: "#fff",
      background: "#121214",
      primary: "#0038FF",
    },

    fontSizes: {
      sm: "1rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },
  },
  media: {
    bp1: "(max-width: 480px)",
    bp2: "(max-width: 768px)",
    bp3: "(max-width: 1024px)",
  },
});
