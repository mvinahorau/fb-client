import React from "react";
import { User } from "data-access";

export interface AuthState {
  isAuthenticating: boolean;
  isLoggedIn: boolean;
  user: User | null | undefined;
  token?: string | null;
}

export type SetAuth = React.Dispatch<React.SetStateAction<AuthState>>;

export interface AuthContextType {
  auth?: AuthState;
  setAuth: SetAuth;
}
