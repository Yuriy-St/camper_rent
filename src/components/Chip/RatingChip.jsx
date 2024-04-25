import { Chip } from './Chip';
import { palette } from '../../styles/theme';

export const RatingChip = ({ text }) => (
  <Chip iconId="star" iconFill={palette.rating} text={text} underline></Chip>
);
