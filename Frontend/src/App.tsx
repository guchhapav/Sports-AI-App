import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Preferences from './pages/Preferences';
import Chat from './pages/Chat';
import About from './pages/About';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="preferences" element={<Preferences />} />
            <Route path="chat" element={<Chat />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;