import { spacing } from './units';

const white = '#FFFFFF';
const black = '#121417';

const palette = {
  white: {
    100: white,
    80: 'rgba(255, 255, 255, 0.80)',
  },
  black: {
    100: black,
  },
  primary: {
    accent: '#3470FF',
    hover: '#0B44CD',
    contrastText: white,
  },
  error: {
    main: '#A51C30',
    light: '#A7333F',
    contrastText: white,
  },
  grey: {
    100: '#EAEAEA',
    200: '#C9C5C5',
    300: '#888',
    400: '#666',
    500: '#F9F9F9',
  },
  text: {
    light: '#8A8A89',
    dark: '#363535',
  },
};

const shadows = {
  0: 'none',
  1: '0px 5px 10px rgba(0, 0, 0, 0.12)',
  2: '0px 8px 30px rgba(0, 0, 0, 0.24)',
};

const typography = {
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
};

const shape = {
  borderRadius: spacing['xxsmall'],
};

export const theme = {
  palette,
  shadows,
  typography,
  shape,
};
