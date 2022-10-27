import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";
import { ThemeContextProvider } from "./context/ThemeContext/ThemeContext";
import AuthContextProvider from "./context/AuthContext/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <AuthContextProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </AuthContextProvider>
  // </React.StrictMode>
);
