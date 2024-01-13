import React from "react";
import "./Css/Experience.css";

const Experience = () => {
  const Experience = [
    {
      companyname: "Blitzcode Systems",
      job: "Intership",
      date: "Jan 2023",
    },
    {
      companyname: "Blitzcode Systems",
      job: "FullStack developer",
      date: "Working Here",
    },
  ];

  return (
    <div className="h-fit gap-4">
      <h2 className="font-semibold text-4xl text-center" id="#exp">
        Experience
      </h2>
      {Experience.map((exp, index) => (
        <div
          className="flex-col justify-center m-12 text-center items-center"
          key={index}
        >
          <div className="flex m-2 justify-center ">
            <p className="w-fit rounded-2xl p-3 font-medium border-blue-400 border-b-2 border-e-4 hover:bg-gradient-to-r hover:border-2 from-white to-blue-300">
              {exp.companyname}
            </p>
          </div>
          <div className="flex m-2 justify-center  ">
            <p className="w-fit rounded-2xl p-1 px-4 font-normal border-blue-400 border-r-2 hover:border-2">
              {exp.job}
            </p>
          </div>
          <div className="flex m-2 justify-center ">
            <p className="w-fit rounded-2xl p-1 px-4 font-light border-blue-400 text-sm border-b-2 border-r-2 hover:border-2 ">
              {exp.date}
            </p>
          </div>
          <div className="flex m-2 justify-center ">  {/* seprating two experiences */}
            <p className="w-fit rounded-full p-3 font-medium changing-border-div   hover:bg-gradient-to-r hover:border-2 from-white to-blue-300"></p>
          </div>
          <div className="flex m-2 justify-center ">  {/* seprating two experiences */}
            <p className="w-fit rounded-full p-3 font-medium changing-border-div   hover:bg-gradient-to-r hover:border-2 from-white to-blue-300"></p>
          </div>
          <div className="flex m-2 justify-center  ">  {/* seprating two experiences */}
            <p className="w-fit changing-border-div rounded-full  p-3 font-medium    hover:bg-gradient-to-r hover:border-2 from-white to-blue-300"></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
