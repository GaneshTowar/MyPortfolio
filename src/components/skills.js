import React from 'react';
import "./Css/Project.css"


const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Node.js',
  'Express.js', 'MongoDB', 'Tailwind CSS', 'Git',
  'Responsive Design', 'Python', 'Django', 'SQL',
  'REST API', 'GraphQL', 'Redux', 'Sass', 'Bootstrap',
  // Add more skills as needed
];

const Skills = () => {
  return (
    <div className=" min-h-screen p-8 mt-0 text-center bg-cover">
      <h1 className="text-3xl font-bold mb-6 text-stroke text-white ">My Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-stroke text-white">
        {skills.map((skill, index) => (
          <div key={index} className=" border-black bg-black border-b-2 border-2 p-4 rounded shadow-md  hover:border-2  hover:drop-shadow-2xl">
            <p className="text-lg">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
