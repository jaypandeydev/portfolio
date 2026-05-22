import React from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// react-snap prerenders static HTML at build time; hydrate it when present.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
