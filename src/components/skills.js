import React from 'react';


const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Node.js',
  'Express.js', 'MongoDB', 'Tailwind CSS', 'Git',
  'Responsive Design', 'Python', 'Django', 'SQL',
  'REST API', 'GraphQL', 'Redux', 'Sass', 'Bootstrap',
  // Add more skills as needed
];

const Skills = () => {
  return (
    <div className="bg-white min-h-screen p-8 text-center">
      <h1 className="text-3xl font-bold mb-6 ">My Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className=" border-blue-400 border-b-2 border-e-2 p-4 rounded shadow-md hover:bg-gradient-to-r hover:border-2 from-white to-blue-300 hover:drop-shadow-2xl">
            <p className="text-lg">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
