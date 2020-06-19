import React from "react";

import loadable from "@loadable/component";

import FullPageSpinner from "./shared/FullPageSpinner";

import { useAuth } from "../context/AuthContext";

const AuthenticationPage = loadable(
  () => import(/* webpackPrefetch: true */ "./pages/AuthenticationPage"),
  {
    fallback: <FullPageSpinner />,
  }
);

const AuthenticatedApp = loadable(
  () => import(/* webpackPrefetch: true */ "./AuthenticatedApp"),
  {
    fallback: <FullPageSpinner />,
  }
);

export default function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return <FullPageSpinner />;
  }

  if (!user) {
    return <AuthenticationPage />;
  }

  return <AuthenticatedApp />;
}
