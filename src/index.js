import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import AuthProvider from "./context/auth.context";
import { MantineProvider } from "@mantine/core";
import Notification from "./components/Notification";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AuthProvider>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
      <Notification />
    </AuthProvider>
  </StrictMode>
);
