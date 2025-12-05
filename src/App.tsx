import React, { useState, useEffect } from 'react';
import './App.css';
import LoginScreen from './components/LoginScreen';
import FarmerDashboard from './components/FarmerDashboard';
import RetailerDashboard from './components/RetailerDashboard';
import { User, Language } from './types';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [language, setLanguage] = useState<Language>('hindi');

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedLang = localStorage.getItem('language') as Language;
    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedLang) setLanguage(savedLang);
  }, []);

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  if (!user) {
    return <LoginScreen onLogin={handleLogin} language={language} onLanguageChange={handleLanguageChange} />;
  }

  return user.role === 'farmer' ? (
    <FarmerDashboard user={user} language={language} onLogout={handleLogout} onLanguageChange={handleLanguageChange} />
  ) : (
    <RetailerDashboard user={user} language={language} onLogout={handleLogout} onLanguageChange={handleLanguageChange} />
  );
}

export default App;