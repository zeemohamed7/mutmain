import React from 'react';
import { PenSquareIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
  const navigate = useNavigate();
  const moods = ['😊', '😐', '😕', '😢', '😠'];
  return <div className="bg-[#F8F7FF] min-h-screen pb-20">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-[#232a4c]">Hi Dana,</h1>
            <p className="text-gray-600 mt-1">how are you feeling today?</p>
          </div>
          <img src="https://placekitten.com/100/100" alt="User avatar" className="w-12 h-12 rounded-full object-cover" />
        </div>
        <div className="bg-white p-6 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#232a4c]">
              Today's Mood
            </h2>
            <button className="text-[#6C5DD3] font-medium">View History</button>
          </div>
          <div className="flex justify-between">
            {moods.map((mood, index) => <button key={index} className="text-3xl opacity-50 hover:opacity-100 transform hover:scale-110 transition-all duration-200">
                {mood}
              </button>)}
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-[#232a4c] mb-4">
            Today's Self-Care
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="w-5 h-5 rounded-full" />
                <span className="text-[#232a4c]">Get ready for uni 😔</span>
              </div>
              <button className="text-[#6C5DD3] font-medium">Snooze</button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="w-5 h-5 rounded-full" />
                <span className="text-[#232a4c]">Pet kitty</span>
              </div>
              <button className="text-[#6C5DD3] font-medium">Snooze</button>
            </div>
          </div>
        </div>
        <button onClick={() => navigate('/chat')} className="w-full bg-gradient-to-r from-[#232a4c] to-[#6C5DD3] text-white p-6 rounded-xl flex justify-between items-center transform hover:scale-[1.02] hover:shadow-lg transition-all duration-200">
          <div>
            <h2 className="text-xl font-semibold mb-1">Reflect with AI</h2>
            <p className="text-white/80">Let our journal guide your thoughts</p>
          </div>
          <PenSquareIcon size={24} />
        </button>
        <button onClick={() => navigate('/emergency')} className="w-full bg-[#E45D61] text-white py-4 rounded-xl text-lg font-medium transform hover:scale-[1.02] hover:shadow-lg transition-all duration-200">
          Need Help Now?
        </button>
      </div>
    </div>;
}