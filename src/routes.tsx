import { Navigate, Routes, Route, Outlet } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import ProductsPage from './containers/products-page';
import HomePage from './containers/home-page';

export default function Router() {
  const PublicRoute = () => {
    return (
      <RootLayout>
        <Outlet />
      </RootLayout>
    );
  };

  const PrivateRoute = () => {
    return <Navigate to="/" />;
  };

  const appRoute = [
    {
      path: '/',
      element: <HomePage />,
      isPrivate: false,
    },
    {
      path: '/products',
      element: <ProductsPage />,
      isPrivate: false,
    },
  ];
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        {appRoute.map((item, key) => {
          return item.isPrivate && <Route path={item.path} element={item.element} key={key} />;
        })}
      </Route>
      <Route element={<PublicRoute />}>
        {appRoute.map((item, key) => {
          return !item.isPrivate && <Route path={item.path} element={item.element} key={key} />;
        })}
      </Route>
      {/* <Route
        path="*"
        element={
          <LogoOnlyLayout>
            <NotFound />
          </LogoOnlyLayout>
        }
      /> */}
    </Routes>
  );
}
