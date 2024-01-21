import {Route, Routes} from 'react-router-dom';
import {useEffect, useState} from 'react';
import * as ROUTES from './common/routes';
import {lazy, Suspense} from 'react';
import React from 'react';

import Layout from './components/Layout/Layout';
import NavBar from './components/NavBar/NavBar';
import PreLoader from './components/PreLoader/PreLoader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

const App = () => {
  // loader state
  const [isLoading, setIsLoading] = useState(true);

  // Let create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    };

    fakeDataFetch();
  }, []);

  return isLoading ? (
    <PreLoader />
  ) : (
    <>
      <NavBar />
      <Layout>
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
            <Route path={ROUTES.PORTFOLIO_PAGE} element={''} />
            <Route path={ROUTES.CONTACTS_PAGE} element={''} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
};

export default App;
