import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({children}){
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () =>{
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    window.location.href = '/';
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{isLoggedIn, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(){
    return useContext(AuthContext);
};

