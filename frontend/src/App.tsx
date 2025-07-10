import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { UserProvider } from './contexts/UserContext'
import Layout from './components/Layout'
import Onboarding from './pages/Onboarding'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import { useUser } from './contexts/UserContext'

const AppContent: React.FC = () => {
  const { user } = useUser()
  
  return (
    <Router>
      <Layout>
        <Routes>
          <Route 
            path="/" 
            element={user?.isOnboarded ? <Dashboard /> : <Onboarding />} 
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
      </Layout>
    </Router>
  )
}

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </ThemeProvider>
  )
}

export default App