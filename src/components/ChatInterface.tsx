import React, { useState, useEffect, useRef } from 'react';
import { User, Language, Message } from '../types';
import { translations } from '../utils/translations';
import './ChatInterface.css';

interface Props {
  user: User;
  language: Language;
}

const ChatInterface: React.FC<Props> = ({ user, language }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const t = translations[language];

  useEffect(() => {
    // Load messages from localStorage
    const savedMessages = localStorage.getItem(`messages_${user.username}`);
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, [user.username]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: user.username,
      text: inputText,
      timestamp: new Date(),
      type: 'sent'
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem(`messages_${user.username}`, JSON.stringify(updatedMessages));
    setInputText('');

    // Simulate retailer response (for demo)
    if (user.role === 'farmer') {
      setTimeout(() => {
        const response: Message = {
          id: (Date.now() + 1).toString(),
          sender: 'Nilesh Seeds',
          text: 'धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।',
          timestamp: new Date(),
          type: 'received'
        };
        const withResponse = [...updatedMessages, response];
        setMessages(withResponse);
        localStorage.setItem(`messages_${user.username}`, JSON.stringify(withResponse));
      }, 1000);
    }
  };

  return (
    <div className="chat-interface">
      <div className="messages-container">
        {messages.length === 0 ? (
          <div className="empty-chat">
            <p>💬 {t.typeMessage}</p>
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.type}`}>
              <div className="message-content">
                <p>{msg.text}</p>
                <span className="message-time">
                  {new Date(msg.timestamp).toLocaleTimeString('hi-IN', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </span>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <form className="message-input-form" onSubmit={handleSend}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={t.typeMessage}
          className="message-input"
        />
        <button type="submit" className="send-btn">
          📤
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;