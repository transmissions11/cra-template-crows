/* istanbul ignore file */
import React from "react";
import firebase from "../api/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

export const AuthContext = React.createContext(undefined);

export function AuthProvider({ children }) {
  const [user, loading] = useAuthState(firebase.auth());

  const signUp = (email, password) =>
    firebase.auth().createUserWithEmailAndPassword(email, password);

  const signIn = (email, password) =>
    firebase.auth().signInWithEmailAndPassword(email, password);

  const signOut = () => firebase.auth().signOut();

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }

  return context;
}
