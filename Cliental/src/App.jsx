import { Route, Routes } from "react-router-dom";
import * as ROUTES from "./common/routes";
import { lazy, Suspense } from "react";
import React from "react";
import { FAQ_Object } from "./common/constants";

import Layout from "./components/Layout/Layout";
import ScrollToAnchor from "./helper/ScrollToAnchor";


const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const FAQ = lazy(() => import("./pages/FAQ/FAQ"));


const App = () => {
  return (
    <>
      <ScrollToAnchor />
      <Layout>
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
            <Route path={ROUTES.FAQ} element={<FAQ data={FAQ_Object} />} />
            <Route path={ROUTES.CONTACTS_PAGE} element={""} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
};

export default App;
