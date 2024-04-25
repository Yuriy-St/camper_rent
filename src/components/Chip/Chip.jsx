import styled from '@emotion/styled';
import { Icon } from '../Icon';
import { spacing } from '../../styles/units';
import { palette } from '../../styles/theme';

export const Chip = ({ iconId, iconFill = palette.main, text, underline }) => (
  <ChipBox>
    <Icon id={iconId} fillColor={iconFill}></Icon>
    <Label underline={underline}>{text}</Label>
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

const Label = styled.p(props => ({
  borderBottom: props.underline && '1px solid',
}));
