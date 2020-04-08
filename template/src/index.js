import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import * as serviceWorker from "./serviceWorker";

import "./index.css";

import PWAPrompt from "react-ios-pwa-prompt";

import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";

ReactDOM.render(
  <>
    <PWAPrompt
      timesToShow={10}
      permanentlyHideOnDismiss={false}
      copyTitle="Add YOUR_APP to Home Screen"
      copyBody="YOUR_APP works best when added to your homescreen. Without doing this, you may have a degraded experience."
      copyClosePrompt="Close"
    />
    <ThemeProvider theme={theme}>
      <CSSReset />
      <App />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
