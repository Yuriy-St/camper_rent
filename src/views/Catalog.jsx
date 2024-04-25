import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../components/Container';
import { useEffect, useState } from 'react';
import { fetchAllCampers } from '../redux/vehicle/operations';
import { CamperList } from '../components/CamperList/CamperList';
import { selectFavorites } from '../redux/favorites/selectors';
import {
  selectCampers,
  selectCampersError,
  selectCampersStatus,
} from '../redux/vehicle/selectors';
import { PAGINATION } from '../redux/constants';

const Catalog = () => {
  const dispatch = useDispatch();

  const campers = useSelector(selectCampers);
  const status = useSelector(selectCampersStatus);
  const error = useSelector(selectCampersError);

  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log('Catalog useEffect');
    dispatch(fetchAllCampers({ page, limit: PAGINATION.limit }));
  }, [dispatch]);

  const favorites = useSelector(selectFavorites);

  return (
    <Container>
      <CamperList campers={campers} status={status} error={error} />
    </Container>
  );
};

export default Catalog;
