import React from 'react';
import { User, Language } from '../types';
import { translations } from '../utils/translations';

interface Props {
  user: User;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onLogout: () => void;
}

const Settings: React.FC<Props> = ({ user, language, onLanguageChange, onLogout }) => {
  const t = translations[language];

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">⚙️ {t.settings}</h2>
      </div>
      <div className="card-content">
        <div style={{ marginBottom: '20px' }}>
          <h3>{t.language}</h3>
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button 
              onClick={() => onLanguageChange('hindi')}
              className={`btn ${language === 'hindi' ? 'btn-primary' : 'btn-secondary'}`}
            >
              हिंदी
            </button>
            <button 
              onClick={() => onLanguageChange('english')}
              className={`btn ${language === 'english' ? 'btn-primary' : 'btn-secondary'}`}
            >
              English
            </button>
            <button 
              onClick={() => onLanguageChange('marathi')}
              className={`btn ${language === 'marathi' ? 'btn-primary' : 'btn-secondary'}`}
            >
              मराठी
            </button>
          </div>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>{t.username}</h3>
          <p>{user.username}</p>
          <button className="btn btn-secondary">{t.changeUsername}</button>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <button className="btn btn-secondary">{t.changePassword}</button>
        </div>
        
        <div>
          <button onClick={onLogout} className="btn btn-danger">{t.logout}</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;