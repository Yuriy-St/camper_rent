import styled from '@emotion/styled';
import { Container } from '../../components/Container';
import { routes } from '../../routes';
import { Link, NavLink } from 'react-router-dom';
import { color } from '../../styles/theme';
import { fontSize, spacing } from '../../styles/units';
import { hexToRGBA } from '../../utilities';

export const Header = () => {
  const menu = [
    { id: 'catalog', name: 'Catalog', path: routes.CATALOG },
    { id: 'favorites', name: 'Favorites', path: routes.FAVORITES },
  ];

  return (
    <HeaderStyled>
      <Container>
        <FlexBox>
          <Link to={routes.HOME}>CamperRent</Link>
          <Navigation>
            <Menu>
              {menu.map(({ id, name, path }) => (
                <MenuItem key={id}>
                  <MenuLink to={path}>{name}</MenuLink>
                </MenuItem>
              ))}
            </Menu>
          </Navigation>
        </FlexBox>
      </Container>
    </HeaderStyled>
  );
};

/* --------------------------------- Styles --------------------------------- */

const HeaderStyled = styled.header({
  label: 'Header',
  backgroundColor: color.grey[600],
  fontSize: fontSize.xl,
  color: hexToRGBA(color.white, 70),
  display: 'flex',
  alignItems: 'center',
  paddingTop: spacing.medium,
  paddingBottom: spacing.medium,
});

const FlexBox = styled.div({
  label: 'FlexBox',
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
});

const Navigation = styled.nav({});

const Menu = styled.ul({
  display: 'flex',
  columnGap: spacing.xlarge,
});

const MenuItem = styled.li({});

const MenuLink = styled(NavLink)({
  '&.active': {
    color: color.red[300],
  },
});
