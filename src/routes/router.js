import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Root from "./components/root";
import Login from "src/pages/Login";
import Logout from "src/pages/Logout";

const Dashboard = lazy(() => import("src/pages/Dashboard"));
const Loan = lazy(() => import("src/pages/Loan"));
const Transfer = lazy(() => import("src/pages/Transfer"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
    element: <Login />,
  },
  {
    path: "/auth/logout",
    element: <Logout />,
  },
]);
