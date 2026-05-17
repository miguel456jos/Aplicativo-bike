import { createContext, useContext, useState } from "react";

type AuthContextData = {
  user: string | null;
  signIn: () => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<string | null>(null);

  function signIn() {
    setUser("Monguel");
  }

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}