import React from 'react';
import { Plus, Check, HelpCircle, RefreshCw, X } from 'lucide-react';

export function FriendsTile() {
  return (
    <div>
      <div className="mb-3">
        <p className="text-sm text-gray-500 mb-2">Yu...</p>
        <div className="flex gap-2">
          <button className="w-8 h-8 flex items-center justify-center border border-green-200 rounded">
            <Check size={16} className="text-green-600" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-blue-200 rounded">
            <HelpCircle size={16} className="text-blue-600" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-green-200 rounded">
            <RefreshCw size={16} className="text-green-600" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-red-200 rounded">
            <X size={16} className="text-red-600" />
          </button>
        </div>
      </div>
      <button className="w-full flex items-center justify-center gap-2 px-3 py-1.5 text-sm border border-gray-200 rounded">
        <Plus size={14} />
        Add Friend
      </button>
    </div>
  );
}