import {React,useEffect} from "react";
import "./Css/Experience.css";
import "./Css/Project.css"
import Aos from "aos";
import "aos/dist/aos.css"


const Experience = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
},[])

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
    <div className="h-fit py-6  bg-cover bg-blend-lighten " >
      <h2  className="font-semibold text-4xl text-center sm:pt-12" id="#exp">
        Experience
      </h2>
      {Experience.map((exp, index) => (
        <div 
          className="flex-col justify-center m-12 text-center items-center"
          key={index}
        >
          <div data-aos ="zoom-in" className="flex m-2 justify-center ">
            <p className="w-fit text-stroke text-white bg-black rounded-2xl p-3 font-medium border-black border-b-2 border-4 hover:bg-gradient-to-r hover:border-2 from-white to-slate-400 cursor-pointer">
              {exp.companyname}
            </p>
          </div>
          <div data-aos ="fade-up" className="flex m-2 justify-center  ">
            <p className="w-fit  rounded-2xl text-black p-1 px-4 font-normal border-black border-2 hover:border-2">
              {exp.job}
            </p>
          </div>
          <div data-aos ="fade-up" className="flex m-2 justify-center ">
            <p className="w-fit  rounded-2xl text-black p-1 px-4 font-light border-black text-sm border-b-2 border-2 hover:border-2 ">
              {exp.date}
            </p>
          </div>
          <div data-aos ="fade-up" className="flex m-2 justify-center ">  {/* seprating two experiences */}
            <p className=" w-fit rounded-full p-3 font-medium changing-border-div   hover:bg-gradient-to-r hover:border-2"></p>
          </div>
          <div data-aos ="fade-up" className="flex m-2 justify-center ">  {/* seprating two experiences */}
            <p className=" w-fit rounded-full p-3 font-medium changing-border-div   hover:bg-gradient-to-r hover:border-2 "></p>
          </div>
          <div data-aos ="fade-up" className="flex m-2 justify-center  ">  {/* seprating two experiences */}
            <p className=" w-fit changing-border-div rounded-full  p-3 font-medium    hover:bg-gradient-to-r hover:border-2 "></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
