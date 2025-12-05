import React from 'react';
import { Language } from '../types';
import { translations } from '../utils/translations';
import './VideoCall.css';

interface Props {
  onClose: () => void;
  language: Language;
}

const VideoCall: React.FC<Props> = ({ onClose, language }) => {
  const t = translations[language];

  return (
    <div className="video-call-overlay">
      <div className="video-call-container">
        <div className="video-header">
          <h3>📹 {t.videoCall}</h3>
          <button onClick={onClose} className="close-btn">✕</button>
        </div>
        <div className="video-content">
          <div className="video-placeholder">
            <p>📹 Video calling feature</p>
            <p>Integrate with WebRTC, Agora, or Twilio</p>
          </div>
        </div>
        <div className="video-controls">
          <button className="control-btn">🎤</button>
          <button className="control-btn">📹</button>
          <button className="control-btn end-call" onClick={onClose}>📞</button>
        </div>
      </div>
    </div>
  );
};

export default VideoCall;