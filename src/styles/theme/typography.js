import styled from '@emotion/styled';
import palette, { color } from './palette';

export const fontFamily =
  "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif";

export const lineHeight = {
  root: 1.5,
  lg: 1.33,
  medium: 1.25,
  small: 1.2,
};

/* ------------------------------- Text styles ------------------------------ */

export const H1 = styled.p({
  color: palette.main,
  fontSize: '24px',
  fontWeight: 600,
  lineHeight: lineHeight.medium,
});

export const H2 = styled.p({
  color: palette.main,
  fontSize: '20px',
  fontWeight: 600,
  lineHeight: lineHeight.small,
});

export const TextButton = styled.span({
  color: color.white,
  fontWeight: 500,
  letterSpacing: '-0.88px',
});

export const TextMdMedium = styled.span({
  color: palette.main,
  fontWeight: 500,
  lineHeight: lineHeight.medium,
});

export const TextLgMedium = styled.p({
  color: palette.main,
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: lineHeight.lg,
});
