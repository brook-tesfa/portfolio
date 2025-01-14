import React from 'react';
import { Files, GitBranch, Bug, User, Settings } from 'lucide-react';

interface ActivityBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function ActivityBar({ activeTab, setActiveTab }: ActivityBarProps) {
  return (
    <div className="w-12 bg-[#333333] flex flex-col items-center py-4 space-y-4">
      <button 
        className={`p-2 hover:bg-[#424242] rounded-md ${activeTab === 'explorer' ? 'bg-[#424242]' : ''}`}
        onClick={() => setActiveTab('explorer')}
        title="Explorer"
      >
        <Files className="w-5 h-5" />
      </button>
      <button 
        className={`p-2 hover:bg-[#424242] rounded-md ${activeTab === 'git' ? 'bg-[#424242]' : ''}`}
        onClick={() => setActiveTab('git')}
        title="Source Control"
      >
        <GitBranch className="w-5 h-5" />
      </button>
      <button 
        className={`p-2 hover:bg-[#424242] rounded-md ${activeTab === 'debug' ? 'bg-[#424242]' : ''}`}
        onClick={() => setActiveTab('debug')}
        title="Debug"
      >
        <Bug className="w-5 h-5" />
      </button>
      <div className="flex-1"></div>
      <button 
        className="p-2 hover:bg-[#424242] rounded-md" 
        onClick={() => window.open('https://github.com/yourusername', '_blank')}
        title="Profile"
      >
        <User className="w-5 h-5" />
      </button>
      <button 
        className="p-2 hover:bg-[#424242] rounded-md"
        onClick={() => alert('Settings functionality coming soon!')}
        title="Settings"
      >
        <Settings className="w-5 h-5" />
      </button>
    </div>
  );
}