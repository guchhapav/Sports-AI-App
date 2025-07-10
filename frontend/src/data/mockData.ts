import { NewsArticle, ChatMessage } from '../types'

export const MOCK_ARTICLES: NewsArticle[] = [
  {
    id: '1',
    title: 'Lakers Defeat Warriors in Overtime Thriller',
    summary: 'LeBron James scored 35 points as the Lakers edged out the Warriors 128-125 in a thrilling overtime battle at Crypto.com Arena.',
    content: 'In a game that lived up to the hype, the Los Angeles Lakers defeated the Golden State Warriors 128-125 in overtime. LeBron James led the way with 35 points, 8 rebounds, and 12 assists, while Anthony Davis contributed 28 points and 15 rebounds. For the Warriors, Stephen Curry had 42 points but it wasn\'t enough to prevent the loss.',
    sport: 'nba',
    publishedAt: '2024-01-15T20:30:00Z',
    source: 'ESPN',
    url: 'https://espn.com/nba/story/1',
    imageUrl: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    title: 'Understanding the Offside Rule in Soccer',
    summary: 'A comprehensive guide to one of soccer\'s most misunderstood rules, explaining when a player is considered offside.',
    content: 'The offside rule in soccer is designed to prevent players from simply camping out near the opponent\'s goal. A player is in an offside position if they are nearer to the opponent\'s goal line than both the ball and the second-last opponent when the ball is played by a teammate. However, being in an offside position is not an offense in itself.',
    sport: 'soccer',
    publishedAt: '2024-01-15T18:00:00Z',
    source: 'Sports Illustrated',
    url: 'https://si.com/soccer/explainer/1',
    imageUrl: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
    isExplainer: true
  },
  {
    id: '3',
    title: 'Chiefs Secure Home Field Advantage',
    summary: 'Kansas City Chiefs clinch the #1 seed in the AFC playoffs with a dominant 31-17 victory over the Chargers.',
    content: 'The Kansas City Chiefs secured home-field advantage throughout the AFC playoffs with a convincing 31-17 win over the Los Angeles Chargers. Patrick Mahomes threw for 320 yards and 3 touchdowns, while Travis Kelce had 8 catches for 115 yards and 2 scores.',
    sport: 'nfl',
    publishedAt: '2024-01-15T16:45:00Z',
    source: 'NFL.com',
    url: 'https://nfl.com/news/1',
    imageUrl: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    title: 'What is a Hat Trick in Hockey?',
    summary: 'Learn about one of hockey\'s most celebrated achievements and its interesting origins.',
    content: 'A hat trick in hockey occurs when a player scores three goals in a single game. The term originated in cricket but was adopted by hockey in the 1940s. When a player achieves a hat trick, fans traditionally throw their hats onto the ice in celebration. There are different types: a natural hat trick (three consecutive goals) is considered more impressive than a regular hat trick.',
    sport: 'nhl',
    publishedAt: '2024-01-15T14:20:00Z',
    source: 'The Hockey News',
    url: 'https://thehockeynews.com/explainer/1',
    imageUrl: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=800',
    isExplainer: true
  },
  {
    id: '5',
    title: 'Dodgers Sign Star Pitcher to Record Deal',
    summary: 'Los Angeles Dodgers make headlines with a 12-year, $325 million contract for Japanese sensation Yamamoto.',
    content: 'The Los Angeles Dodgers have signed Japanese pitcher Yoshinobu Yamamoto to a record-breaking 12-year, $325 million contract. The 25-year-old right-hander was the most coveted free agent this offseason after dominating in Japan\'s NPB league.',
    sport: 'mlb',
    publishedAt: '2024-01-15T12:00:00Z',
    source: 'MLB.com',
    url: 'https://mlb.com/news/1',
    imageUrl: 'https://images.pexels.com/photos/1308713/pexels-photo-1308713.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
]

export const MOCK_CHAT_MESSAGES: ChatMessage[] = [
  {
    id: '1',
    content: 'Can you explain what overtime rules are in basketball?',
    isUser: true,
    timestamp: '2024-01-15T21:00:00Z'
  },
  {
    id: '2',
    content: 'In basketball, overtime is a 5-minute extra period played when the game is tied at the end of regulation. Each team gets additional timeouts, and the first team to have more points when the overtime period ends wins the game. If it\'s still tied, additional overtime periods are played until there\'s a winner.',
    isUser: false,
    timestamp: '2024-01-15T21:00:30Z'
  }
]