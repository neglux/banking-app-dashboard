import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import AppProvider from "./context/context";
import AuthProvider from "./context/auth.context";
import { ToastContainer } from "react-toastify";
import { MantineProvider } from "@mantine/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AppProvider>
        <MantineProvider>
          <RouterProvider router={router} />
        </MantineProvider>
        <ToastContainer position="bottom-right" autoClose={1500} />
      </AppProvider>
    </AuthProvider>
  </React.StrictMode>
);
