import styled from '@emotion/styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { spacing } from '../../styles/units';

export const Layout = () => (
  <>
    <Header />
    <Content>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Content>
  </>
);

/* --------------------------------- Styles --------------------------------- */

const Content = styled.main({
  paddingTop: spacing.large,
  paddingBottom: spacing.large,
});
