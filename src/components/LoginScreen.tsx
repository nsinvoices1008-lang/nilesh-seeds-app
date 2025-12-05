import React, { useState } from 'react';
import { User, Language } from '../types';
import { translations } from '../utils/translations';
import './LoginScreen.css';

interface Props {
  onLogin: (user: User) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const LoginScreen: React.FC<Props> = ({ onLogin, language, onLanguageChange }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Retailer login - exact match required
    if (username === 'Nilesh Seeds' && password === '1008') {
      onLogin({ username, role: 'retailer' });
      return;
    }

    // Farmer login - username as name, phone as password
    if (username && password.length >= 10) {
      // Request location permission for farmers
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            onLogin({
              username,
              role: 'farmer',
              phone: password,
              location: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              }
            });
          },
          () => {
            onLogin({ username, role: 'farmer', phone: password });
          }
        );
      } else {
        onLogin({ username, role: 'farmer', phone: password });
      }
      return;
    }

    setError(t.invalidCredentials);
  };

  return (
    <div className="login-container">
      <div className="language-selector">
        <button 
          onClick={() => onLanguageChange('hindi')} 
          className={language === 'hindi' ? 'active' : ''}
        >
          हिंदी
        </button>
        <button 
          onClick={() => onLanguageChange('english')} 
          className={language === 'english' ? 'active' : ''}
        >
          English
        </button>
        <button 
          onClick={() => onLanguageChange('marathi')} 
          className={language === 'marathi' ? 'active' : ''}
        >
          मराठी
        </button>
      </div>
      
      <div className="login-card">
        <div className="logo">
          <div className="logo-icon">🌾</div>
          <h1>निलेश सीड्स</h1>
          <p className="tagline">{t.tagline}</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>{t.username}</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={t.usernamePlaceholder}
              required
            />
          </div>
          
          <div className="form-group">
            <label>{t.password}</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t.passwordPlaceholder}
              required
            />
          </div>
          
          {error && <div className="error">{error}</div>}
          
          <button type="submit" className="login-btn">{t.login}</button>
        </form>
        
        <div className="login-info">
          <p>ℹ️ {t.farmerInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;