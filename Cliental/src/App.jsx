import { Route, Routes } from "react-router-dom";
import * as ROUTES from "./common/routes";
import { lazy, Suspense } from "react";
import React from "react";

import Layout from "./components/Layout/Layout";
import NavBar from "./components/NavBar/NavBar";
import ScrollToAnchor from "./helper/ScrollToAnchor";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

const App = () => {
  return (
    <>
      <ScrollToAnchor />
      <Layout>
        <NavBar />
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
            <Route path={ROUTES.PORTFOLIO_PAGE} element={""} />
            <Route path={ROUTES.CONTACTS_PAGE} element={""} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
};

export default App;
