import React from 'react';
import { useNavigate } from 'react-router-dom';
export function SignIn() {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add authentication logic here
    navigate('/');
  };
  return <div className="min-h-screen bg-[#F8F7FF] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Logo and App Name */}
        <div className="text-center space-y-4">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-[#232a4c] to-[#6C5DD3] rounded-xl flex items-center justify-center transform hover:scale-105 transition-all duration-200">
            <span className="text-4xl">🌟</span>
          </div>
          <h1 className="text-3xl font-bold text-[#232a4c]">MindfulMe</h1>
          <p className="text-gray-600">Your daily mental wellness companion</p>
        </div>
        {/* Sign In Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#232a4c]">
                Email
              </label>
              <input id="email" type="email" required className="w-full p-3 mt-1 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#232a4c] transition-all duration-200" placeholder="Enter your email" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#232a4c]">
                Password
              </label>
              <input id="password" type="password" required className="w-full p-3 mt-1 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#232a4c] transition-all duration-200" placeholder="Enter your password" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-[#232a4c] focus:ring-[#232a4c]" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <button type="button" className="text-sm text-[#6C5DD3] hover:underline">
              Forgot password?
            </button>
          </div>
          <button type="submit" className="w-full py-3 bg-[#232a4c] text-white rounded-lg font-medium transform hover:scale-[1.02] hover:shadow-lg transition-all duration-200">
            Sign in
          </button>
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <button type="button" className="text-[#6C5DD3] hover:underline">
              Sign up
            </button>
          </p>
        </form>
      </div>
    </div>;
}