import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/vehicle/selectors';
import { Card } from '../Card/Card';

export const CamperList = () => {
  const campers = useSelector(selectCampers);

  return (
    <ListBox>
      {campers.map(item => (
        <ListItem key={item.id}>
          <Card item={item}></Card>
        </ListItem>
      ))}
    </ListBox>
  );
};

/* --------------------------------- Styles --------------------------------- */

const ListBox = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '32px',
});

const ListItem = styled.li({});
