import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../components/Container';
import { useEffect, useState } from 'react';
import { fetchCampers } from '../redux/vehicle/operations';
import { CamperList } from '../components/CamperList/CamperList';
import {
  selectCampers,
  selectCampersError,
  selectCampersStatus,
  selectNextPage,
} from '../redux/vehicle/selectors';
import { STATUS } from '../redux/constants';
import styled from '@emotion/styled';
import { ButtonGhost } from '../components/Button';
import { Loader } from '../components/Loader';
import { Error } from '../components/Error';
import { resetCampers } from '../redux/vehicle/slice';
import { useFetcher } from 'react-router-dom';
import { Modal } from '../components/Modal/Modal';

const Catalog = () => {
  const dispatch = useDispatch();

  const campers = useSelector(selectCampers);
  const nextPage = useSelector(selectNextPage);
  const status = useSelector(selectCampersStatus);
  const error = useSelector(selectCampersError);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    console.log('Catalog useEffect');
    dispatch(fetchCampers({ page: nextPage }));

    return () => {
      dispatch(resetCampers());
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: scrollPosition });
  }, [campers]);

  const handleLoadMore = () => {
    dispatch(fetchCampers({ page: nextPage }));
    setScrollPosition(window.scrollY);
  };

  if (status === STATUS.pending) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  if (status === STATUS.failed) {
    return (
      <Container>
        <Error message={error.message} />
      </Container>
    );
  }

  return (
    <Container>
      <DataBox>
        <CamperList campers={campers} />
        {nextPage && (
          <ButtonGhost handleClick={handleLoadMore}>Load more</ButtonGhost>
        )}
      </DataBox>
      <Modal isOpen />
    </Container>
  );
};

export default Catalog;

/* --------------------------------- Styles --------------------------------- */

const DataBox = styled.div({
  label: 'DataBox',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: 50,
});
