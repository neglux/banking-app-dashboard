import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import AppProvider from "./context/context";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import AuthProvider from "./context/auth.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </AuthProvider>
  </React.StrictMode>
);
