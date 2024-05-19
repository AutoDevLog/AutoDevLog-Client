// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    // Check if there is a token in localStorage
    const token = localStorage.getItem('token');
    const storedNickname = localStorage.getItem('nickname');
    if (token === 'dump-token' || process.env.NODE_ENV === 'development') {
      setIsAuthenticated(true);
      setNickname(storedNickname)
    }
  }, []);

  const login = (token, nickname) => {
    localStorage.setItem('token', token);
    localStorage.setItem('nickname', nickname);
    setIsAuthenticated(true);
    setNickname(nickname);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('nickname');
    setIsAuthenticated(false);
    setNickname('');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated,nickname, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
