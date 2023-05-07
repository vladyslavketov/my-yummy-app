import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main style={{ flexGrow: '1', zIndex: '1' }}>
        {/* <Suspense fallback={<Loading />}> */}
        <Suspense fallback={'Is Loading...'}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;