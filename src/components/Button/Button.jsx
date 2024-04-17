import styled from '@emotion/styled';
import { color, palette } from '../../styles/theme';

export const Button = ({ children }) => {
  return <StyledButton type="button">{children}</StyledButton>;
};

/* --------------------------------- Styles --------------------------------- */

const buttonText = {
  color: color.white,
  fontWeight: 500,
  letterSpacing: '-0.5%',
};

export const StyledButton = styled.button(
  ({ padX = '40px', padY = '16px' }) => ({
    label: 'Button',
    ...buttonText,
    backgroundColor: palette.button.surface,
    padding: `${padY} ${padX}`,
    borderRadius: '9999px',
    '&:hover': {
      backgroundColor: palette.button.hoverSurface,
    },
    '&:active': {
      backgroundColor: palette.button.activeSurface,
    },
  })
);
