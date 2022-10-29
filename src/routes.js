import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

const routes = [
  {
    path: "/",
    guard: PublicRoute,
    element: React.lazy(() => import("./Views/SignIn.js")),
  },
  {
    path: "/home",
    guard: PrivateRoute,
    element: React.lazy(() => import("./Views/MainViews.js")),
  },
  {
    path: "/*",
    element: () => <Navigate replace to="/404" />,
  },
];

const RenderRoutes = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map((route, i) => {
          const RouteElement = route.element;
          const RouteLayout = route.layout || React.Fragment;
          const Guard = route.guard || React.Fragment;

          return (
            <Route
              key={i}
              path={route.path}
              element={
                <Guard>
                  <RouteLayout>
                    <RouteElement />
                  </RouteLayout>
                </Guard>
              }
            ></Route>
          );
        })}
      </Routes>
    </React.Suspense>
  );
};

export default RenderRoutes;
