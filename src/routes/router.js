import { createBrowserRouter } from "react-router-dom";
import Root from "./components/root";
import Login from "../pages/Login";
import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Loan = lazy(() => import("../pages/Loan"));
const Transfer = lazy(() => import("../pages/Transfer"));

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
]);
