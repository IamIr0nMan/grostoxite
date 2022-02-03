import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import Login from "./pages/login";
import SinUp from "./pages/signUp";
import Form from "./pages/Form";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
    <Login />
        {/* <Form /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);