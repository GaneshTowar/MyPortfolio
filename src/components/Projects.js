import React from 'react';
import "./Css/Project.css";

const projects = [
  {
    id: 1,
    name: 'Todoist',
    description: 'This is a Todo website Developed in react which stores the data in local storage which is currently hosted on vercel, I have also made a mern stack version of this which is not hosted yet.',
    link: 'https://todo-jade-alpha.vercel.app/index',
  },
  {
    id: 2,
    name: 'TodoApp',
    description: 'This is a Todo React native app. Currently not hosted.',
    link: '#', // Update with the actual link once hosted
  },
  // Add more projects as needed
];

const Projects = () => {
  const openProject = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="text-center min-h-screen p-8 bg-cover">
      <h1 className="text-3xl font-bold mb-6">My<span className='text-white border-2 border-black text-stroke'>Project</span></h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white">
        {projects.map((project) => (
          <div key={project.id} className="bg-black p-6 rounded shadow-md drop-shadow-2xl">
            <h2 className="text-xl font-bold mb-2 text-white">{project.name}</h2>
            <p className="mb-4 text-stroke text-white">{project.description}</p>
            <p className="hover:text-black hover:bg-white hover:border-0 text-stroke text-white border border-color-white" onClick={() => openProject(project.link)}>Visit Project</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
