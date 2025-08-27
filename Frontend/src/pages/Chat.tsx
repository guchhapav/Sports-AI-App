import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Send, MessageCircle, Bot, User } from 'lucide-react';
import { ChatMessage } from '../types';

const Chat: React.FC = () => {
  const { chatMessages, addChatMessage } = useApp();
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('football')) {
      return 'Football is a great sport! The NFL season runs from September to February. Would you like to know about specific rules, recent games, or player statistics?';
    }
    
    if (message.includes('basketball')) {
      return 'Basketball is exciting! The NBA season runs from October to June. Are you interested in learning about positions, current standings, or upcoming games?';
    }
    
    if (message.includes('soccer')) {
      return 'Soccer (or football globally) is the world\'s most popular sport! Major leagues include the Premier League, La Liga, and Serie A. What would you like to know about soccer?';
    }
    
    if (message.includes('tennis')) {
      return 'Tennis has four Grand Slam tournaments: Australian Open, French Open, Wimbledon, and US Open. Are you interested in current rankings, upcoming tournaments, or game rules?';
    }
    
    if (message.includes('hockey')) {
      return 'Hockey is fast-paced and exciting! The NHL season runs from October to June. Would you like to know about rules, current standings, or recent trades?';
    }
    
    if (message.includes('rules') || message.includes('how')) {
      return 'I can help explain sports rules! Which sport would you like to learn about? I can break down the basics in an easy-to-understand way.';
    }
    
    if (message.includes('news') || message.includes('latest')) {
      return 'I can help you stay updated with the latest sports news! Check your dashboard for personalized news based on your preferences, or ask me about specific sports.';
    }
    
    return 'That\'s a great question! I can help with sports news, rules explanations, and general sports information. Try asking about specific sports, recent games, or rules you\'d like to understand better.';
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date().toISOString()
    };

    addChatMessage(userMessage);
    setInput('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(input),
        sender: 'bot',
        timestamp: new Date().toISOString()
      };
      
      addChatMessage(botResponse);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <div className="d-flex align-items-center">
                <MessageCircle className="me-2" size={24} />
                <h4 className="mb-0">Sports Assistant</h4>
              </div>
            </div>
            
            <div className="card-body p-0">
              <div className="chat-container p-3">
                {chatMessages.map(message => (
                  <div
                    key={message.id}
                    className={`message ${message.sender}`}
                  >
                    <div className="d-flex align-items-start">
                      <div className="me-2">
                        {message.sender === 'user' ? (
                          <User size={20} />
                        ) : (
                          <Bot size={20} />
                        )}
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-0">{message.text}</p>
                        <small className="opacity-75">
                          {new Date(message.timestamp).toLocaleTimeString()}
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="message bot">
                    <div className="d-flex align-items-start">
                      <div className="me-2">
                        <Bot size={20} />
                      </div>
                      <div className="flex-grow-1">
                        <div className="typing-indicator">
                          <span>Sports Assistant is typing</span>
                          <span className="dots">
                            <span>.</span>
                            <span>.</span>
                            <span>.</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={chatEndRef} />
              </div>
            </div>
            
            <div className="card-footer">
              <div className="input-group">
                <textarea
                  className="form-control"
                  placeholder="Ask me about sports news, rules, or anything sports-related..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  rows={1}
                  style={{ resize: 'none' }}
                />
                <button
                  className="btn btn-primary"
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;