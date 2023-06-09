import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import Root from "./components/root.route";
import Auth from "src/routes/components/auth.route";

import Unavailable from "./components/unavailable.route";
import ErrorBoundary from "./components/error.route";

const Dashboard = lazy(() => import("src/pages/Dashboard"));
const Loan = lazy(() => import("src/pages/Loan"));
const Transfer = lazy(() => import("src/pages/Transfer"));

const Login = lazy(() => import("src/pages/Login"));
const Logout = lazy(() => import("src/pages/Logout"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/loan",
        element: <Loan />,
      },
      {
        path: "/transfer",
        element: <Transfer />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/auth",
        element: <Login />,
      },
      {
        path: "/auth/logout",
        element: <Logout />,
      },
    ],
  },
  {
    path: "/*",
    element: <Unavailable />,
  },
]);
