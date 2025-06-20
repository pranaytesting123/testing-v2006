import React, { useState, useEffect } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

const AdminPanel: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const adminSession = localStorage.getItem('adminSession');
    if (adminSession) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (username: string, password: string): boolean => {
    // Simple authentication - in production, this should be secure
    if (username === 'admin' && password === 'catalog123') {
      setIsAuthenticated(true);
      localStorage.setItem('adminSession', 'true');
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminSession');
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return <Dashboard onLogout={handleLogout} />;
};

export default AdminPanel;