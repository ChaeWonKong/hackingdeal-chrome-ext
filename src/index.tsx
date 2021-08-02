import React from "react";
import { render } from "react-dom";

import { GlobalStyles } from "@/GlobalStyles";
import { EntryRoute } from "@/routes";

const rootElement = document.getElementById("wrap");

render(
  <React.Fragment>
    <GlobalStyles />
    <EntryRoute />
  </React.Fragment>,
  rootElement
);
