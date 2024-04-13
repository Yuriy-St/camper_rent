import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { spacing } from '../../styles/units';

export const Button = ({ type = 'button', children }) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};

/* --------------------------------- Styles --------------------------------- */

const buttonText = {
  color: theme.palette.white[100],
  fontFamily: 'Manrope, sans-serif;',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '142.857%',
};

const StyledButton = styled.button(({ padX, padY, width, height }) => ({
  label: 'Button',
  ...buttonText,
  height: height || '44px',
  backgroundColor: theme.palette.primary.accent,
  padding: `${padY || '14px'} ${padX || '44px'}`,
  borderRadius: spacing.small,
}));
