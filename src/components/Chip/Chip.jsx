import styled from '@emotion/styled';
import { Icon } from '../Icon';
import { spacing } from '../../styles/units';
import { palette } from '../../styles/theme';

export const Chip = ({ iconId, iconFill = palette.main, text }) => (
  <ChipBox>
    <Icon id={iconId} fillColor={iconFill}></Icon>
    <p>{text}</p>
  </ChipBox>
);

/* --------------------------------- Styles --------------------------------- */

export const ChipBox = styled.div({
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  columnGap: spacing.xxsmall,
  color: palette.main,
});
