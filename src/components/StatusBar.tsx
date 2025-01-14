import React from 'react';

export function StatusBar() {
  return (
    <div className="h-6 bg-[#007acc] flex items-center justify-between px-4 text-xs text-white">
      <div className="flex items-center space-x-4">
        <span>🟢 Available for hire</span>
        <span>📍 San Francisco, CA</span>
      </div>
      <div className="flex items-center space-x-4">
        <span>TypeScript</span>
        <span>UTF-8</span>
      </div>
    </div>
  );
}