import React, { useState } from 'react';
import { User, Language } from '../types';
import { translations } from '../utils/translations';
import ChatInterface from './ChatInterface';
import FarmerLocations from './FarmerLocations';
import ProductManagement from './ProductManagement';
import OrderManagement from './OrderManagement';
import DigitalLedger from './DigitalLedger';
import Settings from './Settings';
import './Dashboard.css';

interface Props {
  user: User;
  language: Language;
  onLogout: () => void;
  onLanguageChange: (lang: Language) => void;
}

const RetailerDashboard: React.FC<Props> = ({ user, language, onLogout, onLanguageChange }) => {
  const [activeTab, setActiveTab] = useState<'chat' | 'locations' | 'products' | 'orders' | 'ledger' | 'settings'>('chat');
  const t = translations[language];

  return (
    <div className="dashboard retailer">
      <header className="dashboard-header">
        <h1>🌾 निलेश सीड्स - {t.retailerPanel}</h1>
        <div className="user-info">
          <span>{user.username}</span>
          <button onClick={onLogout} className="logout-btn">{t.logout}</button>
        </div>
      </header>

      <div className="dashboard-content">
        {activeTab === 'chat' && <ChatInterface user={user} language={language} />}
        {activeTab === 'locations' && <FarmerLocations language={language} />}
        {activeTab === 'products' && <ProductManagement language={language} />}
        {activeTab === 'orders' && <OrderManagement language={language} />}
        {activeTab === 'ledger' && <DigitalLedger language={language} />}
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
        <button onClick={() => setActiveTab('locations')} className={activeTab === 'locations' ? 'active' : ''}>
          📍<br/>{t.locations}
        </button>
        <button onClick={() => setActiveTab('products')} className={activeTab === 'products' ? 'active' : ''}>
          📦<br/>{t.inventory}
        </button>
        <button onClick={() => setActiveTab('orders')} className={activeTab === 'orders' ? 'active' : ''}>
          🛒<br/>{t.orders}
        </button>
        <button onClick={() => setActiveTab('ledger')} className={activeTab === 'ledger' ? 'active' : ''}>
          📊<br/>{t.ledger}
        </button>
        <button onClick={() => setActiveTab('settings')} className={activeTab === 'settings' ? 'active' : ''}>
          ⚙️<br/>{t.settings}
        </button>
      </nav>
    </div>
  );
};

export default RetailerDashboard;