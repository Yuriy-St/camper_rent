import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/favorites/slice';
import { selectFavorites } from '../../redux/favorites/selectors';

import { spacing } from '../../styles/units';
import { hexToRGBA } from '../../utilities';
import { H1, palette } from '../../styles/theme';
import { LocationChip, RatingChip } from '../Chip';
import { StyledButton } from '../Button';
import { Categories } from './Categories';
import { IconButton } from '../IconButton';
import { getRatingText, localizePrice } from '../../utilities/camperHelper';

const limitedList = [
  'adults',
  'transmission',
  'engine',
  'kitchen',
  'bed',
  'airConditioner',
];

export const Card = ({ item, openModal }) => {
  const dispatch = useDispatch();

  const {
    id,
    name,
    price,
    rating,
    location,
    description,
    details,
    adults,
    transmission,
    engine,
    gallery,
    reviews,
  } = item;

  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some(item => item.id === id);

  const toggleFavorite = () => {
    isFavorite
      ? dispatch(removeFromFavorites(item))
      : dispatch(addToFavorites(item));
  };

  const priceLocalized = localizePrice(price);

  const camperDetails = {
    ...details,
    adults: adults,
    transmission: transmission,
    engine: engine,
  };

  const categories = Object.keys(camperDetails)
    .sort()
    .reduce((acc, key) => {
      if (limitedList.includes(key)) {
        acc.push({
          id: key,
          value: camperDetails[key],
        });
      }
      return acc;
    }, []);

  const handleOpenModal = () => {};

  const ratingText = getRatingText(rating, reviews.length);

  return (
    <CardContainer>
      <Photo src={gallery[0]} />
      <DataBox>
        <TitleBox>
          <TitleRow>
            <Title>
              <H1>{name}</H1>
              <H1>{`${priceLocalized}`}</H1>
            </Title>
            <IconButton
              iconId="heart"
              selected={isFavorite}
              handleClick={toggleFavorite}
            />
          </TitleRow>
          <ChipBox>
            <RatingChip text={ratingText} />
            <LocationChip text={location} />
          </ChipBox>
        </TitleBox>
        <Description>{description}</Description>
        <Categories items={categories} />
        <OpenCardButton>Show more</OpenCardButton>
      </DataBox>
    </CardContainer>
  );
};

/* --------------------------------- Styles --------------------------------- */

const CardContainer = styled.div({
  label: 'Card',
  display: 'flex',
  columnGap: spacing.gutter,
  width: '888px',
  border: `1px solid ${hexToRGBA(palette.main, 20)}`,
  borderRadius: '20px',
  padding: '24px',
});

const Photo = styled.img({
  width: '290px',
  height: '310px',
  borderRadius: '10px',
});

const DataBox = styled.div({
  label: 'DataBox',
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
  width: '100%',
  rowGap: '24px',
});

const TitleBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  rowGap: spacing.xsmall,
});

const TitleRow = styled.div({
  display: 'flex',
  alignItems: 'center',
  columnGap: '11px',
});

const Title = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

const ChipBox = styled.div({
  display: 'flex',
  columnGap: '24px',
});

const Description = styled.p({
  maxWidth: '100%',
  overflow: 'hidden',
  textWrap: 'nowrap',
  textOverflow: 'ellipsis',
});

const OpenCardButton = styled(StyledButton)({
  alignSelf: 'flex-start',
});
