import { Navigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
// import { lazy } from 'react';
// const ErrorNotFoundPage = lazy(() => import('page/ErrorNotFoundPage'));

export const PrivateRoute = ({ component: Component, redirectTo}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isRefreshing && !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

export const RestrictedRoute = ({ component: Component, redirectTo}) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

// export const ErrorRoute = () => {
//   const { isLoggedIn } = useAuth();
//   const ErroeElem = isLoggedIn ? <ErrorNotFoundPage /> : <Navigate to="/" replace />;

//   return ErroeElem;
// };