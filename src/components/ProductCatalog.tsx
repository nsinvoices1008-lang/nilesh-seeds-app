import React, { useState } from 'react';
import { Language, Product } from '../types';
import { translations } from '../utils/translations';

interface Props {
  language: Language;
  userRole: 'farmer' | 'retailer';
}

const ProductCatalog: React.FC<Props> = ({ language, userRole }) => {
  const t = translations[language];
  
  const sampleProducts: Product[] = [
    {
      id: '1',
      name: 'Wheat Seeds',
      nameHindi: 'गेहूं के बीज',
      nameMarathi: 'गव्हाचे बियाणे',
      category: 'seeds',
      price: 500,
      stock: 100,
      description: 'High quality wheat seeds',
      descriptionHindi: 'उच्च गुणवत्ता वाले गेहूं के बीज',
      descriptionMarathi: 'उच्च दर्जाचे गव्हाचे बियाणे'
    }
  ];

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">🛒 {t.productCatalog}</h2>
      </div>
      <div className="grid grid-2">
        {sampleProducts.map(product => (
          <div key={product.id} className="card">
            <h3>{language === 'hindi' ? product.nameHindi : language === 'marathi' ? product.nameMarathi : product.name}</h3>
            <p>{t.price}: ₹{product.price}</p>
            <p>{t.stock}: {product.stock}</p>
            <button className="btn btn-primary">{t.addToCart}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;