import React from 'react';
import { User, Code, Briefcase, Puzzle } from 'lucide-react';

interface ExplorerProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Explorer({ activeSection, setActiveSection }: ExplorerProps) {
  const sections = [
    { id: 'about', icon: User, label: 'About Me' },
    { id: 'projects', icon: Code, label: 'Projects' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'skills', icon: Puzzle, label: 'Skills' }
  ];

  return (
    <div className="p-4">
      <h2 className="text-xs uppercase tracking-wide mb-2 text-[#6f7681]">Portfolio</h2>
      <div className="space-y-1">
        {sections.map(({ id, icon: Icon, label }) => (
          <div 
            key={id}
            className={`flex items-center space-x-2 p-1 rounded cursor-pointer ${
              activeSection === id ? 'bg-[#37373d]' : 'hover:bg-[#37373d]'
            }`}
            onClick={() => setActiveSection(id)}
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}