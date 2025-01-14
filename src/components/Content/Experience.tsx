import React from 'react';

const experience = [
  {
    role: "Senior Full Stack Developer",
    company: "Tech Corp",
    period: "2020 - Present",
    details: [
      "Led development of microservices architecture",
      "Mentored junior developers",
      "Improved CI/CD pipeline efficiency by 40%"
    ]
  },
  {
    role: "Full Stack Developer",
    company: "StartUp Inc",
    period: "2018 - 2020",
    details: [
      "Built scalable web applications",
      "Implemented authentication system",
      "Reduced loading time by 60%"
    ]
  }
];

interface ExperienceProps {
  searchQuery: string;
}

export function Experience({ searchQuery }: ExperienceProps) {
  const filteredExperience = searchQuery
    ? experience.filter(job => 
        job.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.details.some(detail => detail.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : experience;

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-[#4ec9b0]">Work Experience</h2>
      {filteredExperience.map((job, index) => (
        <div key={index} className="bg-[#2d2d2d] p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-[#9cdcfe]">{job.role}</h3>
          <div className="text-[#4ec9b0] mt-1">{job.company}</div>
          <div className="text-[#6a9955] text-sm mt-1">{job.period}</div>
          <ul className="list-disc list-inside mt-4 space-y-2 text-[#d4d4d4]">
            {job.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}