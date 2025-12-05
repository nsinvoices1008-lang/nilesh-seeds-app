import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../utils/translations';
import './WeatherWidget.css';

interface Props {
  location?: { latitude: number; longitude: number; address?: string };
  language: Language;
}

const WeatherWidget: React.FC<Props> = ({ location, language }) => {
  const [weather, setWeather] = useState<any>(null);
  const t = translations[language];

  useEffect(() => {
    if (location) {
      // Simulated weather data (replace with actual API call)
      setWeather({
        temperature: 28,
        humidity: 65,
        windSpeed: 12,
        condition: 'Partly Cloudy',
        icon: '⛅'
      });
    }
  }, [location]);

  if (!weather) {
    return (
      <div className="weather-widget">
        <p>📍 {t.weather}: {t.loading}</p>
      </div>
    );
  }

  return (
    <div className="weather-widget">
      <div className="weather-header">
        <h3>🌤️ {t.weather}</h3>
      </div>
      <div className="weather-content">
        <div className="weather-main">
          <span className="weather-icon">{weather.icon}</span>
          <span className="weather-temp">{weather.temperature}°C</span>
        </div>
        <div className="weather-details">
          <div className="weather-item">
            <span>💧 {t.humidity}:</span>
            <strong>{weather.humidity}%</strong>
          </div>
          <div className="weather-item">
            <span>💨 {t.windSpeed}:</span>
            <strong>{weather.windSpeed} km/h</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;