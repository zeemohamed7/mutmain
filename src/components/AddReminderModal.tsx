import React from 'react';
import { XIcon, DropletIcon } from 'lucide-react';
interface AddReminderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}
export function AddReminderModal({
  isOpen,
  onClose,
  onSubmit
}: AddReminderModalProps) {
  if (!isOpen) return null;
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-all duration-300">
      <div className="bg-white rounded-xl w-full max-w-md mx-4 transform transition-all duration-300 scale-100 opacity-100">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-[#232a4c]">
              New Reminder
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 hover:rotate-90 transition-all duration-200">
              <XIcon size={24} />
            </button>
          </div>
          <form className="space-y-6" onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const data = {
              title: formData.get('activityName'),
              time: formData.get('time'),
              frequency: formData.get('category'),
              icon: <DropletIcon className="text-[#232a4c]" size={24} /> // Default icon
            };
            onSubmit(data);
          }}>
            <div>
              <label className="block text-[#232a4c] font-medium mb-2">
                Activity Name
              </label>
              <input name="activityName" type="text" placeholder="e.g., Drink Water" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#232a4c]" />
            </div>
            <div>
              <label className="block text-[#232a4c] font-medium mb-2">
                Frequency
              </label>
              <select name="category" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#232a4c] appearance-none bg-white">
                <option value="Daily">Daily</option>
                <option value="Weekdays">Weekdays</option>
                <option value="Weekends">Weekends</option>
                <option value="Custom">Custom</option>
              </select>
            </div>
            <div>
              <label className="block text-[#232a4c] font-medium mb-2">
                Time
              </label>
              <input name="time" type="time" defaultValue="08:00" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#232a4c]" />
            </div>
            <button type="submit" className="w-full bg-[#232a4c] text-white py-3 rounded-lg font-medium">
              Create Reminder
            </button>
          </form>
        </div>
      </div>
    </div>;
}