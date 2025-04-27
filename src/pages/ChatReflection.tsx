import React, { useState } from 'react';
import { BookOpenIcon, PenIcon, MessageCircleIcon, SendIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function ChatReflection() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([{
    id: 1,
    text: "Hello! I'm here to help you reflect on your journal entries. What would you like to discuss today?",
    isAI: true
  }]);
  const [input, setInput] = useState('');

  const formatMessage = (message: string): string => {
    // Example: Trim whitespace and replace double newlines with single newlines
    return message.trim().replace(/\n\n/g, '\n');
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: messages[messages.length - 1]?.id + 1 || 1, // Ensure unique ID
      text: input,
      isAI: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_SERVER_URL}/api/chat`, {
        message: input,
      });

      const formattedMessage = formatMessage(response.data.reply); // Format the AI response

      const aiMessage = {
        id: userMessage.id + 1, // Increment ID based on the last message
        text: formattedMessage,
        isAI: true,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err: any) {
      const errorMessage =
        err.response?.status === 429
          ? 'Too many requests! Please wait a moment before trying again.'
          : 'Something went wrong. Please try again.';

      const aiMessage = {
        id: userMessage.id + 1, // Increment ID based on the last message
        text: errorMessage,
        isAI: true,
      };

      setMessages((prev) => [...prev, aiMessage]);
    }
  };

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
            <input type="text" placeholder="Type your thoughts here..." className="flex-1 rounded-full px-4 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#232a4c]" value={input} onChange={(e) => setInput(e.target.value)} />
            <button className="w-10 h-10 rounded-full bg-[#232a4c] flex items-center justify-center" onClick={sendMessage}>
              <SendIcon size={18} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>;
}