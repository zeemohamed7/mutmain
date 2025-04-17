import React, { useState } from 'react';
import { BookOpenIcon, PenIcon, MessageCircleIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function JournalEntry() {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const moods = [{
    emoji: '😊',
    label: 'Happy'
  }, {
    emoji: '😢',
    label: 'Anxious'
  }, {
    emoji: '🙏',
    label: 'Grateful'
  }, {
    emoji: '😔',
    label: 'Sad'
  }, {
    emoji: '😴',
    label: 'Tired'
  }];
  const tags = ['Gratitude', 'Reflection', 'Stress', 'Success', 'Growth', 'Challenge'];
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };
  return <div className="bg-white min-h-screen pb-20">
      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-[#232a4c] text-2xl font-bold">
            Journal
          </h1>
          <BookOpenIcon className="text-[#232a4c]" size={24} />
        </div>
        <div className="flex gap-2 mb-6">
          <button className="flex-1 flex items-center justify-center gap-2 bg-[#232a4c] p-3 rounded-lg">
            <PenIcon size={20} className="text-white" />
            <span className="text-white">Journal Entry</span>
          </button>
          <button onClick={() => navigate('/chat')} className="flex-1 flex items-center justify-center gap-2 bg-[#F0EFFF] p-3 rounded-lg">
            <MessageCircleIcon size={20} className="text-gray-500" />
            <span className="text-gray-500">Chat Reflection</span>
          </button>
        </div>
        <div className="mb-6">
          <h2 className="text-[#232a4c] text-lg mb-4">How are you feeling?</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {moods.map(({
            emoji,
            label
          }) => <button key={label} onClick={() => setSelectedMood(label)} className={`flex flex-col items-center p-4 bg-white rounded-lg min-w-[80px] shadow-sm ${selectedMood === label ? 'ring-2 ring-[#232a4c]' : 'border border-gray-200'}`}>
                <span className="text-2xl">{emoji}</span>
                <span className="text-sm text-gray-600 mt-2">{label}</span>
              </button>)}
          </div>
        </div>
        <div className="mb-6">
          <textarea placeholder="Start typing your thoughts..." className="w-full h-40 p-4 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#232a4c]" />
        </div>
        <div className="mb-6">
          <h2 className="text-[#232a4c] text-lg mb-4">
            Add tags to your entry
          </h2>
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => <button key={tag} onClick={() => toggleTag(tag)} className={`px-4 py-2 rounded-full ${selectedTags.includes(tag) ? 'bg-[#232a4c] text-white' : 'bg-white text-gray-600 border border-gray-200'}`}>
                {tag}
              </button>)}
          </div>
        </div>
        <button className="w-full bg-[#232a4c] text-white py-4 rounded-lg flex items-center justify-center gap-2">
          Save
          <span className="text-xl">→</span>
        </button>
      </div>
    </div>;
}