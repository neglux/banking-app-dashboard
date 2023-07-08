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
import { QueryClient, QueryClientProvider } from "react-query";

process.env.NODE_ENV === "production" &&
  init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
  });
const queryClient = new QueryClient();

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MantineProvider>
          <HelmetProvider>
            <RouterProvider router={router} />
          </HelmetProvider>
        </MantineProvider>
        <Notification />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
