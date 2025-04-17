import React from 'react';
import { PhoneIcon, MessageCircleIcon, ArrowLeftIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function Emergency() {
  const navigate = useNavigate();
  const emergencyContacts = [{
    name: 'Emergency Services',
    number: '000',
    description: 'For immediate emergency assistance',
    icon: <PhoneIcon className="text-white" size={24} />,
    urgent: true
  }, {
    name: 'Lifeline',
    number: '13 11 14',
    description: '24/7 crisis support and suicide prevention',
    icon: <PhoneIcon className="text-white" size={24} />,
    urgent: true
  }, {
    name: 'Crisis Text Line',
    number: '0477 13 11 14',
    description: "Text 'Help' for 24/7 support",
    icon: <MessageCircleIcon className="text-white" size={24} />,
    urgent: false
  }];
  return <div className="bg-[#F8F7FF] min-h-screen pb-20">
      <div className="p-6 space-y-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-[#232a4c]">
          <ArrowLeftIcon size={20} />
          <span>Back</span>
        </button>
        <div>
          <h1 className="text-2xl font-bold text-[#232a4c]">Need Help Now?</h1>
          <p className="text-gray-600 mt-1">
            You're not alone. Help is available 24/7.
          </p>
        </div>
        <div className="space-y-4">
          {emergencyContacts.map((contact, index) => <div key={index} className={`p-6 rounded-xl ${contact.urgent ? 'bg-[#E45D61]' : 'bg-[#232a4c]'}`}>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-semibold text-white">
                  {contact.name}
                </h2>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  {contact.icon}
                </div>
              </div>
              <p className="text-white/80 mb-4">{contact.description}</p>
              <a href={`tel:${contact.number.replace(/\s/g, '')}`} className="inline-flex items-center justify-center w-full py-3 bg-white rounded-lg text-[#232a4c] font-medium">
                Call {contact.number}
              </a>
            </div>)}
        </div>
        <div className="bg-white p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-[#232a4c] mb-4">
            Additional Resources
          </h2>
          <ul className="space-y-4 text-gray-600">
            <li>• Find a mental health professional near you</li>
            <li>• Online support groups and communities</li>
            <li>• Self-help resources and coping strategies</li>
          </ul>
        </div>
        <div className="bg-[#F0EFFF] p-4 rounded-xl text-center">
          <p className="text-[#232a4c]">
            Remember, seeking help is a sign of strength 💜
          </p>
        </div>
      </div>
    </div>;
}