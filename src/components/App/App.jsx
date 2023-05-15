import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { refreshUser } from 'redux/auth/authOperation';

import { themeDark, themeLight } from 'components/common/theme';
import { WelcomePage, RegisterPage, SigninPage, MainPage, CategoriesPage, AddRecipesPage, MyRecipesPage, FavoritePage, ShoppingListPage, SearchPage, RecipePage} from 'pages';
import { PrivateRoute, RestrictedRoute } from 'hooks/useRoute';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import UiKit from 'components/UiKit/UiKit';
import useAuth from 'hooks/useAuth';
import Loading from 'components/Loading/Loading';
import { animateScroll } from 'react-scroll';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
// import { animateScroll } from 'react-scroll';

// const { MainPage } = lazy(() => import('pages'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const [render, setRender] = useState(1);
  const theme = false ? themeDark : themeLight;
  const location = useLocation();

  useEffect(() => {
    animateScroll.scrollToTop();
  }, [location]);

  useEffect(() => {
    if (render) {
      setRender(0);
      return;
    }
    // animateScroll.scrollToTop();
    dispatch(refreshUser());
  }, [dispatch, render, setRender]);

  return isRefreshing ? (
    <Loading />
  ) : (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={ <RestrictedRoute component={WelcomePage} redirectTo="/main" /> }  />
        <Route path="/register" element={ <RestrictedRoute component={RegisterPage} redirectTo="/main" /> }  />
        <Route path="/signin" element={ <RestrictedRoute component={SigninPage} redirectTo="/main" /> }  />

        <Route path="/" element={<SharedLayout />}>
          <Route path="/main" element={<PrivateRoute component={MainPage} redirectTo="/" />} />
          <Route path="/categories/:categoryName" element={<PrivateRoute component={CategoriesPage} redirectTo="/" />} />
          <Route path="/add" element={<PrivateRoute component={AddRecipesPage} redirectTo="/" />} />
          <Route path="/my" element={<PrivateRoute component={MyRecipesPage} redirectTo="/" />} />
          <Route path="/favorite" element={<PrivateRoute component={FavoritePage} redirectTo="/" />} />
          <Route path="/recipe/:recipeId" element={<PrivateRoute component={RecipePage} redirectTo="/" />} />
          <Route path="/shopping-list" element={<PrivateRoute component={ShoppingListPage} redirectTo="/" />} />
          <Route path="/search" element={<PrivateRoute component={SearchPage} redirectTo="/" />} />
          <Route path="/ui" element={<PrivateRoute component={UiKit} redirectTo="/" />} />
          <Route path="/*" element={<PrivateRoute component={NotFoundPage} redirectTo="/" />} />

          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;


//  <Route path="/main" element={<MainPage />} /> 