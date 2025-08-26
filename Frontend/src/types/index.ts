export interface Sport {
  id: string;
  name: string;
  icon: string;
  category: 'following' | 'curious' | null;
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  sport: string;
  timestamp: string;
  isEducational: boolean;
  source: string;
  url: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

export interface UserPreferences {
  followingSports: string[];
  curiousSports: string[];
  darkMode: boolean;
}