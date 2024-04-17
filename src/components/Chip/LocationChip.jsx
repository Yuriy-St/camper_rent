import { Chip } from './Chip';
import { palette } from '../../styles/theme';

export const LocationChip = ({ text }) => (
  <Chip iconId="map-pin" text={text}></Chip>
);
