import { Sport, NewsArticle, ChatMessage } from '../types';

export const availableSports: Sport[] = [
  { id: 'football', name: 'Football', icon: '🏈', category: null },
  { id: 'basketball', name: 'Basketball', icon: '🏀', category: null },
  { id: 'baseball', name: 'Baseball', icon: '⚾', category: null },
  { id: 'soccer', name: 'Soccer', icon: '⚽', category: null },
  { id: 'tennis', name: 'Tennis', icon: '🎾', category: null },
  { id: 'hockey', name: 'Hockey', icon: '🏒', category: null },
  { id: 'golf', name: 'Golf', icon: '⛳', category: null },
  { id: 'swimming', name: 'Swimming', icon: '🏊', category: null },
  { id: 'running', name: 'Running', icon: '🏃', category: null },
  { id: 'cycling', name: 'Cycling', icon: '🚴', category: null },
];

export const mockNews: NewsArticle[] = [
  {
    id: '1',
    title: 'Championship Game Ends in Thrilling Overtime',
    summary: 'The home team secured a 28-24 victory after a dramatic touchdown in the final seconds of overtime.',
    sport: 'football',
    timestamp: '2024-01-15T10:30:00Z',
    isEducational: false,
    source: 'Sports Network',
    url: '#'
  },
  {
    id: '2',
    title: 'Understanding Basketball Positions and Roles',
    summary: 'Basketball teams consist of five players with distinct roles: Point Guard (floor general), Shooting Guard (perimeter scorer), Small Forward (versatile wing), Power Forward (inside-outside threat), and Center (paint presence). Each position requires specific skills and responsibilities.',
    sport: 'basketball',
    timestamp: '2024-01-15T09:15:00Z',
    isEducational: true,
    source: 'Sports Education',
    url: '#'
  },
  {
    id: '3',
    title: 'Trade Deadline Approaches with Major Moves Expected',
    summary: 'Several star players are rumored to be on the move as teams prepare for the playoff push.',
    sport: 'basketball',
    timestamp: '2024-01-15T08:45:00Z',
    isEducational: false,
    source: 'Trade Insider',
    url: '#'
  },
  {
    id: '4',
    title: 'Soccer Basics: Understanding Offside Rules',
    summary: 'The offside rule prevents players from gaining an unfair advantage by positioning themselves closer to the opponent\'s goal line than both the ball and the second-last opponent when the ball is played by a teammate.',
    sport: 'soccer',
    timestamp: '2024-01-15T07:20:00Z',
    isEducational: true,
    source: 'Soccer Guide',
    url: '#'
  },
  {
    id: '5',
    title: 'Tennis Tournament Upset Shakes Up Rankings',
    summary: 'The unseeded player defeated the world number 2 in straight sets to advance to the semifinals.',
    sport: 'tennis',
    timestamp: '2024-01-15T06:00:00Z',
    isEducational: false,
    source: 'Tennis Today',
    url: '#'
  },
  {
    id: '6',
    title: 'Hockey Penalty System Explained',
    summary: 'Hockey penalties range from minor infractions (2 minutes) to major penalties (5 minutes). Common penalties include slashing, tripping, boarding, and checking from behind. Power plays occur when the opposing team has a player advantage.',
    sport: 'hockey',
    timestamp: '2024-01-15T05:30:00Z',
    isEducational: true,
    source: 'Hockey Basics',
    url: '#'
  }
];

export const mockChatMessages: ChatMessage[] = [
  {
    id: '1',
    text: 'Hello! I\'m your sports assistant. Ask me anything about sports news, rules, or general questions!',
    sender: 'bot',
    timestamp: '2024-01-15T12:00:00Z'
  }
];