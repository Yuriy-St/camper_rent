import styled from '@emotion/styled';
import { Card } from '../Card';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';

export const CamperList = ({ campers }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState({});

  return (
    <>
      <ListBox>
        {campers.map(item => (
          <ListItem key={item.id}>
            <Card item={item}></Card>
          </ListItem>
        ))}
      </ListBox>

      {/* <Modal isOpen={isOpen} item={item} /> */}
    </>
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
