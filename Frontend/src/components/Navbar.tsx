import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Settings, MessageCircle, Info } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <Home className="me-2" size={24} />
          SportsHub
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/') ? 'active' : ''}`} 
                to="/"
              >
                <Home size={18} className="me-1" />
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/preferences') ? 'active' : ''}`} 
                to="/preferences"
              >
                <Settings size={18} className="me-1" />
                Preferences
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/chat') ? 'active' : ''}`} 
                to="/chat"
              >
                <MessageCircle size={18} className="me-1" />
                Chat
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`} 
                to="/about"
              >
                <Info size={18} className="me-1" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;