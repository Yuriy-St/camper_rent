export const color = {
  white: '255, 255, 255',
  black: '0, 0, 0',
  red: {
    300: '228, 72, 72',
    400: '216, 67, 67',
    500: '209, 40, 40',
  },
  grey: {
    100: '242, 244, 247',
    200: '217, 217, 217',
    600: '71, 84, 103',
    900: '16, 24, 40',
  },
};

export default {
  main: `rgb(${color.grey[900]})`,
  inputs: `rgb(${color.grey[100]})`,
  blockFeatures: `rgb(${color.grey[200]})`,
  rating: 'rgb(255, 197, 49)',
  text: `rgb(${color.grey[600]})`,
  button: {
    surface: `rgb(${color.red[300]})`,
    hoverSurface: `rgb(${color.red[400]})`
  },
  buttonGhost: {
    stroke: `rgba(${color.grey[600]}, 0.2)`,
    hoverStroke: `rgb(${color.red[300]})`
  },
  error: {
    surface: `rgb(${color.red[400]})`,
    onSurface: `rgba(${color.black}, 0.8)`,
  },
};
