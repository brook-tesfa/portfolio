import React from 'react';
import { About } from './About';
import { Projects } from './Projects';
import { Experience } from './Experience';
import { Skills } from './Skills';

interface ContentProps {
  activeSection: string;
  searchQuery: string;
}

export function Content({ activeSection, searchQuery }: ContentProps) {
  const renderContent = () => {
    switch(activeSection) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects searchQuery={searchQuery} />;
      case 'experience':
        return <Experience searchQuery={searchQuery} />;
      case 'skills':
        return <Skills searchQuery={searchQuery} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 bg-[#1e1e1e] p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {renderContent()}
      </div>
    </div>
  );
}