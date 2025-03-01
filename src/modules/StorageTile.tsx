import React from 'react';

export function StorageTile() {
  return (
    <div>
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div className="w-1/20 h-full bg-blue-500"></div>
      </div>
      <p className="text-sm text-gray-500 mt-2">0.00 MB used of 2.00 GB</p>
    </div>
  );
}