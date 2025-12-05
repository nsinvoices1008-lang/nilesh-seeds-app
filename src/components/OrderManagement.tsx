import React from 'react';
import { Language } from '../types';
import { translations } from '../utils/translations';

interface Props {
  language: Language;
}

const OrderManagement: React.FC<Props> = ({ language }) => {
  const t = translations[language];

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">🛒 {t.manageOrders}</h2>
      </div>
      <div className="card-content">
        <p>{t.noResults}</p>
      </div>
    </div>
  );
};

export default OrderManagement;