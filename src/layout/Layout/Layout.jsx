import styled from '@emotion/styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { spacing } from '../../styles/units';
import { Loader } from '../../components/Loader/Loader';

export const Layout = () => (
  <>
    <Header />
    <Content>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Content>
  </>
);

/* --------------------------------- Styles --------------------------------- */

const Content = styled.main({
  position: 'relative',
  top: spacing.headerHeight,
  paddingTop: spacing.large,
  paddingBottom: spacing.large,
});
