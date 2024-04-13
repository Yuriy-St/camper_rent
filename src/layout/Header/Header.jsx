import styled from '@emotion/styled';
import { Container } from '../../components/Container';
import { routes } from '../../routes';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Box>
          <Link to={routes.HOME}>Logo</Link>
          <Navigation>
            <Menu>
              {menu.map(({ id, name, path }) => (
                <MenuItem key={id}>
                  <NavLink to={path}>{name}</NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Navigation>
        </Box>
      </Container>
    </HeaderStyled>
  );
};

/* -------------------------------- Variables ------------------------------- */

const menu = [
  { id: 'catalog', name: 'Catalog', path: routes.CATALOG },
  { id: 'favorites', name: 'Favorites', path: routes.FAVORITES },
];

/* --------------------------------- Styles --------------------------------- */

const HeaderStyled = styled.header({
  label: 'Header',
  backgroundColor: '#5454f2',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
});

const Box = styled.div();

const Logo = styled.div({
  fontSize: '1.5em',
});

const Navigation = styled.nav({
  fontSize: '1.2em',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});

const Menu = styled.ul({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});

const MenuItem = styled.li({});
