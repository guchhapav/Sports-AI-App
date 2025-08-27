import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserPreferences, Sport, NewsArticle, ChatMessage } from '../types';
import { availableSports, mockNews, mockChatMessages } from '../data/mockData';

interface AppContextType {
  preferences: UserPreferences;
  sports: Sport[];
  news: NewsArticle[];
  chatMessages: ChatMessage[];
  updateSportPreference: (sportId: string, category: 'following' | 'curious' | null) => void;
  toggleDarkMode: () => void;
  addChatMessage: (message: ChatMessage) => void;
  getPersonalizedNews: () => NewsArticle[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [preferences, setPreferences] = useState<UserPreferences>({
    followingSports: ['football', 'basketball'],
    curiousSports: ['soccer', 'tennis'],
    darkMode: false
  });

  const [sports, setSports] = useState<Sport[]>(availableSports);
  const [news] = useState<NewsArticle[]>(mockNews);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(mockChatMessages);

  useEffect(() => {
    const savedPreferences = localStorage.getItem('sportsAppPreferences');
    if (savedPreferences) {
      const parsed = JSON.parse(savedPreferences);
      setPreferences(parsed);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('sportsAppPreferences', JSON.stringify(preferences));
    document.documentElement.setAttribute('data-bs-theme', preferences.darkMode ? 'dark' : 'light');
  }, [preferences]);

  const updateSportPreference = (sportId: string, category: 'following' | 'curious' | null) => {
    setPreferences(prev => {
      const newFollowing = prev.followingSports.filter(id => id !== sportId);
      const newCurious = prev.curiousSports.filter(id => id !== sportId);

      if (category === 'following') {
        newFollowing.push(sportId);
      } else if (category === 'curious') {
        newCurious.push(sportId);
      }

      return {
        ...prev,
        followingSports: newFollowing,
        curiousSports: newCurious
      };
    });

    setSports(prev => prev.map(sport => 
      sport.id === sportId ? { ...sport, category } : sport
    ));
  };

  const toggleDarkMode = () => {
    setPreferences(prev => ({
      ...prev,
      darkMode: !prev.darkMode
    }));
  };

  const addChatMessage = (message: ChatMessage) => {
    setChatMessages(prev => [...prev, message]);
  };

  const getPersonalizedNews = () => {
    const userSports = [...preferences.followingSports, ...preferences.curiousSports];
    return news.filter(article => userSports.includes(article.sport));
  };

  return (
    <AppContext.Provider value={{
      preferences,
      sports,
      news,
      chatMessages,
      updateSportPreference,
      toggleDarkMode,
      addChatMessage,
      getPersonalizedNews
    }}>
      {children}
    </AppContext.Provider>
  );
};