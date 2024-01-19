import { Route, Routes } from "react-router-dom";
import * as ROUTES from "./common/routes";
import { lazy } from "react";


import Layout from "./components/Layout/Layout";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
          <Route path={ROUTES.HOME_PAGE_Test} element={<HomePage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
