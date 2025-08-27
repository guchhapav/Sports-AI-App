import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle';

const Layout: React.FC = () => {
  return (
    <div className="min-vh-100">
      <Navbar />
      <main className="container-fluid py-4">
        <Outlet />
      </main>
      <ThemeToggle />
    </div>
  );
};

export default Layout;