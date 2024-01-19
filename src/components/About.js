import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { LiaFileDownloadSolid } from "react-icons/lia";
import profile from "./Images/profile.jpeg";
import "./Css/ProfileImage.css";
import React from "react";

const About = ({navBar, setnavBar}) => {
  return (
    <>
      <section className="grid md:grid-cols-6 h-4/5 place-content-around cursor-default grid-cols-1 ">
        <div className="flex md:flex-col gap-8 items-center col-span-1 justify-center md:order-1 order-3">
          <div className="cursor-pointer hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-blue-500 px-4 py-1 rounded-md">
            <SiGithub size={25} />
          </div>
          <div className="cursor-pointer hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-blue-500 px-4 py-1 rounded-md">
            <FaLinkedinIn size={25} />
          </div>
          <div className="cursor-pointer hover:uppercase hover:bg-slate-200 hover:font-semibold hover:border-r-2 hover:bg-gradient-to-r from-slate-50 to-blue-500 px-4 py-1 rounded-md">
            <LiaFileDownloadSolid size={25} />
          </div>
        </div>

        <div className="flex flex-col gap-6 col-span-3 content-center md:text-left px-20 md:order-2 order-2 text-center">
          <p className="text-5xl font-bold">Ganesh Towar</p>
          <p className="text-xl font-semibold">Full Stack developer</p>
          <p className=" font-normal text-slate-500">
            Welcome to my portfolio! I am a passionate web developer with
            experience in React, JavaScript, and more.
          </p>
          <p className=""></p>
        </div>
        {   
        !navBar &&  
            <div
              className="md:h-64 md:w-full md:bg-cover md:m-auto moving-border-div bg-cover md:order-3 order-1 transition-opacity duration-1000 ease-in-out z-0"
              style={{
                backgroundImage: `url(${profile})`,
              }}
            ></div>
        }
      </section>
    </>
  );
};

export default About;
