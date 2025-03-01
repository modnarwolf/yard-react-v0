import React from 'react';
import { MessageSquare, HelpCircle, Send } from 'lucide-react';

export function ChatTile() {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <div className="text-sm text-gray-500">testBtn testBtn2</div>
        <div className="flex gap-2">
          <button className="px-2 py-1 text-xs border border-gray-200 rounded flex items-center gap-1">
            <HelpCircle size={12} />
            test
          </button>
          <button className="px-2 py-1 text-xs border border-green-200 text-green-600 rounded flex items-center gap-1">
            <MessageSquare size={12} />
            Initiate Chat
          </button>
        </div>
      </div>
      <div className="h-32 bg-gray-50 rounded mb-2"></div>
      <div className="flex gap-2">
        <input 
          type="text" 
          placeholder="Type your message here..." 
          className="flex-1 px-3 py-1.5 text-sm border border-gray-200 rounded"
        />
        <button className="px-3 py-1.5 text-sm bg-green-50 text-green-600 rounded border border-green-100 flex items-center gap-1">
          <Send size={14} />
          Send
        </button>
      </div>
    </div>
  );
}