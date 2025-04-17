import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const [isSwiping, setIsSwiping] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsSwiping(true), 3000); // Start swipe animation after 3 seconds
    const navigateTimer = setTimeout(() => navigate('/'), 3500); // Navigate to dashboard after swipe animation

    return () => {
      clearTimeout(timer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  return (
    <div
      className={`flex items-center justify-center h-screen w-screen bg-gray-100 transition-transform duration-500 ${
        isSwiping ? '-translate-x-full' : ''
      }`}
    >
      <img src="/landing.png" alt="Landing" className="object-cover w-full h-full" />
    </div>
  );
};

export default LandingPage;