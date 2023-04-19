import "./index.scss";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ToastProvider } from "elysium-cloud-ui";

ReactDOM.render(
  <ToastProvider>
    <App />
  </ToastProvider>,
  document.getElementById("root")
);
