import styled from '@emotion/styled';
import { Card } from '../Card';

export const CamperList = ({ campers }) => {
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
  label: 'CamplerList',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: '32px',
});

const ListItem = styled.li({});
