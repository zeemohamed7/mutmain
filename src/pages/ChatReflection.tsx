import React, { useState } from 'react';
import { BookOpenIcon, PenIcon, MessageCircleIcon, SendIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function ChatReflection() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([{
    id: 1,
    text: "I see you're feeling alone. Would you like to talk about what's on your mind?",
    isAI: true
  }]);
  return <div className="bg-white min-h-screen flex flex-col">
      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-[#232a4c] text-2xl font-bold">
            Journal
          </h1>
          <BookOpenIcon className="text-[#232a4c]" size={24} />
        </div>
        <div className="flex gap-2 mb-6">
          <button onClick={() => navigate('/journal')} className="flex-1 flex items-center justify-center gap-2 bg-[#F0EFFF] p-3 rounded-lg">
            <PenIcon size={20} className="text-gray-500" />
            <span className="text-gray-500">Journal Entry</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 bg-[#232a4c] p-3 rounded-lg">
            <MessageCircleIcon size={20} className="text-white" />
            <span className="text-white">Chat Reflection</span>
          </button>
        </div>
      </div>
      <div className="flex-1 bg-[#F8F7FF] flex flex-col pb-20">
        <div className="flex-1 p-4 space-y-4">
          {messages.map(message => <div key={message.id} className="flex items-start gap-3">
              {message.isAI && <div className="w-8 h-8 rounded-full bg-[#232a4c] bg-opacity-20 flex items-center justify-center">
                  <MessageCircleIcon size={16} className="text-[#232a4c]" />
                </div>}
              <div className={`p-3 rounded-lg max-w-[80%] ${message.isAI ? 'bg-white border border-gray-200' : 'bg-[#232a4c] text-white ml-auto'}`}>
                {message.text}
              </div>
            </div>)}
        </div>
        <div className="p-4">
          <div className="flex gap-2">
            <input type="text" placeholder="Type your thoughts here..." className="flex-1 rounded-full px-4 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#232a4c]" />
            <button className="w-10 h-10 rounded-full bg-[#232a4c] flex items-center justify-center">
              <SendIcon size={18} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>;
}