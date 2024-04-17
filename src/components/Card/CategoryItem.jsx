import styled from '@emotion/styled';
import { FlatChip } from '../Chip';
import { stringToSentenceCase } from '../../utilities';

const iconMap = {
  adults: {
    id: 'adults',
    label: 'adults',
  },
  airconditioner: {
    id: 'air-conditioner',
    label: 'Air conditioner',
  },
  bathroom: {
    id: 'bath',
    label: 'Bath',
    isBool: true,
  },
  beds: {
    id: 'bed',
    label: 'beds',
  },
  cd: {
    id: 'cd',
    label: 'CD',
    isBool: true,
  },
  engine: {
    id: 'petrol',
    isBool: true,
  },
  freezer: {
    id: 'freezer',
    label: 'Freezer',
    isBool: true,
  },
  gas: {
    id: 'gas',
    label: 'Gas',
  },
  hob: {
    id: 'hob',
    label: 'hob',
  },
  kitchen: {
    id: 'kitchen',
    label: 'kitchen',
    isBool: true,
  },
  microwave: {
    id: 'microwave',
    label: 'Microwave',
    isBool: true,
  },
  radio: {
    id: 'radio',
    label: 'Radio',
    isBool: true,
  },
  shower: {
    id: 'shower',
    label: 'Shower',
    isBool: true,
  },
  toilet: {
    id: 'toilet-paper',
    label: 'Toilet',
    isBool: true,
  },
  transmission: {
    id: 'transmission',
    isBool: true,
  },
  tv: {
    id: 'tv',
    label: 'TV',
    isBool: true,
  },
  water: {
    id: 'water',
    label: 'Water',
  },
};

export const CategoryItem = ({ category, value }) => {
  let { id, label, isBool } = iconMap[category.toLowerCase()];

  if (isBool && !value) {
    return;
  }

  if (!label) {
    label = stringToSentenceCase(value);
  }

  const textValue = isBool ? label : `${value} ${label}`;

  return (
    <Item key={category}>
      <FlatChip iconId={id} label={textValue} />
    </Item>
  );
};

/* --------------------------------- Styles --------------------------------- */

const Item = styled.li({});
