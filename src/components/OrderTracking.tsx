import React from 'react';
import { Language } from '../types';
import { translations } from '../utils/translations';

interface Props {
  language: Language;
  userId: string;
}

const OrderTracking: React.FC<Props> = ({ language, userId }) => {
  const t = translations[language];

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">📦 {t.myOrders}</h2>
      </div>
      <div className="card-content">
        <p>{t.noResults}</p>
      </div>
    </div>
  );
};

export default OrderTracking;