import styled from '@emotion/styled';
import { color, palette } from '../../styles/theme';

export const Button = ({ handleClick, children }) => {
  return (
    <StyledButton type="button" onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

export const ButtonGhost = ({ handleClick, children }) => {
  return (
    <StyledButtonGhost type="button" onClick={handleClick}>
      {children}
    </StyledButtonGhost>
  );
};

/* --------------------------------- Styles --------------------------------- */

const buttonText = {
  color: color.white,
  fontWeight: 500,
  letterSpacing: '-0.5%',
};

export const StyledButton = styled.button({
  label: 'Button',
  ...buttonText,
  backgroundColor: palette.button.surface,
  padding: '16px 40px',
  borderRadius: '9999px',
  '&:hover': {
    backgroundColor: palette.button.hoverSurface,
  },
  '&:active': {
    backgroundColor: palette.button.activeSurface,
  },
});

export const StyledButtonGhost = styled.button({
  ...buttonText,
  color: palette.main,
  backgroundColor: palette.buttonGhost.surface,
  padding: '16px 32px',
  border: `solid 1px ${palette.buttonGhost.stroke}`,
  borderRadius: '9999px',
  '&:hover': {
    borderColor: palette.buttonGhost.hoverStroke,
  },
  '&:active': {
    backgroundColor: palette.buttonGhost.activeSurface,
  },
});
