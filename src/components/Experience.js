import React from "react";
import "./Css/Experience.css";
import background from "./Images/background.jpg"
import "./Css/Project.css"
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
    <div className="h-fit py-6  bg-cover bg-blend-lighten text-stroke text-white" >
      <h2 className="font-semibold text-4xl text-center sm:pt-12" id="#exp">
        Experience
      </h2>
      {Experience.map((exp, index) => (
        <div
          className="flex-col justify-center m-12 text-center items-center"
          key={index}
        >
          <div className="flex m-2 justify-center ">
            <p className="w-fit bg-black rounded-2xl p-3 font-medium border-black border-b-2 border-4 hover:bg-gradient-to-r hover:border-2 from-white to-slate-400 cursor-pointer">
              {exp.companyname}
            </p>
          </div>
          <div className="flex m-2 justify-center  ">
            <p className="w-fit bg-white rounded-2xl p-1 px-4 font-normal border-black border-2 hover:border-2">
              {exp.job}
            </p>
          </div>
          <div className="flex m-2 justify-center ">
            <p className="w-fit bg-white rounded-2xl p-1 px-4 font-light border-black text-sm border-b-2 border-2 hover:border-2 ">
              {exp.date}
            </p>
          </div>
          <div className="flex m-2 justify-center ">  {/* seprating two experiences */}
            <p className="bg-white w-fit rounded-full p-3 font-medium changing-border-div   hover:bg-gradient-to-r hover:border-2"></p>
          </div>
          <div className="flex m-2 justify-center ">  {/* seprating two experiences */}
            <p className="bg-white w-fit rounded-full p-3 font-medium changing-border-div   hover:bg-gradient-to-r hover:border-2 "></p>
          </div>
          <div className="flex m-2 justify-center  ">  {/* seprating two experiences */}
            <p className="bg-white w-fit changing-border-div rounded-full  p-3 font-medium    hover:bg-gradient-to-r hover:border-2 "></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
