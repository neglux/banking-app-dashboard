import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import AuthProvider from "./context/auth.context";
import { MantineProvider } from "@mantine/core";
import Notification from "./components/common/Notification";
import { HelmetProvider } from "react-helmet-async";
import { init } from "@sentry/react";

// process.env.NODE_ENV === "production" &&
init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
});

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AuthProvider>
      <MantineProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </MantineProvider>
      <Notification />
    </AuthProvider>
  </StrictMode>
);
