import { createContext, useState } from "react";

export interface UserAuthenticated {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  roles: string[];
}

export interface AuthContextData {
  isAuthenticated: boolean;
  user: null | UserAuthenticated;
}

export interface SignInData {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextData);
export type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<null | UserAuthenticated>(null);
  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInData) {
    const { accessToken, ...userData } = await signInRequest({
      email,
      password,
    });

    setCookie(undefined, "finance.accessToken", accessToken, {
      maxAge: 60 * 60 * 1, // one hour
    });
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
