import React, { useEffect } from 'react';
import './Css/Project.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    id: 1,
    name: 'Todoist',
    description: 'This is a Todo website developed in React which stores the data in local storage. It is currently hosted on Vercel.',
    link: 'https://todo-jade-alpha.vercel.app/index',
    img: './images/Todo_web.png',
  },
  {
    id: 2,
    name: 'TodoApp',
    description: 'This is a Todo React Native app. Currently not hosted.',
    link: '#', // Update with the actual link once hosted
    img: './images/Todo_mob.jpeg',
  },
];

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const openProject = (link) => {
    if (link !== '#') {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="text-center min-h-screen p-8 bg-cover">
      <h1 data-aos="fade-up" className="text-3xl font-bold mb-6">
        My<span className='text-white border-2 border-black text-stroke'>Project</span>
      </h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white">
        {projects.map((project) => (
          <div key={project.id} className="bg-black p-6 rounded shadow-md drop-shadow-2xl">
            <img data-aos="fade-up" src={"https://source.unsplash.com/random/300x300/?code"} alt={""} className="mb-4 rounded-md h-1/6 " style={{ width: '100%', height: 'auto' }} />
            <h2 data-aos="fade-up" className="text-xl font-bold mb-2 text-white">{project.name}</h2>
            <p data-aos="fade-up" className="mb-4 text-stroke text-white">{project.description}</p>
            <p data-aos="zoom-in" className="hover:text-black hover:bg-white hover:border-0 text-stroke text-white border border-color-white" onClick={() => openProject(project.link)}>Visit Project</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
