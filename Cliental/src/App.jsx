import React from "react";
import { Route, Routes } from "react-router-dom";
import * as ROUTES from "./common/routes";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout/Layout";
import ScrollToAnchor from "./helper/ScrollToAnchor";
import PrivacyPlicy from "./pages/PrivacyPolicy/PrivacyPlicy";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
PrivacyPlicy;

const App = () => {
  return (
    <>
      <ScrollToAnchor />
      <Layout>
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
            <Route
              path={ROUTES.PRIVACY_POLICIES_PAGE}
              element={<PrivacyPlicy />}
            />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
};

export default App;
