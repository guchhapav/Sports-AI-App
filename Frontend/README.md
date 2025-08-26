# Frontend Built in React and Bootstrap

## Features

- **Personalized Dashboard**: Get news tailored to your sports preferences
- **Educational Content**: Learn about new sports with contextual summaries
- **Smart Chat Interface**: Ask questions about sports and get instant answers
- **Dark Mode Support**: Toggle between light and dark themes
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Built with Bootstrap 5 and custom styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout with navbar
│   ├── Navbar.tsx      # Navigation component
│   ├── ThemeToggle.tsx # Dark mode toggle
│   ├── SportCard.tsx   # Sport selection card
│   └── NewsCard.tsx    # News article card
├── pages/              # Main application pages
│   ├── Dashboard.tsx   # Personalized news dashboard
│   ├── Preferences.tsx # Sports selection page
│   ├── Chat.tsx        # Chat interface
│   └── About.tsx       # About page
├── context/            # React Context for state management
│   └── AppContext.tsx  # Global app state
├── data/               # Mock data and API placeholders
│   └── mockData.ts     # Sample sports and news data
├── types/              # TypeScript type definitions
│   └── index.ts        # App-wide types
└── App.tsx             # Main app component
```

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Bootstrap 5 with custom CSS
- **Icons**: Lucide React
- **Routing**: React Router v6
- **State Management**: React Context API
- **Build Tool**: Vite
- **Package Manager**: npm

## Key Features Explained

### Sports Preferences
- Click once to **follow** a sport (regular news)
- Click twice to mark as **curious** (educational content)
- Click three times to remove from interests

### Personalized Dashboard
- Shows different content based on your preferences
- Following sports: Regular news summaries
- Curious sports: Educational content with context

### Chat Interface
- Ask questions about sports rules, news, or general information
- Simulated AI responses with sports-specific knowledge
- Real-time typing indicators

### Dark Mode
- System-wide dark mode toggle
- Persists across browser sessions
- Uses Bootstrap's built-in dark theme utilities

## API Integration Ready

The app is designed with API placeholders for easy integration:

```typescript
// Example API integration points
const fetchNews = async (sports: string[]) => {
  // Replace with real API call
  const response = await fetch('/api/news', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sports })
  });
  return response.json();
};
```