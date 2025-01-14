import React from 'react';

const skills = [
  {
    category: "Frontend",
    skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "Express", "FastAPI", "GraphQL"]
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
  },
  {
    category: "DevOps",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"]
  }
];

interface SkillsProps {
  searchQuery: string;
}

export function Skills({ searchQuery }: SkillsProps) {
  const filteredSkills = searchQuery
    ? skills.filter(category => 
        category.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : skills;

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-[#4ec9b0]">Technical Skills</h2>
      <div className="grid grid-cols-2 gap-6">
        {filteredSkills.map((category, index) => (
          <div key={index} className="bg-[#2d2d2d] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#9cdcfe] mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-[#37373d] rounded text-[#d4d4d4]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}