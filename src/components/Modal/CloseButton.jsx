import styled from '@emotion/styled';
import { palette, transition } from '../../styles/theme';
import { Icon } from '../Icon';

const { time, effect } = transition;

export const CloseButton = ({ onClick }) => {
  return (
    <ButtonBox onClick={onclick}>
      <Icon id="cross" />
    </ButtonBox>
  );
};

/* --------------------------------- Styles --------------------------------- */
const ButtonBox = styled.button({
  label: 'CloseButton',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: 0,
  right: 0,
  width: 32,
  height: 32,
  backgroundColor: 'transparent',
  cursor: 'pointer',

  '& svg': {
    fill: palette.main,
    transition: `transform 100ms ${effect},
      fill 100ms ${effect}`,
  },

  '&:hover svg': {
    transform: 'rotate(90deg) scale(1.2, 1.2)',
    fill: palette.button.hoverSurface,
  },

  '&:active svg': {
    transitionProperty: 'none',
    transform: 'scale(1, 1)',
  },
});
