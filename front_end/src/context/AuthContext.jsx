

import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const storedUserInfo = JSON.parse(localStorage.getItem("userInfo")) || null;
  const [authUser, setAuthUserState] = useState(storedUserInfo);

  const setAuthUser = (userInfo) => {
    // Update the state
    setAuthUserState(userInfo);

    // Update localStorage
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  };

  const clearAuthUser = () => {
    // Clear the state
    setAuthUserState(null);

    // Remove from localStorage
    localStorage.removeItem("userInfo");
  };

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, clearAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
