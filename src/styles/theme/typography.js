import styled from "@emotion/styled";
import palette, { color } from "./palette";

export const typography = {
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
};

/* ------------------------------- Text styles ------------------------------ */

export const H1 = styled.p({
  color: palette.main,
  fontSize: '24px',
  fontWeight: 600,
  lineHeight: 1.25
});

export const H2 = styled.p({
  color: palette.main,
  fontSize: '20px',
  fontWeight: 600,
  lineHeight: 1.2
});

export const TextButton = styled.span({
  color: color.white,
  fontWeight: 500,
  letterSpacing: '-0.88px'
});

export const TextMdMedium = styled.span({
  color: palette.main,
  fontWeight: 500,
  lineHeight: 1.25,
});

export const TextLgMedium = styled.p({
  color: palette.main,
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: 1.33,
});
