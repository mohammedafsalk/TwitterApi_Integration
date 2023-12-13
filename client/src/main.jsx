import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RefreshProvider } from "./Context/RefreshContext.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RefreshProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RefreshProvider>
  </React.StrictMode>
);
