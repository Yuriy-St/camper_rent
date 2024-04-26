import styled from '@emotion/styled';
import { palette } from '../../styles/theme';
import { Backdrop } from './Backdrop';
import { useEffect } from 'react';
import { CloseButton } from './CloseButton';
import { LocationChip, RatingChip } from '../Chip';
import { localizePrice } from '../../utilities/camperHelper';

export const Modal = ({ isOpen = false, item = {}, onClose }) => {
  if (!Object.keys(item).length) {
    onClose();
    return;
  }

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

  const priceLocalized = localizePrice(price);

  return (
    <Backdrop isOpen={isOpen}>
      <ModalWindow>
        <ModalContainer>
          <ModalHeader>
            <ChipBox>
              <RatingChip text={ratingText} />
              <LocationChip text={location} />
            </ChipBox>
            <CloseButton />
          </ModalHeader>
          <ModalContent></ModalContent>
        </ModalContainer>
      </ModalWindow>
    </Backdrop>
  );
};

/* --------------------------------- Styles --------------------------------- */

const ModalWindow = styled.div({
  label: 'Modal',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 982,
  height: 720,
  backgroundColor: palette.background,
  borderRadius: 20,
  overflow: 'hidden',
  zIndex: 9997,
});

const ModalContainer = styled.div({
  label: 'ModalContainer',
  height: '100%',
  overflowY: 'scroll',
  padding: 40,
  '&::-webkit-scrollbar': {
    width: 8,
  },
});

const ModalHeader = styled.div({
  label: 'ModalHeader',
  position: 'relative',
});

const ChipBox = styled.div({
  display: 'flex',
  columnGap: '24px',
});

const ModalContent = styled.div({
  label: 'ModalContent',
});
