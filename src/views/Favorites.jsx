import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../components/Container';
import { useEffect } from 'react';
import { fetchAllCampers } from '../redux/vehicle/operations';
import { CamperList } from '../components/CamperList/CamperList';
import { selectFavorites } from '../redux/favorites/selectors';
import { TextMdMedium } from '../styles/theme';

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    console.log('Favorites useEffect');
    dispatch(fetchAllCampers({ page: 1, limit: 4 }));
  }, [dispatch]);

  return (
    <Container>
      {favorites?.length ? (
        <CamperList campers={favorites} />
      ) : (
        <TextMdMedium>You still don't have favorites 🤷‍♂️</TextMdMedium>
      )}
    </Container>
  );
};

export default Favorites;
