import React from 'react';
import { Plus, HelpCircle, Pencil, X } from 'lucide-react';

export function NotesTile() {
  return (
    <div>
      <div className="mb-2 p-2 bg-gray-50 rounded">
        <p className="text-sm">test</p>
        <div className="flex gap-2 mt-2">
          <button className="px-2 py-1 text-xs bg-green-50 text-green-600 rounded border border-green-100 flex items-center gap-1">
            <HelpCircle size={12} />
            View
          </button>
          <button className="px-2 py-1 text-xs bg-blue-50 text-blue-600 rounded border border-blue-100 flex items-center gap-1">
            <Pencil size={12} />
            Edit
          </button>
          <button className="px-2 py-1 text-xs bg-red-50 text-red-600 rounded border border-red-100 flex items-center gap-1">
            <X size={12} />
            Delete
          </button>
        </div>
      </div>
      <button className="flex items-center gap-1 text-sm text-green-600">
        <Plus size={16} />
        Add Note
      </button>
    </div>
  );
}