import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import "./i18n"; // initialize i18next

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AppRoutes />
    </HelmetProvider>
  </React.StrictMode>
);
