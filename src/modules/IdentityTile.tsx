import React from 'react';
import { Clipboard, Pencil, Download, Upload } from 'lucide-react';

export function IdentityTile() {
  return (
    <div>
      <div className="mb-2">
        <p className="text-sm text-gray-500">Peer ID:</p>
        <p className="text-sm font-mono truncate">cf3653e963dd...</p>
      </div>
      <div className="mb-2">
        <p className="text-sm text-gray-500">Username:</p>
        <p className="text-sm">fernando</p>
      </div>
      <div className="space-y-2 mt-3">
        <button className="w-full flex items-center justify-center gap-2 px-3 py-1.5 text-sm border border-gray-200 rounded">
          <Clipboard size={14} className="text-gray-500" />
          Copy Peer ID
        </button>
        <button className="w-full flex items-center justify-center gap-2 px-3 py-1.5 text-sm border border-gray-200 rounded">
          <Pencil size={14} className="text-gray-500" />
          Change Username
        </button>
        <button className="w-full flex items-center justify-center gap-2 px-3 py-1.5 text-sm border border-gray-200 rounded">
          <Download size={14} className="text-blue-500" />
          Import Identity
        </button>
        <button className="w-full flex items-center justify-center gap-2 px-3 py-1.5 text-sm border border-gray-200 rounded">
          <Upload size={14} className="text-blue-500" />
          Export Identity
        </button>
      </div>
    </div>
  );
}