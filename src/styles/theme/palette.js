import { hexToRGBA } from "../../utilities";

export const color = {
  white: '#ffffff',
  black: '#000000',
  red: {
    300: '#E44848',
    400: '#D84343',
    500: '#D12828',
  },
  grey: {
    100: '#F2F4F7',
    200: '#D9D9D9',
    600: '#475467',
    900: '#101828',
  },
  amber: {
    400: '#FFC531'
  }
};

export default {
  main: color.grey[900],
  inputs: color.grey[100],
  blockFeatures: color.grey[200],
  rating: color.amber[400],
  text: color.grey[600],
  button: {
    surface: color.red[300],
    hoverSurface: color.red[400],
    activeSurface: color.red[500],
  },
  buttonGhost: {
    surface: 'transparent',
    stroke: hexToRGBA(color.grey[600], 20),
    hoverStroke: color.red[300],
    activeSurface: hexToRGBA(color.red[400], 10),
  },
  error: {
    surface: hexToRGBA(color.red[400], 30),
    onSurface: color.red[500],
    stroke: color.red[500],
  },
};
