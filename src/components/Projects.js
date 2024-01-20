import React from 'react';
import background from "./Images/background.jpg"
import "./Css/Project.css"

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
    <div className="bg-white text-center min-h-screen p-8 bg-cover" >
      <h1 className="text-3xl font-bold mb-6">My<span className='text-white border-2 border-black text-stroke'>Project</span></h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  text-white">
        {projects.map((project) => (
          <div key={project.id} className="bg-black p-6 rounded shadow-md  drop-shadow-2xl">
            <h2 className="text-xl font-bold mb-2 text-white">{project.name}</h2>
            <p className=" mb-4 text-stroke text-white">{project.description}</p>
            <p className="hover:text-black hover:bg-white text-stroke text-white border border-color-white">Visit Project</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
