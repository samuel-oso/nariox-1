import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";

export const transfersTheme: MantineThemeOverride = {
  fontFamily: "IBM Plex Sans, sans-serif",
  headings: { fontFamily: "IBM Plex Sans, sans-serif" },
  breakpoints: {
    md: 767,
    lg: 1200,
  },
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider theme={transfersTheme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
