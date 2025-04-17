import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from 'lucide-react';
export function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState('');
  const moods = [{
    emoji: '😊',
    label: 'Happy'
  }, {
    emoji: '😌',
    label: 'Calm'
  }, {
    emoji: '😐',
    label: 'Neutral'
  }, {
    emoji: '😢',
    label: 'Sad'
  }, {
    emoji: '😰',
    label: 'Anxious'
  }];
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = ['26', '27', '28', '1', '2', '3', '4'];
  return <div className="bg-[#F8F7FF] min-h-screen pb-20">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-[#232a4c]">Mood Tracker</h1>
            <p className="text-gray-600 mt-1">
              Track your feelings and discover emotional patterns
            </p>
          </div>
          <img src="https://placekitten.com/100/100" alt="User avatar" className="w-12 h-12 rounded-full object-cover" />
        </div>
        <div className="bg-white p-6 rounded-xl">
          <h2 className="text-lg font-medium text-[#232a4c] mb-4">
            How are you feeling today?
          </h2>
          <div className="flex justify-between mb-6">
            {moods.map(({
            emoji,
            label
          }) => <button key={label} onClick={() => setSelectedMood(label)} className={`flex flex-col items-center gap-2 transform hover:scale-105 transition-all duration-200 ${selectedMood === label ? 'opacity-100' : 'opacity-50'}`}>
                <span className="text-3xl transition-all duration-200">
                  {emoji}
                </span>
                <span className="text-sm text-gray-600">{label}</span>
              </button>)}
          </div>
          <textarea placeholder="Add a note about how you're feeling..." className="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#232a4c] h-24 mb-4" />
          <button className="w-full bg-[#232a4c] text-white py-3 rounded-lg font-medium">
            Save Mood
          </button>
        </div>
        <div className="bg-white p-6 rounded-xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-[#232a4c]">March 2025</h2>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transform hover:scale-105 transition-all duration-200">
                <ChevronLeftIcon size={20} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transform hover:scale-105 transition-all duration-200">
                <ChevronRightIcon size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-4">
            {weekDays.map(day => <div key={day} className="text-center text-sm text-gray-600">
                {day}
              </div>)}
            {daysInMonth.map(day => <div key={day} className="text-center py-2">
                <span className="text-[#232a4c]">{day}</span>
              </div>)}
          </div>
        </div>
        <button className="w-full bg-gradient-to-r from-[#232a4c] to-[#6C5DD3] text-white p-6 rounded-xl flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">
              Want to reflect more deeply?
            </h2>
            <p className="text-white/80">Try our AI-powered journaling</p>
          </div>
          <ArrowRightIcon size={24} />
        </button>
      </div>
    </div>;
}