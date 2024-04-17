import { useDispatch } from 'react-redux';
import { Container } from '../components/Container';
import { useEffect } from 'react';
import { fetchAllCampers } from '../redux/vehicle/operations';
import { CamperList } from '../components/CamperList/CamperList';

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCampers({ page: 1, limit: 15 }));
  }, [dispatch]);

  return (
    <Container>
      <CamperList />
    </Container>
  );
};

export default Catalog;
