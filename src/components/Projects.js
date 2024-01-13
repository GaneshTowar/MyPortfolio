import React from 'react';

const projects = [
  {
    id: 1,
    name: 'Todoist',
    description: 'Description of Project 1.',
    link: 'https://example.com/project1',
  },
  {
    id: 2,
    name: 'TodoApp',
    description: 'Description of Project 2.',
    link: 'https://example.com/project2',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="bg-white text-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6 ">My Projects</h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="bg-blue-500 p-6 rounded shadow-md text-white">
            <h2 className="text-xl font-bold mb-2">{project.name}</h2>
            <p className="text-gray-200 mb-4">{project.description}</p>
            <a href={project.link} className="hover:underline">Visit Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
