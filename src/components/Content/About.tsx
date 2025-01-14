import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function About() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-[#4ec9b0]">John Doe</h1>
      <h2 className="text-2xl text-[#9cdcfe]">Senior Full Stack Developer</h2>
      <pre className="bg-[#2d2d2d] p-4 rounded-lg mt-4">
        <code className="text-[#ce9178]">
{`const aboutMe = {
  location: "San Francisco, CA",
  experience: "5+ years",
  passion: "Building scalable web applications",
  interests: [
    "Cloud Architecture",
    "DevOps",
    "Open Source",
    "UI/UX Design"
  ]
};`}
        </code>
      </pre>
      <div className="flex space-x-4 mt-6">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[#4ec9b0] hover:text-[#6ad0b5]">
          <Github className="w-5 h-5" />
          <span>GitHub</span>
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[#4ec9b0] hover:text-[#6ad0b5]">
          <Linkedin className="w-5 h-5" />
          <span>LinkedIn</span>
        </a>
        <a href="mailto:your.email@example.com" className="flex items-center space-x-2 text-[#4ec9b0] hover:text-[#6ad0b5]">
          <Mail className="w-5 h-5" />
          <span>Email</span>
        </a>
      </div>
    </div>
  );
}