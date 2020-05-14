import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import loadable from "@loadable/component";

import FullPageSpinner from "./shared/FullPageSpinner";

const MainPage = loadable(
  () =>
    import(/* webpackPrefetch: true */ "./pages/authenticatedPages/MainPage"),
  {
    fallback: <FullPageSpinner />,
  }
);

const AuthenticatedApp = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AuthenticatedApp;
