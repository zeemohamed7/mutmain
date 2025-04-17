import React, { useState } from 'react';
import { BellIcon, DropletIcon, HeartIcon, FlameIcon, PlusIcon, Trash2Icon } from 'lucide-react';
import { AddReminderModal } from '../components/AddReminderModal';

export function Reminders() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reminders, setReminders] = useState([
    {
      id: 1,
      title: 'Drink Water',
      time: '8:00 AM',
      frequency: 'Daily',
      icon: <DropletIcon className="text-[#232a4c]" size={24} />
    },
    {
      id: 2,
      title: '5-Minute Meditation',
      time: '9:30 AM',
      frequency: 'Weekdays',
      icon: <HeartIcon className="text-[#232a4c]" size={24} />
    },
    {
      id: 3,
      title: 'Stretch Break',
      time: '2:00 PM',
      frequency: 'Daily',
      icon: <FlameIcon className="text-[#232a4c]" size={24} />
    }
  ]);

  const handleCreateReminder = (data: { title: string; time: string; frequency: string; icon: JSX.Element }) => {
    const newReminder = {
      id: reminders.length + 1, // Generate a new ID
      ...data
    };
    setReminders([...reminders, newReminder]); // Add the new reminder to the list
    setIsModalOpen(false);
  };

  const handleDeleteReminder = (id: number) => {
    setReminders(reminders.filter(reminder => reminder.id !== id));
  };

  return (
    <>
      <div className="bg-[#F8F7FF] min-h-screen pb-20">
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-[#232a4c] text-2xl font-bold mb-1">
              Self-Care Reminders
            </h1>
            <p className="text-[#6C5DD3]">
              Stay on track with your wellness goals
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 mb-6">
            <div className="flex items-center gap-2">
              <BellIcon className="text-[#232a4c]" />
              <span className="text-[#232a4c] font-medium">
                Active Reminders
              </span>
            </div>
            <span className="text-4xl font-bold text-[#232a4c]">{reminders.length}</span>
          </div>
          <div className="bg-[#F0EFFF] p-4 rounded-xl mb-6 text-center">
            <p className="text-[#232a4c]">Take time for you today 💛</p>
          </div>
          <div className="space-y-4">
            {reminders.map((reminder) => (
              <div
                key={reminder.id}
                className="bg-white p-4 rounded-xl flex items-center justify-between transform hover:scale-[1.02] transition-all duration-200 hover:shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F8F7FF] rounded-full flex items-center justify-center">
                    {reminder.icon}
                  </div>
                  <div>
                    <h3 className="text-[#232a4c] font-medium">{reminder.title}</h3>
                    <p className="text-gray-500 text-sm">
                      {reminder.time} • {reminder.frequency}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#232a4c]"></div>
                  </label>
                  <button
                    onClick={() => handleDeleteReminder(reminder.id)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <Trash2Icon size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="fixed bottom-24 right-6 w-14 h-14 bg-[#232a4c] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-opacity-90 transform hover:scale-110 transition-all duration-200"
        >
          <PlusIcon size={24} />
        </button>
      </div>
      <AddReminderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateReminder}
      />
    </>
  );
}