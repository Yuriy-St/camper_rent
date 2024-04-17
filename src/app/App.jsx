import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { routes } from '../routes';

const Homepage = lazy(() => import('../views/Homepage'));
const Catalog = lazy(() => import('../views/Catalog'));
const Favorites = lazy(() => import('../views/Favorites'));

export default function App() {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path={routes.CATALOG} element={<Catalog />} />
        <Route path={routes.FAVORITES} element={<Favorites />} />
        <Route path="*" element={<Navigate to={routes.HOME} replace />} />
      </Route>
    </Routes>
  );
}
