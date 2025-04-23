import React from 'react';
export function Loading() {
  return <div className="min-h-screen bg-[#F8F7FF] flex flex-col items-center justify-center p-6">
      <div className="space-y-6 text-center">
        {/* Animated Logo */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-[#232a4c] to-[#6C5DD3] rounded-xl flex items-center justify-center animate-pulse">
            <span className="text-5xl animate-bounce">🌟</span>
          </div>
          {/* Circular loading indicator */}
          <div className="absolute inset-0 border-4 border-t-[#6C5DD3] border-r-transparent border-b-transparent border-l-transparent rounded-xl animate-spin"></div>
        </div>
        {/* App Name with fade in animation */}
        <div className="space-y-2 animate-fade-in">
          <h1 className="text-3xl font-bold text-[#232a4c]">MindfulMe</h1>
          <p className="text-gray-600">Your daily mental wellness companion</p>
        </div>
      </div>
    </div>;
}