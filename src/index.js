import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import AuthProvider from "./context/auth.context";
import { MantineProvider } from "@mantine/core";
import Notification from "./components/Notification";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
      <Notification />
    </AuthProvider>
  </React.StrictMode>
);
