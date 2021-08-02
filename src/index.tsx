import React from "react";
import { render } from "react-dom";
import App from "@/App";
import { GlobalStyles } from "@/GlobalStyles";

const rootElement = document.getElementById("wrap");

render(
  <React.Fragment>
    <GlobalStyles />
    <App />
  </React.Fragment>,
  rootElement
);
