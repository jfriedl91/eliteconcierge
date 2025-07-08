import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedAuth = sessionStorage.getItem('isAuthenticated') === 'true';
      setIsAuthenticated(storedAuth);
    } catch (e) {
      console.error("Could not read from sessionStorage", e);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = (password) => {
    const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD;
    if (password === correctPassword) {
      sessionStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};