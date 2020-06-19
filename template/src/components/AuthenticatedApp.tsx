import React from "react";

// Remove this ignore when react-router 6.0.0 comes out (which is made with Typescript)
// @ts-ignore
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
