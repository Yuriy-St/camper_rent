import { useSelector } from 'react-redux';
import { Container } from '../components/Container';
import { CamperList } from '../components/CamperList/CamperList';
import { selectFavorites } from '../redux/favorites/selectors';
import { TextMdMedium } from '../styles/theme';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

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
