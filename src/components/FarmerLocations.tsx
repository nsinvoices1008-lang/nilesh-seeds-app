import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../utils/translations';

interface Props {
  language: Language;
}

const FarmerLocations: React.FC<Props> = ({ language }) => {
  const t = translations[language];
  const [farmers, setFarmers] = useState<any[]>([]);

  useEffect(() => {
    // Load farmer locations from localStorage
    const allUsers = Object.keys(localStorage)
      .filter(key => key.startsWith('user'))
      .map(key => JSON.parse(localStorage.getItem(key) || '{}'))
      .filter(user => user.role === 'farmer' && user.location);
    
    setFarmers(allUsers);
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">📍 {t.farmerLocations}</h2>
      </div>
      <div className="card-content">
        {farmers.length === 0 ? (
          <p>{t.noResults}</p>
        ) : (
          <div className="grid grid-2">
            {farmers.map((farmer, index) => (
              <div key={index} className="card">
                <h3>{farmer.username}</h3>
                <p>📞 {farmer.phone}</p>
                <p>📍 Lat: {farmer.location.latitude.toFixed(4)}, Lng: {farmer.location.longitude.toFixed(4)}</p>
                <button className="btn btn-primary">{t.viewOnMap}</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FarmerLocations;