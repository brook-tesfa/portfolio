import React, { useState } from 'react';
import { TitleBar } from './components/TitleBar';
import { ActivityBar } from './components/ActivityBar';
import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';
import { StatusBar } from './components/StatusBar';

function App() {
  const [activeTab, setActiveTab] = useState('explorer');
  const [activeSection, setActiveSection] = useState('about');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="h-screen flex flex-col bg-[#1e1e1e] text-[#cccccc]">
      <TitleBar searchQuery={searchQuery} onSearchChange={handleSearch} />
      
      <div className="flex-1 flex">
        <ActivityBar activeTab={activeTab} setActiveTab={setActiveTab} />
        <Sidebar 
          activeTab={activeTab}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Content activeSection={activeSection} searchQuery={searchQuery} />
      </div>

      <StatusBar />
    </div>
  );
}

export default App;