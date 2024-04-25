import styled from '@emotion/styled';
import { palette } from '../../styles/theme';
import { Icon } from '../Icon';

export const IconButton = ({ iconId, selected, handleClick }) => {
  return (
    <IconBut selected={selected} onClick={handleClick}>
      <Icon id={iconId} />
    </IconBut>
  );
};

/* --------------------------------- Styles --------------------------------- */

const IconBut = styled.button(
  {
    display: 'flex',
    padding: 0,
    background: 'transparent',
  },
  ({ selected }) => ({
    '& svg': {
      fill: selected ? palette.button.surface : 'transparent',
      stroke: selected ? palette.button.surface : palette.main,
    },
  })
);
