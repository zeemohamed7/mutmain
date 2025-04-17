import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ChatReflection } from './pages/ChatReflection';
import { JournalEntry } from './pages/JournalEntry';
import { Dashboard } from './pages/Dashboard';
import { Reminders } from './pages/Reminders';
import { MoodTracker } from './pages/MoodTracker';
import { Emergency } from './pages/Emergency';
import { Profile } from './pages/Profile';
import { SignIn } from './pages/SignIn';
import { Loading } from './pages/Loading';
import LandingPage from './pages/LandingPage';

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  return <>
      {location.pathname === '/' ? <Dashboard /> : null}
      {location.pathname === '/journal' ? <JournalEntry /> : null}
      {location.pathname === '/chat' ? <ChatReflection /> : null}
      {location.pathname === '/reminders' ? <Reminders /> : null}
      {location.pathname === '/mood' ? <MoodTracker /> : null}
      {location.pathname === '/emergency' ? <Emergency /> : null}
      {location.pathname === '/profile' ? <Profile /> : null}
      <Navbar currentPath={location.pathname} onNavigate={navigate} />
    </>;
}

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // Show landing page for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LandingPage />;
  }

  return (
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/*" element={<Layout />} />
      </Routes>
  )
}

export default App;