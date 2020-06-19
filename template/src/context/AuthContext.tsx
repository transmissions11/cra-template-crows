/* istanbul ignore file */
import React from "react";
import firebase from "../api/firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import { User } from "firebase";

type AuthObject =
  | {
      user: User | undefined;
      loading: boolean;
      signUp: (
        email: string,
        password: string
      ) => Promise<firebase.auth.UserCredential>;
      signIn: (
        email: string,
        password: string
      ) => Promise<firebase.auth.UserCredential>;
      signOut: () => Promise<void>;
    }
  | undefined;

export const AuthContext = React.createContext<AuthObject>(undefined);

interface Props {
  children: JSX.Element;
}

export function AuthProvider(props: Props) {
  const [user, loading] = useAuthState(firebase.auth());

  const signUp = (email: string, password: string) =>
    firebase.auth().createUserWithEmailAndPassword(email, password);

  const signIn = (email: string, password: string) =>
    firebase.auth().signInWithEmailAndPassword(email, password);

  const signOut = () => firebase.auth().signOut();

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut }}>
      {props.children}
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
