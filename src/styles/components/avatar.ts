import { styled } from "..";

export const AvatarContainer = styled("div", {
  border: "4px solid $primary",
  width: 100,
  height: 100,
  borderRadius: 100,

  img: {
    borderRadius: "inherit",
  },
});
