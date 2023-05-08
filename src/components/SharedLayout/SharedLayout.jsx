import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Main } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Main>
        {/* <Suspense fallback={<Loading />}> */}
        <Suspense fallback={'Is Loading...'}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </>
  );
};

export default SharedLayout;