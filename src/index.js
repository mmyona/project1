import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { MainHeader } from "./components/Header3";
import { Footer } from "./components/Footer";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainHeader />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
