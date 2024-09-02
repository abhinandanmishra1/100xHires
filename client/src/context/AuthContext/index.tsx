// create AuthContext

import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextValue {
    user: {
        id: string
    },
    token: string
}

export const AuthContext = createContext({} as AuthContextValue);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [value, setValue] = useState({} as AuthContextValue);

  // on application start
  // fetch the token from sessionstorage, cookie or localstorage
  // if token is present then value will contain `user` details

  useEffect(() => {
    // implement your logic here
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
}
