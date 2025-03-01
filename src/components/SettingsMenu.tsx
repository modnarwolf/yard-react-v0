import React, { useState, useRef, useEffect } from 'react';
import { Settings, HelpCircle, Moon, Sun, GripVertical, Share2, RefreshCw, Lock } from 'lucide-react';

interface SettingsMenuProps {
  isDraggingEnabled: boolean;
  setIsDraggingEnabled: (enabled: boolean) => void;
}

export function SettingsMenu({ isDraggingEnabled, setIsDraggingEnabled }: SettingsMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDragging = () => {
    setIsDraggingEnabled(!isDraggingEnabled);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="p-2 rounded-full hover:bg-gray-100 focus:outline-none"
        aria-label="Settings"
      >
        <Settings size={20} className="text-gray-600" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-20 py-1 border border-gray-200 overflow-hidden">
          <div className="px-4 py-3 text-sm text-gray-700 font-medium border-b border-gray-100">
            Settings
          </div>
          
          <div className="px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GripVertical size={16} className="text-gray-600" />
              <span className="text-sm text-gray-700">Enable dragging</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isDraggingEnabled}
                onChange={toggleDragging}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
            </label>
          </div>

          <div className="px-4 py-3 flex items-center justify-between border-t border-gray-100">
            <div className="flex items-center gap-2">
              {isDarkMode ? 
                <Moon size={16} className="text-gray-600" /> : 
                <Sun size={16} className="text-gray-600" />
              }
              <span className="text-sm text-gray-700">Dark mode</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleDarkMode}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
            </label>
          </div>
          
          <div className="px-4 py-2 border-t border-gray-100">
            <div className="flex items-center gap-2 text-sm text-gray-700 py-2 hover:bg-gray-50 cursor-pointer rounded px-2">
              <Share2 size={16} className="text-gray-600" />
              <span>Share dashboard</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700 py-2 hover:bg-gray-50 cursor-pointer rounded px-2">
              <RefreshCw size={16} className="text-gray-600" />
              <span>Sync data</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700 py-2 hover:bg-gray-50 cursor-pointer rounded px-2">
              <Lock size={16} className="text-gray-600" />
              <span>Privacy settings</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700 py-2 hover:bg-gray-50 cursor-pointer rounded px-2">
              <HelpCircle size={16} className="text-gray-600" />
              <span>Help</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}