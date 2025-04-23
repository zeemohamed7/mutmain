import React from 'react';
import { HomeIcon, BookIcon, BellIcon, UserIcon, BarChartIcon } from 'lucide-react';
interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}
export function Navbar({
  currentPath,
  onNavigate
}: NavbarProps) {
  return <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-3">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <NavItem icon={<HomeIcon />} label="Home" active={currentPath === '/'} onClick={() => onNavigate('/')} />
          <NavItem icon={<BookIcon />} label="Journal" active={currentPath === '/journal'} onClick={() => onNavigate('/journal')} />
          <NavItem icon={<BarChartIcon />} label="Mood" active={currentPath === '/mood'} onClick={() => onNavigate('/mood')} />
          <NavItem icon={<BellIcon />} label="Reminders" active={currentPath === '/reminders'} onClick={() => onNavigate('/reminders')} />
          <NavItem icon={<UserIcon />} label="Profile" active={currentPath === '/profile'} onClick={() => onNavigate('/profile')} />
        </div>
      </div>
    </nav>;
}
interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}
function NavItem({
  icon,
  label,
  active = false,
  onClick
}: NavItemProps) {
  return <button onClick={onClick} className={`flex flex-col items-center gap-1 transform hover:scale-105 transition-all duration-200 ${active ? 'text-[#232a4c]' : 'text-gray-500'}`}>
      {icon}
      <span className="text-xs">{label}</span>
    </button>;
}