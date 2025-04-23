import React from 'react';
import { BellIcon, MoonIcon, LogOutIcon, ChevronRightIcon, ShieldIcon } from 'lucide-react';
export function Profile() {
  return <div className="bg-[#F8F7FF] min-h-screen pb-20">
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-4">
          <img src="https://placekitten.com/200/200" alt="User pic" className="w-20 h-20 rounded-full object-cover" />
          <div>
            <h1 className="text-2xl font-bold text-[#232a4c]">Dana Albinali</h1>
            <p className="text-gray-600">dana@polytechnic.com</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl">
            <button className="w-full flex items-center justify-between text-[#232a4c] hover:bg-gray-50 transition-all duration-200">
              <div className="flex items-center gap-3">
                <BellIcon size={20} />
                <span>Notifications</span>
              </div>
              <ChevronRightIcon size={20} className="text-gray-400 transform group-hover:translate-x-1 transition-all duration-200" />
            </button>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-[#232a4c]">
                <MoonIcon size={20} />
                <span>Dark Mode</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#232a4c]"></div>
              </label>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <button className="w-full flex items-center justify-between text-[#232a4c]">
              <div className="flex items-center gap-3">
                <ShieldIcon size={20} />
                <span>Privacy & Security</span>
              </div>
              <ChevronRightIcon size={20} className="text-gray-400" />
            </button>
          </div>
        </div>
        <button className="w-full flex items-center justify-center gap-2 text-[#E45D61] bg-white p-4 rounded-xl hover:bg-red-50 transform hover:scale-[1.02] transition-all duration-200">
          <LogOutIcon size={20} />
          <span>Log Out</span>
        </button>
        <div className="text-center text-gray-500 text-sm">Version 1.0.0</div>
      </div>
    </div>;
}