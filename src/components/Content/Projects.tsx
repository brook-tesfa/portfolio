import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Platform",
    tech: ["React", "Node.js", "MongoDB"],
    description: "A full-featured e-commerce platform with real-time inventory management.",
    link: "https://github.com/yourusername/ecommerce"
  },
  {
    title: "Task Management System",
    tech: ["Vue.js", "Express", "PostgreSQL"],
    description: "Enterprise task management system with team collaboration features.",
    link: "https://github.com/yourusername/task-manager"
  },
  {
    title: "AI Content Generator",
    tech: ["Python", "TensorFlow", "FastAPI"],
    description: "AI-powered content generation tool for marketing teams.",
    link: "https://github.com/yourusername/ai-content-gen"
  }
];

interface ProjectsProps {
  searchQuery: string;
}

export function Projects({ searchQuery }: ProjectsProps) {
  const filteredProjects = searchQuery
    ? projects.filter(project => 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : projects;

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-[#4ec9b0]">Featured Projects</h2>
      {filteredProjects.map((project, index) => (
        <div key={index} className="bg-[#2d2d2d] p-6 rounded-lg">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold text-[#9cdcfe]">{project.title}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#4ec9b0] hover:text-[#6ad0b5]">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          <p className="text-[#d4d4d4] mt-2">{project.description}</p>
          <div className="flex gap-2 mt-4">
            {project.tech.map((tech, i) => (
              <span key={i} className="px-2 py-1 text-sm bg-[#37373d] rounded text-[#9cdcfe]">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}