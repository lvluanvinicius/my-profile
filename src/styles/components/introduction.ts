import { styled } from "..";

export const IntroductionContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem 2rem",
});

export const IntroductionInfo = styled("div", {
  color: "$white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 8,

  h1: {
    fontSize: "$2xl",
    marginTop: 10,
  },

  p: {
    width: "60%",
    textAlign: "center",
    fontSize: "$md",
  },

  a: {
    color: "inherit",
    textDecoration: "none",
    border: "2px solid $primary",
    padding: "8px 4rem",
    borderRadius: 4,
  },

  "@bp2": {
    p: {
      width: "100%",
    },
  },
});
