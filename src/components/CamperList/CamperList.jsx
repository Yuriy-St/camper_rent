import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import {
  selectCampers,
  selectCampersError,
  selectCampersStatus,
} from '../../redux/vehicle/selectors';
import { Card } from '../Card';
import { STATUS } from '../../redux/constants';
import { Loader } from '../Loader';

export const CamperList = ({ campers, status, error }) => {
  if (status === STATUS.pending) {
    return <Loader />;
  }

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
