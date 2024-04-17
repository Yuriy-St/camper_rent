import styled from '@emotion/styled';
import { ChipBox } from './Chip';
import { Icon } from '../Icon';
import { TextMdMedium, palette } from '../../styles/theme';
import { spacing } from '../../styles/units';

export const FlatChip = ({ iconId, iconFill = palette.main, label }) => {
  return (
    <FlatChipBox>
      <Icon id={iconId} fill={iconFill}></Icon>
      <TextMdMedium>{label}</TextMdMedium>
    </FlatChipBox>
  );
};

/* --------------------------------- Styles --------------------------------- */

const FlatChipBox = styled(ChipBox)({
  columnGap: spacing.xsmall,
  paddingTop: '12px',
  paddingBottom: '12px',
  paddingRight: '18px',
  paddingLeft: '18px',
  backgroundColor: palette.blockFeatures,
  fontWeight: 500,
  borderRadius: '9999px',
});
