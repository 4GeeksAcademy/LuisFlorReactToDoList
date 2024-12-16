import { routeConfig } from "./routeConfig";

import { Routes, Route } from "react-router";
export const App = () => {
  return (
    <>
      <Routes>
        {routeConfig.map((route) => {
          return <Route path={route.path} element={route.page} />;
        })}
      </Routes>
    </>
  );
};
