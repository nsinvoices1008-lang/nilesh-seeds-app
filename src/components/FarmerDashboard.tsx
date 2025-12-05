import React, { useState } from 'react';
import { User, Language } from '../types';
import { translations } from '../utils/translations';
import ChatInterface from './ChatInterface';
import WeatherWidget from './WeatherWidget';
import VideoCall from './VideoCall';
import ProductCatalog from './ProductCatalog';
import OrderTracking from './OrderTracking';
import Settings from './Settings';
import './Dashboard.css';

interface Props {
  user: User;
  language: Language;
  onLogout: () => void;
  onLanguageChange: (lang: Language) => void;
}

const FarmerDashboard: React.FC<Props> = ({ user, language, onLogout, onLanguageChange }) => {
  const [activeTab, setActiveTab] = useState<'chat' | 'products' | 'orders' | 'settings'>('chat');
  const [showVideoCall, setShowVideoCall] = useState(false);
  const t = translations[language];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>🌾 निलेश सीड्स</h1>
        <div className="user-info">
          <span>{user.username}</span>
          <button onClick={onLogout} className="logout-btn">{t.logout}</button>
        </div>
      </header>

      <div className="dashboard-content">
        {activeTab === 'chat' && (
          <div className="chat-view">
            <div className="chat-header">
              <h2>{t.retailerChat}</h2>
              <button onClick={() => setShowVideoCall(true)} className="video-call-btn">
                📹 {t.videoCall}
              </button>
            </div>
            
            <WeatherWidget location={user.location} language={language} />
            
            <ChatInterface user={user} language={language} />
            
            {showVideoCall && (
              <VideoCall onClose={() => setShowVideoCall(false)} language={language} />
            )}
          </div>
        )}

        {activeTab === 'products' && <ProductCatalog language={language} userRole="farmer" />}
        {activeTab === 'orders' && <OrderTracking language={language} userId={user.username} />}
        {activeTab === 'settings' && (
          <Settings
            user={user}
            language={language}
            onLanguageChange={onLanguageChange}
            onLogout={onLogout}
          />
        )}
      </div>

      <nav className="bottom-nav">
        <button onClick={() => setActiveTab('chat')} className={activeTab === 'chat' ? 'active' : ''}>
          💬<br/>{t.chat}
        </button>
        <button onClick={() => setActiveTab('products')} className={activeTab === 'products' ? 'active' : ''}>
          🛒<br/>{t.products}
        </button>
        <button onClick={() => setActiveTab('orders')} className={activeTab === 'orders' ? 'active' : ''}>
          📦<br/>{t.orders}
        </button>
        <button onClick={() => setActiveTab('settings')} className={activeTab === 'settings' ? 'active' : ''}>
          ⚙️<br/>{t.settings}
        </button>
      </nav>
    </div>
  );
};

export default FarmerDashboard;