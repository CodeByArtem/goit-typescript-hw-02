import React from "react";
import ReactDOM from "react-dom/client";
import ReactModal from "react-modal";

import "modern-normalize";
import "./components/css/index.css";

import App from "./App.js";

// Set the root app element for accessibility
ReactModal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
        <App /> {" "}
  </React.StrictMode>
);
