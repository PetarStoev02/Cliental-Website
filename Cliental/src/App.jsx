import {Route, Routes} from 'react-router-dom';
import * as ROUTES from './common/routes';
import {lazy} from 'react';
import React from 'react';

import Layout from './components/Layout/Layout';
import NavBar from './components/NavBar/NavBar';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

const App = () => {
  return (
    <>
      <NavBar />
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
