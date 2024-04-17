import styled from '@emotion/styled';
import { spacing } from '../../styles/units';
import { hexToRGBA } from '../../utilities';
import { H1, palette } from '../../styles/theme';
import { LocationChip, RatingChip } from '../Chip';
import { StyledButton } from '../Button/Button';
import { Icon } from '../Icon';
import { Categories } from './Categories';

export const Card = ({ item }) => {
  const priceLocalized = item.price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'EUR',
    useGrouping: false,
  });

  const details = {
    ...item.details,
    adults: item.adults,
    transmission: item.transmission,
    engine: item.engine,
  };

  const categories = Object.keys(details)
    .sort()
    .map(key => {
      return {
        id: key,
        value: details[key],
      };
    });

  console.log('categories', categories);

  const ratingText = `${item.rating}(${item.reviews.length} Reviews)`;

  return (
    <CardContainer>
      <Photo src={item.gallery[0]} />
      <DataBox>
        <TitleBox>
          <TitleRow>
            <Title>
              <H1>{item.name}</H1>
              <H1>{`${priceLocalized}`}</H1>
            </Title>
            <Icon id="heart" />
          </TitleRow>
          <ChipBox>
            <RatingChip text={ratingText} />
            <LocationChip text={item.location} />
          </ChipBox>
        </TitleBox>
        <Description>{item.description}</Description>
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
