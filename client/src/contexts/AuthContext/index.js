import React, { createContext, useContext } from "react";
import useAuth from "./useAuth";

// Creating a named context
const AuthContext = createContext();

// Creating a provider to wrap components that needs to access Auth/User's data
// Note: A provider is a special component that pass the context to its children to access the context's value
export function AuthProvider({ children }) {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

// Hook for consuming Authentication or User related data (For components to use the context)
export default function AuthConsumer() {
  return useContext(AuthContext);
}
