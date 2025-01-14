import React from 'react';
import { Search } from 'lucide-react';

interface TitleBarProps {
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TitleBar({ searchQuery, onSearchChange }: TitleBarProps) {
  return (
    <div className="h-12 bg-[#323233] flex items-center justify-between px-4 select-none">
      <div className="flex items-center space-x-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
          <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
        </div>
        <div className="text-sm ml-4">John Doe - Portfolio</div>
      </div>
      <div className="flex items-center space-x-4">
        <Search className="w-4 h-4" />
        <input
          type="text"
          placeholder="Search portfolio..."
          value={searchQuery}
          onChange={onSearchChange}
          className="bg-[#3c3c3c] px-2 py-1 rounded text-sm w-64 focus:outline-none focus:ring-1 focus:ring-[#007acc]"
        />
      </div>
    </div>
  );
}