import React from "react";
import { useUserQuery } from "data-access";
import { AuthContext, AuthState } from "./duck";

interface AuthProviderType {
  children?: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderType> = ({ children }) => {
  const [auth, setAuth] = React.useState<AuthState>({
    isAuthenticating: true,
    isLoggedIn: false,
    user: null,
    token: localStorage.getItem("token"),
  });

  const { data, error } = useUserQuery({
    variables: {
      input: { id: auth.token },
    },
  });

  const signInCheck = React.useCallback(() => {
    if (data) {
      setAuth({
        isAuthenticating: false,
        isLoggedIn: true,
        user: data.user,
        token: auth.token,
      });
    }
  }, [setAuth, data, error]);

  React.useEffect(() => {
    signInCheck();
  }, [signInCheck]);

  React.useEffect(() => {
    if (error) {
      localStorage.removeItem("token");
      setAuth({
        isAuthenticating: false,
        isLoggedIn: false,
        user: null,
      });
    }
  }, [setAuth, error]);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
